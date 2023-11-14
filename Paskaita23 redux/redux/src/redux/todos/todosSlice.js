import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodoAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("rejected");
      });
    builder
      .addCase(deleteTodoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodoAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("REJECTED");
      });
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(getTodosAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("Rejected");
      });
    builder
      .addCase(updateTodosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.todos[index].completed = action.payload.completed;
        console.log(action.payload);
      })
      .addCase(updateTodosAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTodosAsync.rejected, (state) => {
        state.isLoading = false;
        console.log("rejectooo");
      });
  },
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (data) => {
    const { data: responseData } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title: data.title,
        completed: false,
      }
    );
    return responseData;
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
  }
);

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return data;
  }
);

export const updateTodosAsync = createAsyncThunk(
  "todos/updateTodosAsync",
  async (data) => {
    const { data: responseData } = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${data.id}`,
      {
        completed: data.completed,
      }
    );
    return responseData;
  }
);

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
