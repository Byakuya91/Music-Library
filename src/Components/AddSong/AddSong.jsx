import React, { useState } from 'react';

const AddSong = (props) => {

    //  defining the state variables 
    const [title, setTitle] = useState("");
    // console.log(title);
    const [album, setAlbum] = useState("");
    // console.log(album);
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    return ( 
        //  Defining the form 
      <form>
          <label >title</label>
          <input type = "text"  value={title} onChange={(event) => setTitle(event.target.value)}></input>
          <label >album</label>
          <input type = "text" value = {album} onChange={(event) => setAlbum(event.target.value)}></input>
          <label>artist</label>
          <input type = "text"  value = {artist} onChange={(event) => setArtist(event.target.value)} ></input>
          <label>genre</label>
          <input type = "text"   value = {genre} onChange={(event) => setGenre(event.target.value)} ></input>
          <label>releaseDate</label>
          <input type = "text"  value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)} ></input>
          <button>Add new song</button>

      </form>

     );
}
 
export default AddSong;