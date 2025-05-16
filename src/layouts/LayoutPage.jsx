import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar.jsx";

export default function LayoutPage() {
  return (
    <div className="modal">
      <Navbar />
      <main className="place-self-center">
        <Outlet />
      </main>
    </div>
  );
}
