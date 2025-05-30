import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-2xl p-5 bg-gray-300">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add Todo</h2>
          <div className="inputTodo flex gap-2 my-3">
            <input type="text" className="bg-gray-100 rounded-lg" />
            <button className="bg-black text-white px-6 rounded-lg">Add</button>
          </div>
        </div>
        <h2 className="text-lg font-bold">Your Todo's</h2>
      </div>
    </>
  );
}

export default App;
