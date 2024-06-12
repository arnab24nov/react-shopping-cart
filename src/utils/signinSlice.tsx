import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  stat: boolean;
}
const initialState: InitialState = {
  stat: false,
};
const signinSlice = createSlice({
  name: "signinStat",
  initialState,
  reducers: {
    toggleStat: (state) => {
      state.stat = !state.stat;
    },
  },
});

export const { toggleStat } = signinSlice.actions;

export default signinSlice.reducer;
