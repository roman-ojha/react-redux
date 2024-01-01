import { configureStore } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  name: "Roman",
  address: {
    street: "Baneshowor",
    city: "Kathmandu",
    state: "Provence 3",
  },
};

// whe we will update the state using redux pattern
const STREET_UPDATED: "STREET_UPDATED" = "STREET_UPDATED";
type ActionType = {
  type: typeof STREET_UPDATED;
  payload: typeof initialState.address.street;
};

const updateStreet = (street: string): ActionType => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};
const reducer = (
  state = initialState,
  action: ActionType
): typeof initialState => {
  switch (action.type) {
    case "STREET_UPDATED":
      // here we can see that to update the state it is not simple to do we have to provide all the value that we don't want to update using '...' spread operator
      // to help on updating process we can use of library immer
      // https://redux-toolkit.js.org/usage/immer-reducers
      // https://immerjs.github.io/immer/
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      // returning state using immer:
      // produce(<current_state>, (<draft_copy_of_state>)=>{ })
      return produce(state, (draft) => {
        // this allow us to update draft state
        draft.address.street = action.payload;
        // this is more simpler and immer perform the other required this for us automatically
      });

    default:
      return state;
  }
};

const store = configureStore({ reducer });

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

store.dispatch(updateStreet("Koteswor"));

unsubscribe();
