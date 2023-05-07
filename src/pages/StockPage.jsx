import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StockList from "../components/StockList";
import { addStockItem } from "../redux/stockSlice";
import { ToastContainer, toast } from "react-toastify";

function StockPage() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [buyingPrice, setBuyingPrice] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const dispatch = useDispatch();
  const reset = () => {
    setName("");
    setQuantity(0);
    setBuyingPrice(0);
    setSellingPrice(0);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (name && quantity && buyingPrice && sellingPrice) {
      dispatch(
        addStockItem({
          name,
          quantity,
          buyingPrice,
          sellingPrice,
        })
      );
      notifySuccess();
      reset();
    } else {
      notifyError();
    }
  };
  const notifySuccess = () =>
    toast.success("Stock Added", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = () =>
    toast.error("Misisng Input", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <div className=" mr-4 flex flex-col items-center justify-center">
      <div className="w-fit">
        <div className="w-fit">
          <h2 className="text-2xl text-center border-b-2 pb-2 mb-3">
            Add Stock Items Section
          </h2>
          <div className="flex justify-around">
            <div>Stock Name</div>
            <div>Quantity</div>
            <div>Buying price</div>
            <div>Selling Price</div>
            <div></div>
          </div>
          <div className="flex">
            <div className="mx-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mx-1">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mx-1">
              <input
                type="number"
                value={buyingPrice}
                onChange={(e) => setBuyingPrice(e.target.value)}
              />
            </div>
            <div className="mx-1">
              <input
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
              />
            </div>
            <div className="mx-1">
              <button
                className="px-3 rounded-sm bg-green-400"
                onClick={(e) => handleAdd(e)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div>
          <StockList />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default StockPage;
