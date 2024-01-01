import { configureStore, Dispatch } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import axios, { AxiosError } from "axios";

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
const initialState: InitialStateType = {
  loading: false,
  users: [],
  error: "",
};

// Action type
const FETCH_USERS_REQUESTED: "FETCH_USERS_REQUESTED" = "FETCH_USERS_REQUESTED";
const FETCH_USER_SUCCEEDED: "FETCH_USER_SUCCEEDED" = "FETCH_USER_SUCCEEDED";
const FETCH_USERS_FAILED: "FETCH_USERS_FAILED" = "FETCH_USERS_FAILED";

type FetchUserRequestedType = {
  type: typeof FETCH_USERS_REQUESTED;
};

type FetchUserSucceededType = {
  type: typeof FETCH_USER_SUCCEEDED;
  payload: InitialStateType["users"];
};

type FetchUserFailedType = {
  type: typeof FETCH_USERS_FAILED;
  payload: InitialStateType["error"];
};

type ActionType =
  | FetchUserRequestedType
  | FetchUserSucceededType
  | FetchUserFailedType;

// Action creator

const fetchUsersRequest = (): FetchUserRequestedType => {
  return {
    type: "FETCH_USERS_REQUESTED",
  };
};

const fetchUserSuccess = (
  users: InitialStateType["users"]
): FetchUserSucceededType => {
  return {
    type: "FETCH_USER_SUCCEEDED",
    payload: users,
  };
};

const fetchUsersFailure = (
  error: InitialStateType["error"]
): FetchUserFailedType => {
  return {
    type: "FETCH_USERS_FAILED",
    payload: error,
  };
};

// Reducer
const reducer = (
  state = initialState,
  action: ActionType
): typeof initialState => {
  switch (action.type) {
    case "FETCH_USERS_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USER_SUCCEEDED":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAILED":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const apiService = {
  fetchUsers: () => {},
};

// Understand InDepth: https://redux.js.org/usage/writing-logic-thunks
// create a async action creator
const fetchUsers = () => {
  // action creator returns an action
  // but what thunk middleware brings is the ability for action creator to return a function instead of an action object

  return async (dispatch: Dispatch, getState: () => InitialStateType) => {
    // the spacial thing about this function is that it doesn't have to be pure and allow to do async task like api calls.
    // this function get an dispatch and 'getState' function
    // this function can also dispatch actions because it receives dispatch method as arguments

    // before firing api call first we will dispatch fetch users request
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );

      const users = response.data.map((user) => user.id);
      // after user success we will store the list of user into redux store
      dispatch(fetchUserSuccess(users));
    } catch (err) {
      // error.message is the error message
      dispatch(fetchUsersFailure((err as AxiosError).message));
    }
  };
};

// Create redux store
// apply redux thunk to you redux store
// https://redux.js.org/usage/writing-logic-thunks#redux-thunk-middleware
// The Redux Toolkit configureStore API automatically adds the thunk middleware during store creation, so it should typically be available with no extra configuration needed.
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

console.log("Initial State: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

// Note we should not unsubscribe because unsubscribe will happen before fetching the data asynchronously from api and we will not be able to listen
