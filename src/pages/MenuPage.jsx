import React from "react";
import Menu from "../components/Menu";
import OrderSection from "../components/OrderSection";

function MenuPage() {
  return (
    <div className="flex items-center justify-center">
      <Menu />
      <OrderSection />
    </div>
  );
}

export default MenuPage;
