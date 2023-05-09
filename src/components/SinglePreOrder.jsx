import React, { useEffect, useState } from "react";
import { MdDoneOutline, MdOutlineDoneOutline } from "react-icons/md";
import { RxValueNone } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addOrder } from "../redux/orderSlice";

function SinglePreOrder({ item, index }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.sellingPrice);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  let b = price;
  useEffect(() => {
    setPrice(quantity * item.sellingPrice);
  }, [quantity]);

  const handleConfirm = () => {
    dispatch(
      addOrder({
        name: item.name,
        price,
        isConfirmed: true,
        quantity,
        isCancelled: false,
        orderId: item.orderId,
      })
    );
  };
  return (
    <div className="flex  py-1 px-2" key={index}>
      <div className="mx-3">{item.name}</div>
      {console.log(item)}
      <div className="flex">
        <div className="flex flex-col">
          <input
            type="number"
            className="w-12 border-2 rounded-sm bg-transparent border-yellow-600 mx-4 "
            min={1}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
      </div>
      <div>{price}</div>
      <div className="ml-4">
        <button
          className="p-2 rounded-full bg-yellow-500"
          onClick={() => handleConfirm()}
        >
          <MdOutlineDoneOutline />
        </button>
      </div>
      <div className="ml-4">
        <button className="p-2 rounded-full bg-white">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default SinglePreOrder;
