import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../../data/playlistsRandomizers";
import { addSong, removeSong } from "../../store/index";
import Button from "../reusable/Button";

function SongPlaylist() {
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => state.songs);

  const handleSongAdd = (song) => dispatch(addSong(song));
  const handleSongRemove = (song) => dispatch(removeSong(song));

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <Button onClick={() => handleSongRemove(song)} danger>
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <Button onClick={() => handleSongAdd(createRandomSong())} primary>
            + Add Song to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
