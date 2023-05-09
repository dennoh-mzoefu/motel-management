import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc, updateDoc } from "firebase/firestore";
import { stockBeverageColRef } from "../utils/firebase";

const initialState = {
  stock: [],
};

export const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStock: (state, action) => {
      return {
        ...state,
        stock: action.payload,
      };
    },
    addStockBevItem: (state, action) => {
      console.log(action.payload);
      addDoc(stockBeverageColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        buyingPrice: action.payload.buyingPrice,
        sellingPrice: action.payload.sellingPrice,
        time: new Date(),
      }).then((res) => {
        console.log(res);
      });
    },
    addStockFoodItem: (state, action) => {
      console.log(action.payload);
      addDoc(stockFoodColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        buyingPrice: action.payload.buyingPrice,
        time: new Date(),
      }).then((res) => {
        console.log(res);
      });
    },
    addQuantity: (state, action) => {
      const addRef = doc(db, "stock", action.payload.id);
      updateDoc(addRef, {
        quantity: action.payload.quantity,
      }).then(() => {});
    },
  },
});

export const { fetchStock, addStockBevItem, addQuantity, addStockFoodItem } =
  stockSlice.actions;
export default stockSlice.reducer;
