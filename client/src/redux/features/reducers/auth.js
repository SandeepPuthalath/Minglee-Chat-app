import { createSlice } from "@reduxjs/toolkit";
import { handleUserSignup, handleUserLogin } from "../services/auth"


const initialState = {
    loading: false,
    authTokens: localStorage.getItem("authTokens") ? JSON.parse("authTokens") : null,
    error: null
}

const authSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleUserSignup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(handleUserSignup.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem("authTokens", action.payload.authTokens);
                state.authTokens = action.payload.authTokens;
            })
            .addCase(handleUserSignup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(handleUserLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(handleUserLogin.fulfilled, (state, action) => {
                state.loading = false;
                localStorage.setItem("authTokens", action.payload.authTokens);
                state.authTokens = action.payload.authTokens;
            })
            .addCase(handleUserLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})


export default authSlice.reducer;
