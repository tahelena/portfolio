import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../../data/playlistsRandomizers";
import { addMovie, removeMovie } from "../../store/index";
import Button from "../reusable/Button";

function MoviePlaylist() {
  const dispatch = useDispatch();
  const moviePlaylist = useSelector((state) => state.movies);

  const handleMovieAdd = (movie) => dispatch(addMovie(movie));
  const handleMovieRemove = (movie) => dispatch(removeMovie(movie));

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <Button onClick={() => handleMovieRemove(movie)} danger>
          X
        </Button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <Button onClick={() => handleMovieAdd(createRandomMovie())} primary>
            + Add Movie to Playlist
          </Button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
