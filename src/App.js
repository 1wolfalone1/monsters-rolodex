import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: "",
      };
   }
   onSearchChange = (event) => {
      let searchField = event.target.value;
      this.setState({ searchField });
   };
   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((monsters) => {
            this.setState({ monsters: monsters });
         });
   }
   render() {
      const { onSearchChange, state } = this;
      const { monsters, searchField } = state;
      const searchList = monsters.filter((item) =>
         item.name.toLowerCase().includes(searchField.toLowerCase())
      );
      return (
         <>
            <div className="App">
               <h1 className='app-title'>WolfAlone Monster Shop</h1>
               <SearchBox

                  className='monster-search-box'
                  onChangeHandler={onSearchChange}
                  placeholder="search monsters"
               />
               <CardList monsters={searchList} />
            </div>
         </>
      );
   }
}

export default App;
