import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={{
            flex: 1,
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "8px 12px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              borderBottom: "1px solid #ddd",
            }}
          >
            {t}
            <button
              onClick={() => removeTask(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
