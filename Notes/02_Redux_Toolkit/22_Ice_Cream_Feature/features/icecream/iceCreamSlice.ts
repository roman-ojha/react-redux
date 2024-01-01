import { createSlice } from "@reduxjs/toolkit";

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    numOfIceCreams: 20,
  },
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

export default iceCreamSlice.reducer;
export const iceCreamAction = iceCreamSlice.actions;
