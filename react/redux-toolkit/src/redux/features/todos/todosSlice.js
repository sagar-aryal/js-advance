import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Lunch Date",
    completed: false,
  },
  {
    id: 2,
    title: "Doctor Appoinment",
    completed: true,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state, { type, payload }) => {
      return [...state, payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTodos } = todosSlice.actions;

export default todosSlice.reducer;
