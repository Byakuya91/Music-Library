import React, { useState } from 'react';
import SongTable from '../SongTable/SongTable';

// TODO: Create the search Bar and button  DONE 
// TODO: Import the JSON data to this component. 
// TODO: examine the JSON file 
// TODO: figure out how to filter the JSON file based on search input
// TODO: Account for no input added
// TODO: Display that information(Use SongTable Component)

const SearchBar = (props) => {
    

    return (  
     <div className="song-bar-search">
          {/* An input box to hold the text and information */}
         <input type = "text" className='searchBar-positon-and-size  searchBar-interior searchBar-change' placeholder='Please enter your search...' onChange={(event) => props.handleSearch(event.target.value)}  ></input>
         {/* Test code for a button. MAY ABANDON */}
         {/* <button type = "submit"  onClick={(event) => {searchTerm(event.target.value)}}  >Click to search</button> */}
         
            
     </div>

    );
}
 
export default SearchBar;