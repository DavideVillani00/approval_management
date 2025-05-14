import Header from "./components/nav/Header.jsx";
import Navbar from "./components/nav/Navbar.jsx";
import NavItems from "./components/nav/NavItems.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="bg-divider h-0.5 md:w-0.5"></div>
      <Navbar>
        <NavItems name="home" text="Home" />
        <NavItems name="settings" text="Settings" />
        <NavItems name="logout" text="Logout" />
      </Navbar>
      <h1>main</h1>
    </>
  );
}

export default App;
