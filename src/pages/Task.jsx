export default function Task() {
  return (
    <div className="flex flex-col items-center py-6 justify-center h-screen">
      <div className="card bg-neutral text-neutral-content w-96">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Create a Task</h2>
        <p>Set your priority and deadline</p>
        <div className="card-subtitle py-6">
          <input type="text" placeholder="Your Task..." className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-purple-400 hover:text-white">Create Task</button>
        </div>
      </div>
    </div>
    </div>
  );
}
