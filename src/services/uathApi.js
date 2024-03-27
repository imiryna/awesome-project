import { baseURLInstance } from "./baseUrl";

export const setToken = (token) => {
  baseURLInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const userRegister = async (formData) => {
  const { data } = await baseURLInstance.post("/users/signup", formData);
  setToken(data.token);
  return data;
};

export const userLogin = async (formData) => {
  const { data } = await baseURLInstance.post("/user/login", formData);
  setToken(data.token);
  return data;
};

export const userLogout = async (token) => {
  const { data } = await baseURLInstance.post("/users/logout");
  return data;
};
