import { combineReducers } from "@reduxjs/toolkit";
import { api } from "../api/index";

const reducers = {
  [api.reducerPath]: api.reducer,
};

export const reducer = combineReducers(reducers);
