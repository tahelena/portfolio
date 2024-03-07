export const INCREMENT_COUNT = "increment-count";
export const DECREMENT_COUNT = "decrement-count";
export const SET_VALUE_TO_ADD = "set-value-to-add";
export const ADD_VALUE_TO_COUNT = "add-value-to-count";

// ------- using immer library
const reducer_count = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return state;
  }
};
// ------- Not using immer library
// const reducer_count = (state, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNT:
//       return { ...state, count: state.count + 1 };
//     case DECREMENT_COUNT:
//       return { ...state, count: state.count - 1 };
//     case SET_VALUE_TO_ADD:
//       return { ...state, valueToAdd: action.payload };
//     case ADD_VALUE_TO_COUNT:
//       return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
//     default:
//       return state;
//   }
// };

export default reducer_count;
