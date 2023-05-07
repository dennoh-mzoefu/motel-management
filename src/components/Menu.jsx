import React from "react";

function Menu() {
  return (
    <div className="shadow-lg m-2 bg-stone-100 w-fit rounded-lg  py-3">
      <div className="p-1 border-b-4 border-white px-4">
        <input
          type="text"
          value=""
          placeholder="Search for item"
          className="border p-2 rounded-md mr-1"
        />
        <button className="bg-green-300 p-2 rounded-md">Confirm</button>
      </div>

      <div className=" flex flex-col items-center justify-center mt-3">
        Menu Table
        <div className="shadow-lg m-2 bg-white w-fit rounded-lg px-4 py-3">
          <div className="flex">
            <div className="w-40">Name</div>
            <div>Price</div>
          </div>
          <div className="flex border-b">
            <div className="w-40">Githeri</div>
            <div className="px-2">20 </div>
          </div>
          <div className="flex border-b">
            <div className="w-40">Githeri</div>
            <div className="px-2">20 </div>
          </div>
          <div className="flex border-b">
            <div className="w-40">Githeri</div>
            <div className="px-2">20 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
