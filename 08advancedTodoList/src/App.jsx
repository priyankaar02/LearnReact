import { useState, useCallback, useMemo } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  // Add a new todo
  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      const newTask = { id: Date.now(), text: newTodo, completed: false };
      setTodos((prevTodos) => [...prevTodos, newTask]);
      setNewTodo("");
    }
  }, [newTodo]);

  // Toggle the completed status of a todo
  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Filter the todos based on the selected filter
  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    } else if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  }, [filter, todos]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

        <div className="mb-4">
          <input
            type="text"
            className="w-full outline-none p-2 border border-gray-300 rounded"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="w-full mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>

        <div className="mb-4 flex justify-between">
          <button
            onClick={() => setFilter("all")}
            className="px-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Show all
          </button>
          <button
            onClick={() => setFilter("completed")}
            className="px-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("pending")}
            className="px-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
          >
            Pending
          </button>
        </div>

        <ul>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between mb-2 p-2 border-b border-gray-300"
            >
              <span
                className={`flex-1 ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() =>
                  setTodos((prevTodos) =>
                    prevTodos.filter((todo) => todo.id !== todo.id)
                  )
                }
                className="ml-2 px-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
