import { Link } from "react-router-dom";
export default function NavItems({ text, /* onClick, */ name }) {
  return (
    <Link
      to={`/${name}`}
      className=" rounded-s hover:bg-divider h-full md:w-full text-center md:text-left "
    >
      <li name={name} className="p-3 h-full ">
        {text}
      </li>
    </Link>
  );
}
