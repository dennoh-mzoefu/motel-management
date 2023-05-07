import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
// import { stockColRef } from "./utils/firebase";
import { fetchStock } from "./redux/stockSlice";
import { stockColRef } from "./utils/firebase";
function PreApp() {
  const dispatch = useDispatch();
  const [stock, setStock] = useState([]);
  useEffect(() => {
    const unSubscribe = onSnapshot(stockColRef, (snapshot) => {
      setStock(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unSubscribe();
  }, []);

  useEffect(() => {
    console.log({ stock });
    dispatch(fetchStock(stock));
  }, [stock]);
  return <div>PreApp</div>;
}

export default PreApp;
