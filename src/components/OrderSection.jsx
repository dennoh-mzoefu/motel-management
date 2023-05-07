import React from "react";

function OrderSection() {
  return (
    <div className="border bg-blue-100 px-5 py-4">
      <div className="flex flex-col items-center justify-center bg-slate-100 shadow-md rounded-sm">
        order items
        <div className="flex">
          <div>Rice</div>
          <div className="flex">
            <input type="number" className="w-16 border-b-2 rounded-md " />
          </div>
          <div>Price 200</div>
        </div>
      </div>
      {/* served by */}
      <div className="flex border-b-2 border-white py-2 ">
        <p>Served by</p>
        <select>
          <option>Deno</option>
          <option>Paula</option>
        </select>
      </div>
      <div className="flex justify-between border-b-2 border-white py-2 ">
        <div>Total</div>
        <div> 200</div>
      </div>
      <div className="flex justify-between border-b-2 border-white py-2 ">
        <div>Amount</div>
        <div> 200</div>
      </div>
      <div className="flex justify-between border-b-2 border-white py-2 ">
        <div>balance</div>
        <div> 200</div>
      </div>
      <div className="flex border-b-2 border-white py-2 ">
        <p>Paid Through</p>{" "}
        <select>
          {" "}
          <option>Mpesa</option>
          <option>Cash</option>
          <option>Credit</option>
        </select>
      </div>
      <div>
        <button>Confirm Order</button>
        <button>Print Receipt</button>
      </div>
    </div>
  );
}

export default OrderSection;
