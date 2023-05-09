import React, { useEffect, useState } from "react";
import { MdDoneOutline, MdOutlineDoneOutline } from "react-icons/md";
import { RxValueNone } from "react-icons/rx";

function OrderItem({ item, index }) {
  return (
    <div className="flex py-1 justify-around" key={index}>
      <div className="mx-3">{item.name}</div>
      {console.log(item)}
      <div className="flex">
        <div className="flex flex-col">
          <input
            type="number"
            className="w-12 border-2 rounded-sm bg-transparent border-yellow-600 mx-4 "
            min={1}
            value={item.quantity}
            onChange={(e) => {}}
          />
        </div>
      </div>
      <div>{item.price}</div>
    </div>
  );
}

export default OrderItem;
