import React from "react";

const Scroll = (props) => {
  console.log(props)
  return ( 
    <div style={{overflow:"scroll" , border:"1px solid #2e2e2e" , height:"600px"}}>
    {props.children}
    </div>
  )
}

export default Scroll