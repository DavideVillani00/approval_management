import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar.jsx";

export default function LayoutPage() {
  return (
    <div className="modal">
      <Navbar />
      <main className="w-full h-full p-4 md:place-content-center">
        <Outlet />
      </main>
    </div>
  );
}
