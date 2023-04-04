import { Component } from "react";
import './cart-list.styles.css'
import Card from './card/card.component'
class CardList extends Component {
   render() {
      const { monsters } = this.props;

      return (
        <div className="card-list">
        {monsters.map((mon) => {
           return (
              <Card monster={mon} key={mon.id}/>
           );
        })}
     </div>
      );
   }
}

export default CardList;
