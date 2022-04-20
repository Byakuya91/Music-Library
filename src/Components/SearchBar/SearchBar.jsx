import React, { useState, useEffect } from 'react';

// TODO: Create the search Bar and button  DONE 
//  TODO:  Get the search Bar to take input 
// TODO: get the component to filter based on typed entry
// TODO: figure out a way to update the table and filter the results.  
// TODO: Figure out how to take into consideration type of input

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (  
     <div className="song-bar-search">
         <input type = "text" placeholder='Please enter your search..' ></input>
         <button type = "submit">Click to search</button>
            
     </div>

    );
}
 
export default SearchBar;