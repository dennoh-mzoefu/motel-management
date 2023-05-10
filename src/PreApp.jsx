import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { fetchMenu } from "./redux/menuSlice";
import { fetchOrders } from "./redux/orderSlice";
import { fetchSales } from "./redux/salesSlice";
// import { stockBeverageColRef } from "./utils/firebase";
import { fetchStock } from "./redux/stockSlice";
import {
  menuFoodColRef,
  stockBeverageColRef,
  ordersColRef,
  salesColRef,
} from "./utils/firebase";
function PreApp() {
  const dispatch = useDispatch();
  const [stock, setStock] = useState([]);
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);
  const [sales, setSales] = useState([]);
  useEffect(() => {
    const unSubscribe = onSnapshot(stockBeverageColRef, (snapshot) => {
      setStock(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    const unSubscribe = onSnapshot(menuFoodColRef, (snapshot) => {
      setMenu(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    const unSubscribe = onSnapshot(ordersColRef, (snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    const unSubscribe = onSnapshot(salesColRef, (snapshot) => {
      setSales(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    console.log({ stock });
    dispatch(fetchStock(stock));
  }, [stock]);
  useEffect(() => {
    console.log({ menu });
    dispatch(fetchMenu(menu));
  }, [menu]);
  useEffect(() => {
    console.log({ orders });
    dispatch(fetchOrders(orders));
  }, [orders]);
  useEffect(() => {
    console.log({ sales });
    dispatch(fetchSales(sales));
  }, [sales]);
  return <div>PreApp</div>;
}

export default PreApp;
