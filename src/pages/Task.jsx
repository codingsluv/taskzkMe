import { useState } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useEffect } from "react";
import TaskForm from "../component/TaskForm";

export default function Task() {
  const [task, setTask] = useState("");

  // fetch task from supabase
  const fetchTask = async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.log(error);
    } else {
      setTask(data);
    }
  }

  const handleAddTask = async (title) => {
    const { data, error } = await supabase.from("tasks").insert([{ title }]);
    if (error) {
      console.log(error);
    } else {
      setTask([...task, ...data]);
    }
  }

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="flex flex-col items-center py-6 justify-center h-screen">
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Create a Task</h2>
          <p>Set your priority and deadline</p>
          <TaskForm onAddTask={handleAddTask} />
        </div>
      </div>
    </div>
  );
}
