import React, { useState } from 'react';
import SongTable from '../SongTable/SongTable';


const SearchBar = (props) => {  
    return (  
     <div className="song-bar-search">
         <input type = "text" className='searchBar-positon-and-size  searchBar-interior searchBar-change' placeholder='Please enter your search...' onChange={(event) => props.handleSearch(event.target.value)}  ></input>         
     </div>

    );
}
export default SearchBar;