import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SinglePreOrder from "./SinglePreOrder";

function ConfirmationSector() {
  const { currentOrders } = useSelector((state) => state.order);
  return (
    <div className="flex flex-col items-center justify-center bg-stone-300 h-fit shadow-md mr-3 rounded-sm">
      <p className="mt-2 text-xl">Confirmation Section</p>
      <div className="flex py-2 pl-3 pr-2 items-center justify-between  w-full border-b-2 pb-2 mb-2">
        <div className="">
          <small>
            <b>Name</b>
          </small>
        </div>
        <div className="flex ">
          <small>
            <b>Quantity</b>
          </small>
        </div>
        <div className="ml-2">
          <small>
            <b>Price</b>
          </small>
        </div>
        <div>
          <small>
            <b>Confirm</b>
          </small>
        </div>
        <div>
          <small>
            <b>Delete</b>
          </small>
        </div>
      </div>
      {currentOrders?.map((item, index) => {
        return <SinglePreOrder item={item} index={index} />;
      })}
    </div>
  );
}

export default ConfirmationSector;
