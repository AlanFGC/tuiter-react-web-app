// here we have a new slice. slices are the controllers of where the data comes for reducer and extra reducers
// from

import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});

export default whoSlice.reducer;