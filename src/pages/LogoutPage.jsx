export default function LogoutPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h1>Logout</h1>
      <p className="text-lg">Are you sure you want to logout</p>
      <button className="primaryBtn w-fit">Logout</button>
    </div>
  );
}
