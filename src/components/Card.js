import React from "react";

const Card = (props) => {

   return(
    <div className="bg-light-green ma2 pa3 grow dib br3 bw2 shadow-5 tc">
      <img src={`https://robohash.org/${props.id}`} alt="robote"/>
      <div>
         <h2>{props.name}</h2>
         <p>{props.email}</p>
      </div>
    </div>
   )
}



export default Card
