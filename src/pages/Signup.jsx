import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <main className=" flex flex-col p-5 h-screen justify-center items-center bg-bg ">
      <div className="modalPage">
        <h1>Signup</h1>
        <form className=" w-full flex flex-col gap-2 my-5">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Input
              type="text"
              label="First name"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full"
            />
            <Input
              type="text"
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              className="w-full"
            />
          </div>
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
          <Input
            type="password"
            label="Repeat password"
            name="repeatPassword"
            placeholder="Re-enter your Password"
          />
          <button type="submit" className="primaryBtn w-full">
            Login
          </button>
        </form>
        <span className="text-center text-sm text-txt-link hover:text-txt-link-hover">
          <Link to="/login">You already have an accout? Login</Link>
        </span>
      </div>
    </main>
  );
}
