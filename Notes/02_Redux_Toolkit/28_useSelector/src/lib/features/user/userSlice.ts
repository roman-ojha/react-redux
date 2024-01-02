import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type InitialStateType = {
  loading: boolean;
  users: number[];
  error: string;
};

// redux toolkit provide a 'createAsyncThunk' function for the creation and dispatching of action actions
// https://redux-toolkit.js.org/api/createAsyncThunk
// createAsyncThunk(<action_name>)
const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  // NOTE: that we don't have to handle the error where async thunk will automatically handle for us
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data.map((user) => user.id);
  // it automatically dispatch lifecycle actions based on the returned promise
});
// Async thunk could return Pending, fulfilled or rejected
// The reducers will not generate by the slice and have to be added as extra reducers

const userSlice = createSlice({
  name: "user",
  initialState: <InitialStateType>{
    loading: false,
    users: [],
    error: "",
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // Add cases for each of the promise lifecycle methods
    builder
      .addCase(fetchUsers.pending, (state) => {
        // on pending action
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // on success action
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        // on failed/error action
        state.loading = false;
        state.users = [];
        state.error = action.error.message as string;
      });
  },
});

export const userReducers = userSlice.reducer;
export const userAction = {
  ...userSlice.actions,
  fetchUsers,
};
