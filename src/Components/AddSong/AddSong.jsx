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

//   create a handle submit function that will add the song to the SongTable.
     function handleSubmit(formEvent){
        //    prevents the page from being reloaded. 
          formEvent.preventDefault();

        //   TODO: figure out how to grab form data 
         let newSongEntry = {
             title: title,
             album: album,
             artist: artist,
             genre: genre,
             releaseDate: releaseDate
         };
        // TODO: Some way to set it equal to our SongTable. 
          props.AddSong(newSongEntry);
          alert("Your song has been added!");
     }


    return ( 
        //  Defining the form 
      <form onSubmit={handleSubmit}>
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
          <button type='submit'>Add new song</button>

      </form>

     );
}
 
export default AddSong;