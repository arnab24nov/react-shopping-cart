import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import signinSlice from "./signinSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    signInStat: signinSlice,
  },
});

export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof appStore.getState>
> = useSelector;
