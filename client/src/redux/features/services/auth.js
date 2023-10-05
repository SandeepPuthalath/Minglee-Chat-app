import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/instance";



export const handleUserSignup = createAsyncThunk("userSignup", async (paylod) =>{
    try {
        const response = await instance.post("auth/singup");
        return response.data;
    } catch (error) {
        return Promise.reject(error)
    }
})

export const handleUserLogin = createAsyncThunk("userLogin", async (paylod) => {
    try {
        const response = await instance.post("auth/login");
        return response.data;
    } catch (error) {
        return Promise.reject(error)
    }
})