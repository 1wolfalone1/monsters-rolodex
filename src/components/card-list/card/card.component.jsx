import { Component } from "react";
import './card.styles.css'
class Card extends Component {
   render() {
      const { name, email, id } = this.props.monster;
      return (
         <div className="card-container" >
            <img
               src={`https://robohash.org/${
                  "adsfad" + id + "s41"
               }?set=set2&background=transparent&style=cute`}
               alt={name}
            />
            <h2>{name}</h2>
            <p>{email}</p>
         </div>
      );
   }
}

export default Card;