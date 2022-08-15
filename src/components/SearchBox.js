import React from "react";



const SearchBox = ({searchChange}) => {
  return (
       <div className=" pa2">
         <input 
         className="bg-lightest-blue pa3 ma2  ba b--green "
         type={"text"} 
         placeholder="search"
         onChange={searchChange}
         />
       </div>
  )
}


export default SearchBox