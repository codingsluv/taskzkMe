import { useState } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useEffect } from "react";
import TaskForm from "../component/TaskForm";

export default function Task() {
  const [task, setTask] = useState([]);

  // fetch task from supabase
  const fetchTask = async () => {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.log(error);
    } else {
      setTask(data);
    }
  };

  const handleAddTask = async (title, desc) => {
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ title, desc }]);
    if (error) {
      console.log(error);
    } else {
      setTask([...task, ...data]);
    }
  };

  const handleUpdateStatusTask = async (id, currentStatus) => {
    const { data, error } = await supabase
      .from("tasks")
      .update({ completed: currentStatus })
      .match({ id });
    if (error) {
      console.log("error in update status task", error);
    } else {
      setTask(
        task.map((item) => {
          if (item.id === id) {
            return { ...item, completed: currentStatus };
          }
          return item;
        })
      );
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
      <div className="overflow-x-auto">
        <table className="table py-6 w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Desc</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {task.map((item, index) => (
              <tr className="bg-base-200" key={item.id}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.desc || "-"}</td>
                <td>{item.completed ? "Yes" : "No"}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))]"
                    onChange={(e) => handleUpdateStatusTask(item.id, e.target.checked)}
                  />
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
