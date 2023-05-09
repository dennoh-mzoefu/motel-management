import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderSection from "./OrderSection";
import { SiCodechef } from "react-icons/si";
import ConfirmationSector from "./ConfirmationSector";
import { addCurrentOrder } from "../redux/orderSlice";
import { v4 } from "uuid";

function Menu() {
  const { menu } = useSelector((state) => state.menu);
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState([]);
  const [preOrder, setPreOrder] = useState(null);
  const dispatch = useDispatch();
  const confirmOrder = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(
        addCurrentOrder({
          ...menu?.filter((item) => item.name == searchTerm)[0],
          quantity: 1,
          isConfirmed: false,
          isCancelled: false,
          orderId: v4(),
        })
      );
      // setPreOrder(menu?.filter((item) => item.name == searchTerm)[0]);
    }
  };
  useEffect(() => {
    // console.log({ preOrder });
    // preOrder && setOrders((prevState) => [...prevState, preOrder]);
  }, [preOrder]);
  return (
    <div className="flex ">
      <div className="shadow-lg m-2 bg-stone-100 w-fit rounded-lg mx-4 py-3">
        <div className="flex justify-center items-center">
          <SiCodechef className="rounded-full  bg-white" />
          <h2 className="text-2xl">Order Section</h2>
        </div>
        <div className="p-1 border-b-4 border-white px-4">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search for item"
            className="border p-2 rounded-md mr-1"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-green-300 p-2 rounded-md"
            onClick={(e) => confirmOrder(e)}
          >
            Confirm
          </button>
        </div>

        <div className=" flex flex-col items-center justify-center mt-3">
          Menu Table
          <div className="shadow-lg m-2 bg-white w-fit rounded-lg px-4 py-3">
            <div className="flex">
              <div className="w-40">Name</div>
              <div>Price</div>
            </div>
            {menu &&
              menu?.map((item, index) => {
                return (
                  <div className="flex border-b" key={index}>
                    <div className="w-40">{item.name}</div>
                    <div className="px-2">{item.sellingPrice} </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <ConfirmationSector />
      <OrderSection orders={orders} />
    </div>
  );
}

export default Menu;
