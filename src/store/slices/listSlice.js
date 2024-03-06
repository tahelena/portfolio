import { createSlice, nanoid } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: { searchTerm: "", data: [] },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addListItem(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeListItem(state, action) {
      const updated = state.data.filter((item) => item.id !== action.payload);
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addListItem, removeListItem } =
  listSlice.actions;

export const listReducer = listSlice.reducer;
