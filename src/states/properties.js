import {
    createAction,
    createReducer,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  

const getAllProperties = createAsyncThunk("GET_ALL_PROPERTIES", (data)=>{
   return axios.get("/api/properties").then(res=>res.data)
})

const setProperties = createAction("SET_PROPETIES")

const initialState = []

const propertiesReducer = createReducer(initialState,{
    [setProperties]: (state,action)=>(state = action.payload),
    [getAllProperties.fulfilled]: (state,action)=>(state= action.payload)
})

export { propertiesReducer, getAllProperties,setProperties}