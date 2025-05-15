export default function Navbar({ children }) {
  return (
    <header className="bg-navbar md:w-1/4 md:pl-4 border-b-2 md:border-r-2 border-divider md:border-b-0 md:rounded-l-lg">
      <div className="flex gap-2 justify-center md:justify-start items-center p-4 border-b-2 border-divider">
        <img src="#" alt="" />
        <h1 className="text-xl font-bold">Approval Management</h1>
      </div>
      <nav>
        <ol className="flex md:flex-col justify-around">{children}</ol>
      </nav>
    </header>
  );
}
