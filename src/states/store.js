import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { propertiesReducer } from "./properties";
import logger from "redux-logger";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    properties: propertiesReducer,
  },
});

export default store;
