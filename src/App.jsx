import Footer from "./component/Footer";
import Header from "./component/Header";

export default function App() {
  return (
    <div className="">
      <Header />
      {/* Your app's code here */}
      <div className="flex flex-col items-center py-6 justify-center h-screen">
        <div className="text-4xl font-bold text-white">
          <h1 className="text-center hover:text-purple-300 cursor-pointer">
            Welcome to Task Management
          </h1>
          <p className="text-center text-gray-500">
            A simple task management app built with React, Tailwind CSS, and
            DaisyUI.
          </p>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-slate-300 text-black px-4 py-2 rounded-md hover:bg-purple-400 focus:outline-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}