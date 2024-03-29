import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoading = (state) => state.auth.isLoading;
export const selectCurrentUser = (state) => state.auth.user;
export const selectAuthenticated = (state) => state.auth.authenticated;
export const selectToken = (state) => state.auth.token;
