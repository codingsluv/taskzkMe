import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import Task from "./pages/Task";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Route>

    </Routes>
  </BrowserRouter>
);
