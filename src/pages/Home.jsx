import { Link } from "react-router";


export default function Home() {
    return (
        <div className="flex flex-col items-center py-6 justify-center h-screen">
        <div className="text-4xl font-bold text-white">
          <h1 className="text-center hover:text-purple-300 cursor-pointer">
            Welcome to Task Management
          </h1>
          <p className="text-center text-gray-500">
            A simple task management app built with React, Tailwind CSS, and
            DaisyUI.
          </p>
          <div className="text-center py-4">
            <Link to="/task"
              className="btn hover:bg-purple-400 hover:text-white">
              Get Started Build Your Task 🚀
            </Link>
          </div>
            
        </div>
      </div>
    );
}