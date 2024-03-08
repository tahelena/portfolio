import { useDispatch } from "react-redux";
import MoviePlaylist from "../components/playlist/MoviePlaylist";
import SongPlaylist from "../components/playlist/SongPlaylist";
import { reset } from "../store/index";
import Button from "../components/reusable/Button";

const MoviesSongPage = () => {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(reset());
  };
  return (
    <div className="container is-fluid">
      <Button danger onClick={() => handleResetClick()}>
        Reset Both Playlists
      </Button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
};

export default MoviesSongPage;
