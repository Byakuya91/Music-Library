import React, { useState } from 'react';

const AddSong = (props) => {

    //  defining the state variables 
    const [title, setTitle] = useState("");
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    return ( 
        //  Defining the form 
      <form>
          <label for = "song-title">title</label>
          <input type = "text" name = "song-title"></input>
          <label for = "song-album">album</label>
          <input type = "text"></input>
          <label for = "song-artist">artist</label>
          <input type = "text"></input>
          <label for = "song-label">genre</label>
          <input type = "text"></input>
          <label for = "song-releaseDate">releaseDate</label>
          <input type = "text"></input>
          <button>Add new song</button>

      </form>

     );
}
 
export default AddSong;