import { configureStore } from "@reduxjs/toolkit";
import BlockChainReducer from "./slices/BlockChainReducer";

export const store = configureStore({
  reducer: { BlockChainReducer },
  //   middleware: "if any"
});
