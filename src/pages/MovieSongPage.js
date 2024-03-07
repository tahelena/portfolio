import { useDispatch } from "react-redux";
import MoviePlaylist from "../components/playlist/MoviePlaylist";
import SongPlaylist from "../components/playlist/SongPlaylist";
import { reset } from "../store/index";

const MoviesSongPage = () => {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };
  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
};

export default MoviesSongPage;