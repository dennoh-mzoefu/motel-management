import React from "react";
import AddMenuSection from "../components/AddMenuSection";
import Menu from "../components/Menu";
// import OrderSection from "../components/OrderSection";

function MenuPage() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <AddMenuSection />
      <Menu />
    </div>
  );
}

export default MenuPage;
