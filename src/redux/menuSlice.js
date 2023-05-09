import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc, updateDoc } from "firebase/firestore";
import { menuFoodColRef, stockBeverageColRef } from "../utils/firebase";

const initialState = {
  menu: [],
};

export const stockSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    fetchMenu: (state, action) => {
      return {
        ...state,
        menu: action.payload,
      };
    },
    addMenuFoodItem: (state, action) => {
      console.log(action.payload);
      addDoc(menuFoodColRef, {
        name: action.payload.name,
        sellingPrice: action.payload.sellingPrice,
        time: new Date(),
      }).then((res) => {
        console.log(res);
      });
    },
    adjustPrice: (state, action) => {
      const addRef = doc(db, "menuFood", action.payload.id);
      updateDoc(addRef, {
        sellingPrice: action.payload,
      }).then(() => {});
    },
  },
});

export const { fetchMenu, addMenuFoodItem, adjustPrice } = stockSlice.actions;
export default stockSlice.reducer;
