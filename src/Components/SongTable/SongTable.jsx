const SongTable = (props) => {
    return ( 
      // create our display table
      <table>
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
              {props.ParentSongEntires.map((song)=>{
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