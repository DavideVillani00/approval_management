export default function NavItems({ text, /* onClick, */ name }) {
  return (
    <li
      name={name}
      className="p-3 rounded-s hover:bg-divider w-full text-center md:text-left"
    >
      {text}
    </li>
  );
}
