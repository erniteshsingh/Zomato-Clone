// src/Features/Auth/authAction.js
import axios from "axios";
import { setUser } from "./AuthSlice";

// Always send cookies to backend
axios.defaults.withCredentials = true;

// ----------------------------
// REGISTER USER
// ----------------------------
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/register",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(setUser(res.data.user));

    return {
      success: true,
      user: res.data.user,
      message: res.data.message,
    };
  } catch (err) {
    console.log("Register Error:", err.response?.data || err.message);

    return {
      success: false,
      message:
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Something went wrong",
    };
  }
};

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      loginData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(setUser(res.data.user));

    return {
      success: true,
      user: res.data.user,
      message: res.data.message,
    };
  } catch (err) {
    console.log("Login Error:", err.response?.data || err.message);

    return {
      success: false,
      message:
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Invalid credentials",
    };
  }
};

export default registerUser;
