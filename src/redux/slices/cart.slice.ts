import { CartItem, Product } from "@/types/CartItem.type";
import { createSlice } from "@reduxjs/toolkit";

type CartStore = {
  items: CartItem[];
};

const initialState: CartStore = { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: { type: string; payload: Product }) {
      const newCartItem: CartItem = {
        id: "",
        count: 1,
        product: action.payload,
      };
      state.items.push(newCartItem);
    },
    removeItem() {},
    clearItems(state) {
      state.items = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addItem, removeItem, clearItems } = cartSlice.actions;
