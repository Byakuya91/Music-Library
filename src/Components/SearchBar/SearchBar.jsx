import React, { useState, useEffect } from 'react';

// TODO: Create the search Bar and button  DONE 
//  TODO:  Get the search Bar to take input 
// TODO: get the component to filter based on typed entry
// TODO: figure out a way to update the table and filter the results.  
// TODO: Figure out how to take into consideration type of input

const SearchBar = (props) => {
    // created a state variable to update the search Term 
    const [searchTerm, setSearchTerm] = useState("");
    return (  
     <div className="song-bar-search">
          {/* An input box to hold the text and information */}
         <input type = "text" placeholder='Please enter your search..' onChange={(event)=> {
             setSearchTerm(event.target.value)
         }} ></input>
         {/* Test code for a button. MAY ABANDON */}
         {/* <button type = "submit"  onClick={(event) => {searchTerm(event.target.value)}}  >Click to search</button> */}
         
            
     </div>

    );
}
 
export default SearchBar;