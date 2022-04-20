import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SongTable from "./Components/SongTable/SongTable";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  // state variables for the array of songs
  const [songs, setSongs] = useState([]);
  // create an UseEffect to activate the request
  // console.log("songs array is", songs);

  // a way to update the search
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);
  // create a function that filters based on the searchTerm
  // keys of all the search criteria
  const song_keys = ["title", "artist", "album", "genre", "releaseDate"];

  // testing keys for preparation
  console.log("the song object album is", songs[0]["album"]);

  //  TEST CODE. May utilize or discard it.
  // function getFilteredSearchResult() {
  //   if (searchTerm != "") {
  //     let searchResult = songs.filter((song) =>
  //       song.title.includes(searchTerm)
  //     );
  //     console.log(searchResult);
  //     setSearchTerm(searchResult);
  //   }
  // }

  // create a function to add the songs to the SongTable Component
  function addNewSong(song) {
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }
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
      <SearchBar handleSearch={setSearchTerm} />
      {/* Displaying the songs in the SongTable Component  */}
      <SongTable parentSongEntires={songs} />
    </div>
  );
}

export default App;
