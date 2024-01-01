import { configureStore } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  loading: false,
  users: [],
  error: [],
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
  payload: [];
};

type FetchUserFailedType = {
  type: typeof FETCH_USERS_FAILED;
  payload: [];
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

const fetchUserSuccess = (users: []): FetchUserSucceededType => {
  return {
    type: "FETCH_USER_SUCCEEDED",
    payload: users,
  };
};

const fetchUsersFailure = (error: []): FetchUserFailedType => {
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
        error: [],
      };
    case "FETCH_USERS_FAILED":
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

// Create redux store
const store = configureStore({ reducer });
// Completed the setup to for action action now we will implement rest on next Notes
