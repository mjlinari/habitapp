import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const registerRequest = createAsyncThunk("REGISTER", (data) => {
  axios.post("/api/auth/register", { data });
});

const loginRequest = createAsyncThunk("LOGIN", (data) => {
  axios.post("/api/auth/login", { data });
});

const logoutRequest = createAsyncThunk("LOGOUT", () => {
  axios.post("/api/auth/logout");
});

const persistence = createAsyncThunk("PERSISTENCE", (data)=>{
  axios.get("/api/auth/me")
})

const setUser = createAction("SET_USER");

const initialState = {}

const userReducer = createReducer(
  initialState,
  {
    [setUser]: (state, action) => (state = action.payload),
    [loginRequest.fulfilled]: (state, action) => (state = action.payload),
    [logoutRequest.fulfilled]: (state, action) => (state = {}),
    [persistence.fulfilled]: (state, action) => (state = action.payload)
  }
);

export { userReducer, registerRequest, loginRequest, logoutRequest, persistence, setUser };
