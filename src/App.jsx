import { useState } from "react";
import "./App.css";
import PostApp from "./PostApp";
import PreApp from "./PreApp";

function App() {
  return (
    <div>
      <PreApp className="w-0 h-0 z-20 " />
      <PostApp />
    </div>
  );
}

export default App;
