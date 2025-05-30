import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim() === "") {
      setError("Please enter a todo before adding!");
      return;
    }

    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    setError("");
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((items) => {
      return items.id === id;
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleEdit = () => {};

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* Modal content */}
          <div className="relative bg-white p-6 rounded shadow-lg text-center z-10">
            <h3 className="mb-4 text-lg font-bold">
              Are you sure you want to delete this todo?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="btn bg-gray-400 hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn bg-red-600 hover:bg-red-800"
                onClick={() => {
                  handleDelete(todoToDelete);
                  setShowModal(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

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
            {error && (
              <div className="text-red-600 bg-red-100 border border-red-400 rounded px-3 py-2 my-2">
                {error}
              </div>
            )}
          </div>

          <h2 className="text-lg font-bold mt-9">Your Todo's</h2>
          <div className="todoList mt-3">
            {todos.length === 0 && (
              <div className="my-5">No Todo's to display</div>
            )}
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
                      onClick={() => {
                        setShowModal(true);
                        setTodoToDelete(items.id);
                      }}
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
