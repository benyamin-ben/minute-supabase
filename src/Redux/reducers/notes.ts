import { createSlice } from "@reduxjs/toolkit";

import { Todo } from "../../Types/types";
const initialState: Todo[] = [];

const slice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    getNotes: (_, action) => {
      return action.payload;
    },
    addNote: (todos, action) => {
      console.log('action =>' , action)
      todos.push(action.payload);
    },
    removeNote: (todos, action) => {
      let newTodo = todos.filter((item) => item.id !== action.payload);
      return newTodo;
    },

    editNote: (todos, action) => {
      let editedTodo = todos.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            description: action.payload.description,
            color : action.payload.color
          };
        }
        return item;
      });
      return editedTodo;
    },
  },
});

export const {
    getNotes,
    addNote,
    removeNote,
    editNote,
} = slice.actions;

export default slice.reducer;
