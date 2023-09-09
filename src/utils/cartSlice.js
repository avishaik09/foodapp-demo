import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state) => {
        state.items.pop();
    },
  },
 
});

export const {addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;