import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SongTable from "./Components/SongTable/SongTable";

function App() {
  // state variables for the array of songs
  const [songs, setSongs] = useState([]);
  // create an UseEffect to activate the request
  // console.log("songs array is", songs);

  // create a function to add the songs to the display
  function addNewSong(song) {
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }

  useEffect(() => {
    makeGetRequest();
  }, []);

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
      <SongTable ParentSongEntires={songs} />
    </div>
  );
}

export default App;
