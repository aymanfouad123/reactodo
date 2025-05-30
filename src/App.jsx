import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id);
    let index = todos.findIndex((items) => {
      return items.id === id;
    });
    console.log(index);

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    console.log(newTodos);
  };

  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-1 container mx-auto my-5 rounded-2xl p-5 bg-gray-300">
          <div className="addTodo">
            <h2 className="text-lg font-bold">Add Todo</h2>
            <div className="inputTodo flex gap-2 my-3">
              <input
                onChange={handleChange}
                value={todo}
                type="text"
                className="bg-gray-100 rounded-md"
              />
              <button
                onClick={handleAdd}
                className="btn bg-gray-600 hover:bg-gray-900"
              >
                Add
              </button>
            </div>
          </div>

          <h2 className="text-lg font-bold mt-9">Your Todo's</h2>
          <div className="todoList mt-3">
            {todos.map((items) => {
              return (
                <div
                  key={items.id}
                  className="card border-2 border-dashed border-purple-400 bg-gray-200 flex justify-between items-center p-4 rounded-md"
                >
                  <input
                    type="checkbox"
                    value={items.isCompleted}
                    onChange={handleCheckbox}
                    name={items.id}
                    id=""
                  />
                  <div className={items.isCompleted ? "line-through" : ""}>
                    {items.todo}
                  </div>
                  <div className="buttons flex gap-3">
                    <button
                      onClick={handleEdit}
                      className="btn bg-gray-600 hover:bg-gray-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      className="btn bg-purple-600 hover:bg-purple-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
