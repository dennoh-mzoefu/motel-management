import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function PostApp() {
  return (
    <div>
      {" "}
      <Sidebar />
      <div className="ml-48">
        <Navbar />
        Hotel Management
      </div>
    </div>
  );
}

export default PostApp;
