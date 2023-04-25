import './cart-list.styles.css'
import Card from './card/card.component'
const CardList = ({monsters}) => {
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

export default CardList;
