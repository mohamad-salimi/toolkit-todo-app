import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todos = {
        id: Math.round(Math.random() * 100),
        title: action.payload.title,
        detail: action.payload.detail,
        completed: false,
      };
      state.todos.push(todos);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title, detail } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id == id);
      if (todoToEdit) {
        todoToEdit.title = title;
        todoToEdit.detail = detail;
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
