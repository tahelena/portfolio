import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/formSlice";

import {
  listReducer,
  addListItem,
  removeListItem,
  changeSearchTerm,
} from "./slices/listSlice";

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
