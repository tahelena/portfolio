import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "../store/slice/songs.Slice";
import {
  moviesReducer,
  addMovie,
  removeMovie,
} from "../store/slice/moviesSlice";
import { reset } from "./actions";
import { formReducer, changeCost, changeName } from "./slice/formSlice";

import {
  listReducer,
  addListItem,
  removeListItem,
  changeSearchTerm,
} from "./slice/listSlice";

const store = configureStore({
  reducer: { songs: songsReducer, movies: moviesReducer,form: formReducer, list: listReducer  },
});


export {
  store, reset, addMovie, removeMovie, addSong, removeSong,
  addListItem,
  removeListItem,
  changeSearchTerm,
  changeCost,
  changeName,
};
