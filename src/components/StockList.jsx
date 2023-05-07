import React from "react";
import { useSelector } from "react-redux";

function StockList() {
  const { stock } = useSelector((state) => state.stock);
  return (
    <div className="bg-white shadow-md mt-5 rounded-md w-3/4">
      <h2 className="text-lg py-3 text-center">Stock List</h2>
      <div className="flex justify-around border-b-2">
        <div className="mx-2 pb-2 font-bold">Stock Name</div>
        <div className="mx-2 pb-2 font-bold">Quantity</div>
        <div className="mx-2 pb-2 font-bold">Buying price</div>
        <div className="mx-2 pb-2 font-bold">Selling Price</div>
      </div>

      {stock.map((item, index) => {
        return (
          <div className="" key={index}>
            <div className="flex justify-around">
              <div className="mx-2 border-b-2 pb-1">{item.name}</div>
              <div className="mx-2 border-b-2 pb-1">{item.quantity}</div>
              <div className="mx-2 border-b-2 pb-1">{item.buyingPrice}</div>
              <div className="mx-2 border-b-2 pb-1">{item.sellingPrice}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StockList;
