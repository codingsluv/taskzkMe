import { useState } from "react";

export default function TaskForm({ onAddTask }) {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim() !== "" && desc.trim() !== "") {
        onAddTask(task, desc);
        setTask("");
        setDesc("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="card-subtitle py-6">
          <input
            type="text"
            placeholder="Your Task..."
            className="input input-bordered w-full max-w-xs"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="card-subtitle py-6">
          <input
            type="text"
            placeholder="Description..."
            className="input input-bordered w-full max-w-xs"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="card-actions justify-end">
          <button type="submit" className="btn hover:bg-purple-400 hover:text-white">
            Create Task
          </button>
        </div>
      </form>
    );
  }