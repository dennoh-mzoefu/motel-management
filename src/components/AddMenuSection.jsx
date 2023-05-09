import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMenuFoodItem } from "../redux/menuSlice";
import { ToastContainer, toast } from "react-toastify";

function AddMenuSection() {
  const [name, setName] = useState("");
  const [sellingPrice, setSellingPrice] = useState(0);
  const { menu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const reset = () => {
    setName("");
    setSellingPrice(0);
  };
  const addMenu = (e) => {
    e.preventDefault();
    if (name && sellingPrice) {
      dispatch(
        addMenuFoodItem({
          name,
          sellingPrice,
        })
      );
      notifySuccess();
      reset();
    } else {
      notifyError();
    }

    const notifySuccess = () =>
      toast.success("Menu Item Added", {
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
  };
  return (
    <div className="bg-white shadow-lg p-2 mb-4">
      <h2 className="text-center text-stone-800 text-xl border-b-2 border-black py-2 mb-3">
        Add Menu Item
      </h2>
      <div className="flex">
        <div className="flex flex-col">
          <p className="ml-3">
            <small>Menu Name</small>
          </p>
          <input
            type="text"
            placeholder="add menu name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mx-4  border"
          />
        </div>
        <div className="flex flex-col">
          <p>
            <small>Price</small>
          </p>
          <input
            type="number"
            placeholder="select price"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="mx-1 border"
          />
        </div>
        <button
          className="border bg-green-400 px-2 rounded-md font-semibold text-stone-900"
          onClick={(e) => addMenu(e)}
        >
          Add To Menu
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddMenuSection;
