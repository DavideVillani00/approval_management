import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <main className="p-5 flex flex-col h-screen justify-center items-center bg-bg ">
      <div className="modalPage h-4/6">
        <h1>Login</h1>
        <form className=" w-full flex flex-col gap-2 my-5">
          <Input
            type="text"
            label="Email address"
            name="email"
            placeholder="Enter your Email"
          />
          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your Password"
          />
          <button type="submit" className="primaryBtn w-full">
            Login
          </button>
        </form>
        <span className="text-center text-sm text-txt-link hover:text-txt-link-hover">
          <Link to="/signup">You don't have an accout yet? Signup</Link>
        </span>
      </div>
    </main>
  );
}
