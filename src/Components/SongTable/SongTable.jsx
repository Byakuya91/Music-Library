const SongTable = ({parentSongEntires, searchTerm}) => {
    return ( 
      // create our display table
      <table className="table">
          <thead>
            <tr>
               <th>title</th> 
               <th>album</th> 
               <th>artist</th> 
               <th>genre</th> 
               <th>releaseDate</th> 
            </tr>
          </thead>
          <tbody>
              {parentSongEntires.filter(
                (song) =>
                song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                song.releaseDate.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((song)=>{
                  return(
                   <tr>
                       {/* {console.log(song)} */}
                     <td>{song.title}</td>  
                     <td>{song.album}</td>  
                     <td>{song.artist}</td>  
                     <td>{song.genre}</td>  
                     <td>{song.releaseDate}</td>  
                   </tr>

                  );
              })}
          </tbody>
      </table>



     );
}
 
export default SongTable;