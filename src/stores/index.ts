import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAction, userReducer } from "./slices/user.slice";
import * as jose from "jose";

const RootReducer = combineReducers({
  userStore: userReducer,

});
export type StoreType = ReturnType<typeof RootReducer>;
export const store = configureStore({
  reducer: RootReducer,
});
export const stores = configureStore({
  reducer: {
    categoryStore: userReducer,
  },
});
// store.dispatch(userAction.jobAll());

// store.dispatch(userAction.productApi());






/// tao token
async function verifyToken(token: string, key: string) {
  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(key)
    );
    return payload;
  } catch (error) {
    return null;
  }
}

const token = localStorage.getItem("token");

const fetchPrizeToken = async () => {
  try {
    const payload = await verifyToken(token!, "lvthien");
    store.dispatch(userAction.setData(payload as User));
  } catch (error) {
    localStorage.removeItem("token");
  }
};

fetchPrizeToken();
