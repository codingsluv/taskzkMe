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
        </div>
      </div>
      <Footer />
    </div>
  )
}