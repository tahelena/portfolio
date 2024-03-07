import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slice/formSlice";

import {
  listReducer,
  addListItem,
  removeListItem,
  changeSearchTerm,
} from "./slice/listSlice";

const store = configureStore({
  reducer: { form: formReducer, list: listReducer },
});

export {
  store,
  addListItem,
  removeListItem,
  changeSearchTerm,
  changeCost,
  changeName,
};
