import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 container mx-auto my-5 rounded-2xl p-5 bg-gray-300">
          <div className="addTodo">
            <h2 className="text-lg font-bold">Add Todo</h2>
            <div className="inputTodo flex gap-2 my-3">
              <input type="text" className="bg-gray-100 rounded-md" />
              <button className="btn bg-gray-600 hover:bg-gray-900">Add</button>
            </div>
          </div>

          <h2 className="text-lg font-bold mt-9">Your Todo's</h2>
          <div className="todoList mt-3">
            <div className="card border-2 border-dashed border-purple-400 bg-gray-200 flex justify-between items-center p-4 rounded-md">
              <div className="todoDesc text-left max-w-4/5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ad
                aliquam animi nemo Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur alias hic voluptatum,
                voluptatibus, consequatur impedit quam pariatur, aliquid error
                blanditiis quas est totam officiis eius rerum consectetur
                adipisci distinctio et.
              </div>
              <div className="buttons flex gap-3">
                <button className="btn bg-gray-600 hover:bg-gray-900">
                  Edit
                </button>
                <button className="btn bg-purple-600 hover:bg-purple-900">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
