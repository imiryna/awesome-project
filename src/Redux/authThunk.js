import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, userRegister, userLogout } from "../services/uathApi";

export const loginThunk = createAsyncThunk("auth/login", async (formData, thunkAPI) => {
  try {
    const response = await userLogin(formData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const registerThunk = createAsyncThunk("auth/registr", async (formData, thunkAPI) => {
  try {
    const response = await userRegister(formData);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk("auth/logout", async (formData, thunkAPI) => {
  try {
    const authData = await userLogout(formData);
    return authData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
});
