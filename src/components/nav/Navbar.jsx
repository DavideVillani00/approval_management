export default function Navbar({ children }) {
  return (
    <nav className="bg-navbar ">
      <ol className="flex md:flex-col justify-around">{children}</ol>
    </nav>
  );
}
