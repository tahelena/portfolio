import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "../store/slice/songs.Slice";
import {
  moviesReducer,
  addMovie,
  removeMovie,
} from "../store/slice/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: { songs: songsReducer, movies: moviesReducer },
});

export { store, reset, addMovie, removeMovie, addSong, removeSong };
