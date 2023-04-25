// import { Component } from "react";\
import { useEffect, useState } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
   const [monsters, setMonsters] = useState([]);
   const [searchField, setSearchField] = useState("");
   const [searchList, setSearchList] = useState(monsters);
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((monsters) => {
            setMonsters(monsters);
         });
         return ()=>{
            console.log("Succdddddddddddddddddddddddđ")
         }
   }, []);
   const onSearchChange = (event) => {
      let searchField = event.target.value;
      setSearchField(searchField);
   };

   useEffect(() => {
      setSearchList(
         monsters.filter((item) =>
            item.name.toLowerCase().includes(searchField.toLowerCase())
         )
      );
      return () => {
         console.log('this is ???????????????????????????????????????', searchField)
      }
   }, [monsters, searchField]);
   return (
      <>
         <div className="App">
            <h1 className="app-title">WolfAlone Monster Shop</h1>
            <SearchBox
               className="monster-search-box"
               onChangeHandler={onSearchChange}
               placeholder="search monsters"
            />
            <CardList monsters={searchList} />
         </div>
      </>
   );
};

// class App extends Component {
//    constructor() {
//       super();

//       this.state = {
//          monsters: [],
//          searchField: "",
//       };
//    }
//    onSearchChange = (event) => {
//       let searchField = event.target.value;
//       this.setState({ searchField });
//    };
//    componentDidMount() {
//       fetch("https://jsonplaceholder.typicode.com/users")
//          .then((response) => response.json())
//          .then((monsters) => {
//             this.setState({ monsters: monsters });
//          });
//    }
//    render() {
//       const { onSearchChange, state } = this;
//       const { monsters, searchField } = state;
//       const searchList = monsters.filter((item) =>
//          item.name.toLowerCase().includes(searchField.toLowerCase())
//       );
//       return (
//          <>
//             <div className="App">
//                <h1 className='app-title'>WolfAlone Monster Shop</h1>
//                <SearchBox

//                   className='monster-search-box'
//                   onChangeHandler={onSearchChange}
//                   placeholder="search monsters"
//                />
//                <CardList monsters={searchList} />
//             </div>
//          </>
//       );
//    }
// }

export default App;
