import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { doneOrder, paidOrder, unDoneOrder } from "./../redux/orderSlice";
import { addSale } from "./../redux/salesSlice";
import { AiOutlineUndo } from "react-icons/ai";
import { MdCloseFullscreen } from "react-icons/md";

import ReceiptGenerated from "./ReceiptGenerated";

function OrderSection() {
  const { orders } = useSelector((state) => state.order);
  const [newOrders, setnewOrders] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [employee, setEmployee] = useState("");
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    let arr = newOrders?.filter((item) => item.isConfirmed == true);
    let arrNum = arr?.map((item, index) => item.price);
    let arrPrice = arrNum.reduce((a, b) => a + b, 0);
    setTotal(arrPrice);
  }, [newOrders]);

  console.log({ newOrders });
  console.log({ total });
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  console.log({ amount });
  useEffect(() => {
    setnewOrders(
      orders?.filter((item) => item.isConfirmed == true && item.isPaid == false)
    );
  }, [orders]);
  useEffect(() => {
    setBalance(amount - total);
  }, [amount, total]);

  const undoOrder = (id) => {
    dispatch(unDoneOrder(id));
  };

  const receiptId = v4();
  const generateReceipt = (e) => {
    newOrders.forEach((item, index) => {
      dispatch(
        addSale({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          time: item.time,
          receiptId,
          paymentMethod,
          employee,
        })
      );
      dispatch(doneOrder(item.id));
      dispatch(paidOrder(item.id));
    });
    // dispatch(addReceipt({id,amount,balance}))
  };
  return (
    <div className="border bg-blue-100 px-5 py-4">
      <div className="flex flex-col items-center justify-center bg-slate-100 shadow-md rounded-sm">
        <div className="flex py-2  items-center justify-around  w-full border-b-2 pb-2 mb-2">
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
          <div className="">
            <small>
              <b>Price</b>
            </small>
          </div>
        </div>
        {newOrders &&
          newOrders?.map((item, index) => {
            return <OrderItem index={index} item={item} />;
          })}
      </div>
      {/* served by */}

      <div className="flex justify-between border-b-2 border-white py-2 ">
        <div>Total</div>
        <div> {total}</div>
      </div>
      <div className="flex justify-between border-b-2 border-white py-2 ">
        <div>Amount</div>
        <div>
          {" "}
          <input
            type="number"
            value={amount}
            className="w-12"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between border-b-2 border-white py-2 ">
        <div>balance</div>
        <div> {balance}</div>
      </div>
      <div className="flex border-b-2 justify-between border-white py-2 ">
        <p>Paid Through </p>
        <select
          className="px-3  ml-3 border-2 border-black"
          onChange={(e) => setPaymentMethod(e?.target?.value)}
        >
          <option value="cash">Cash</option>
          <option value="mpesa">Mpesa</option>
          <option value="credit">Credit</option>
        </select>
      </div>
      <div className="flex border-b-2 justify-between border-white py-2 ">
        <p>Served by </p>
        <select
          className="px-3 border-2 border-black"
          onChange={(e) => setEmployee(e?.target?.value)}
        >
          <option>Choose</option>
          <option value="deno">Deno</option>
          <option value="paula">Paula</option>
        </select>
      </div>
      <div className="flex justify-between w-full">
        {/* <button className="border py-1 px-2 bg-yellow-500 mt-2 mr-1 shadow-lg rounded-sm font-medium">
          Confirm Order
        </button> */}
        <div>
          <>
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                      {/*header*/}
                      <ReceiptGenerated
                        newOrders={newOrders}
                        total={total}
                        amount={amount}
                        balance={balance}
                        receiptId={receiptId}
                        paymentMethod={paymentMethod}
                        employee={employee}
                      />
                      <div className="flex items-start justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                        <MdCloseFullscreen
                          className="bg-green-400 rounded-full p-1 text-2xl shadow-lg mb-2 ml-2"
                          onClick={() => setShowModal(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-300 mt-2 p-2"
          >
            Generate Receipt
          </button>
        </div>
        {/* <button className="border py-1 px-2 bg-blue-300 mt-2 ml-1 shadow-lg rounded-sm font-medium">
          Print Receipt
        </button> */}
      </div>
    </div>
  );
}

export default OrderSection;
