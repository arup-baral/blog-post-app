import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    logStatus: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.logStatus = true;
            state.userData = action.payload.userData;
        },
        logOut: (state) => {
            state.logStatus = false;
            state.userData = null;
        }
    }
});

export const {logIn, logOut} = authSlice.actions;

export const reducer = authSlice.reducer;