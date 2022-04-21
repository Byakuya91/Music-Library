import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SongTable from "./Components/SongTable/SongTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import "./Components/App.css";

function App() {
  // state variables for the array of songs
  const [songs, setSongs] = useState([]);
  // create an UseEffect to activate the request
  // console.log("songs array is", songs);

  // a way to update the search
  const [searchTerm, setSearchTerm] = useState("");

  // an array holding the search results when filtered
  // const [searchResults, setSearchResults] = useState([]);

  // create a function to add the songs to the SongTable Component
  function addNewSong(song) {
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }

  // TODO: shift the code for the table inside this to do function.
  // intiating the API call
  useEffect(() => {
    makeGetRequest();
  }, []);
  // retrieving API data
  async function makeGetRequest() {
    try {
      let response = await axios.get(
        "http://www.devcodecampmusiclibrary.com/api/music"
      );

      // setting the data to our state variable
      setSongs(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <SearchBar handleSearch={setSearchTerm} />
      {/* Displaying the songs in the SongTable Component  */}
      <SongTable parentSongEntires={songs} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
