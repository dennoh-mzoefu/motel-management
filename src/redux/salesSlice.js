import { createSlice, current } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { salesColRef } from "./../utils/firebase";
const initialState = {
  sales: [],
};

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    fetchSales: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        sales: action.payload,
      };
    },
    addSale: (state, action) => {
      console.log(action.payload);
      addDoc(salesColRef, {
        quantity: action.payload.quantity,
        name: action.payload.name,
        price: action.payload.price,
        receiptId: action.payload.receiptId,
        orderTime: action.payload.time,
        paymentMethod: action.payload.paymentMethod,
        employee: action.payload.employee,
        time: new Date(),
      }).then((res) => {
        console.log(res);
      });
      console.log("execute");
    },
  },
});

export const { addSale, fetchSales } = salesSlice.actions;
export default salesSlice.reducer;
