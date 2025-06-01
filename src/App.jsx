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

  const handleChange = (e) => setTodo(e.target.value);

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
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
  };

  const handleDelete = (id) => setTodos(todos.filter((item) => item.id !== id));

  const handleEdit = (e, id) => {
    let t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    handleDelete(id);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* Modal Box */}
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

      {/* Page layout with navbar and vertical flex */}
      <div className="flex flex-col min-h-screen bg-purple-100">
        <Navbar />
        <div className="flex-1 flex justify-center h-full px-4 py-6">
          {/* Container locked in height so inner scroll can work */}
          <div className="w-full max-w-4xl bg-violet-200 rounded-2xl p-5 flex flex-col overflow-hidden max-h-[calc(100vh-100px)]">
            {/* Todo input section */}
            <div className="relative">
              <h2 className="text-lg font-bold">Add Todo</h2>
              <div className="flex gap-2 my-3">
                <input
                  onChange={handleChange}
                  value={todo}
                  type="text"
                  className="bg-gray-100 rounded-md px-2 py-1"
                />
                <button
                  onClick={handleAdd}
                  className="btn bg-gray-600 hover:bg-gray-900 text-white px-4 py-1 rounded"
                >
                  Add
                </button>
              </div>

              {/* Floating alert that doesn't push layout */}
              {error && (
                <div className="absolute -bottom-12 text-red-600 bg-red-100 border border-red-400 rounded px-3 py-2 w-full">
                  {error}
                </div>
              )}
            </div>

            {/* Todo list section */}
            <h2 className="text-lg font-bold mt-14">Your Todo's</h2>
            <div className="flex-1 mt-3 bg-violet-700 overflow-y-auto rounded-md p-3 space-y-3">
              {todos.length === 0 ? (
                <div className="text-white text-center my-5">
                  No Todo's to display
                </div>
              ) : (
                todos.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-200 p-4 rounded-md border-2 border-dashed border-purple-400 flex justify-between items-center"
                  >
                    <input
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={handleCheckbox}
                      name={item.id}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => handleEdit(e, item.id)}
                        className="btn bg-gray-600 hover:bg-gray-900 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setTodoToDelete(item.id);
                        }}
                        className="btn bg-purple-600 hover:bg-purple-900 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
