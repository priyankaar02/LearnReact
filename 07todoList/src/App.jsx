import { useState } from "react";

function App() {
  // State to hold the list of todos(Array)
  const [todos, setTodos] = useState([]);
  // State to hold the current todo input
  const [input, setInput] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput(""); // Clear input after adding
    }
  };

  // Remove a todo
  const removeTodo = (index) => {
    console.log(index);
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold mb-4 text-center">To-Do List</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="w-full mt-2 p-2 bg-blue-500 text-white rounded-lg"
            onClick={addTodo}
          >
            Add Task
          </button>
        </div>
        <ul className="list-none">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 mb-2 bg-gray-200 rounded-lg"
            >
              <span>{todo}</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
