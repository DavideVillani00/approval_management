import Navbar from "./components/nav/Navbar.jsx";
import NavItems from "./components/nav/NavItems.jsx";

function App() {
  return (
    <div className=" modal ">
      <Navbar>
        <NavItems name="home" text="Home" />
        <NavItems name="settings" text="Settings" />
        <NavItems name="logout" text="Logout" />
      </Navbar>
      <h1>main</h1>
    </div>
  );
}

export default App;
