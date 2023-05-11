import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import MenuPage from "./pages/MenuPage";
import { Route, Routes } from "react-router-dom";
import StockPage from "./pages/StockPage";
import Sales from "./pages/Sales";
import EmployeeAnalysis from "./pages/EmployeeAnalysis";
import PurchasesPage from "./pages/PurchasesPage";
// import { auth } from "../utils/firebase";

function PostApp() {
  // const [user, loading] = useAuthState(auth);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  // const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div>
      {" "}
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        screenSize={screenSize}
        setScreenSize={setScreenSize}
        className=""
      />
      <div className="ml-52 bg-slate-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/stockManager" element={<StockPage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/employeeanalysis" element={<EmployeeAnalysis />} />
          <Route path="/purchasespage" element={<PurchasesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default PostApp;
