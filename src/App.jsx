

import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      {/* Your app's code here */}
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  );
}
