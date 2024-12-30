import { Link } from "react-router";


export default function SignIn() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Link to="/task"
        className="btn hover:bg-purple-400 hover:text-white">
        Get Started Build Your Task 🚀
      </Link>
    </div>
  );
}
