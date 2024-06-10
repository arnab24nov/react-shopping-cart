import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  title: string;
  image: string;
  price: number;
  count: number;
}

interface InitialState {
  items: CartItem[];
}

const initialState: InitialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        if (existingItem?.count > 1) {
          existingItem.count -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.title !== action.payload.title
          );
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
