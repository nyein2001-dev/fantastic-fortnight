import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  tokenExpire: undefined,
  user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoginIn: (state, action) => {
            state.acccessToken = action.payload.acccessToken;
            state.tokenExpire = action.payload.expiresin;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.acccessToken = "";
            state.tokenExpire = "";
            state.user = undefined;
        },
    },
});

export default authSlice.reducer;
export const {userLoggedIn, userLoggedOut} = authSlice.actions;