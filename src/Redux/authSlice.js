import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { registerThunk, loginThunk, logoutThunk } from "./authThunk";

const initialState = {
  token: null,
  user: null,
  error: null,
  authenticated: false,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.token = null;
        state.user = null;
        state.isLoading = false;
        state.authenticated = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
      })
      .addMatcher(isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending), handlePending)
      .addMatcher(isAnyOf(registerThunk.rejected, loginThunk.rejected, logoutThunk.rejected), handleReject);
  },
});

export const authReducer = authSlice.reducer;
