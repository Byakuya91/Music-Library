import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SongTable from "./Components/SongTable/SongTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import NavBar from "./Components/NavBar/NavBar";
import AddSong from "./Components/AddSong/AddSong";
import "./Components/App.css";

function App() {
  // state variables for the array of songs
  const [songs, setSongs] = useState([]);

  // a way to update the search
  const [searchTerm, setSearchTerm] = useState("");

  // create a function to add the songs to the SongTable Component
  // get the filtered search result
  // function getSearchResult(){
  //   // define a temp variable to hold the filteredSearch
  //   let filteredSearch =
  // }
  // intiating the API call
  useEffect(() => {
    makeGetRequest();
  }, []);
  // retrieving API data
  async function makeGetRequest() {
    try {
      let response = await axios.get("http://localhost:5005/api/songs");

      // setting the data to our state variable
      setSongs(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  async function addNewSong(song) {
    try {
      let response = await axios.post("http://localhost:5005/api/songs", song);
      console.log("the response is:", response);

      // setting the data to our state variable
      setSongs(response.data);
      makeGetRequest();
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <SearchBar handleSearch={setSearchTerm} />
      <AddSong addNewSong={addNewSong} />
      <SongTable parentSongEntires={songs} searchTerm={searchTerm} />
    </div>
  );
}
export default App;
