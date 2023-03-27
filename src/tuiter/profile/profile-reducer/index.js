import {createSlice} from "@reduxjs/toolkit";
import profileInit from "./profile.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInit,
    reducers: {
        updateProfile(state, action) {
            state = action.payload;
        }
    }
});


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;

