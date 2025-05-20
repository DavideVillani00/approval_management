export default function RequestCard() {
  return (
    <li className="flex p-4 shadow-lg border-[1px] border-input-border rounded-lg mb-3 justify-between items-center">
      <div>
        <h3>Title</h3>
        <p>description</p>
      </div>
      <span className="py-1 px-3 bg-state-pending-bg rounded-lg ">State</span>
    </li>
  );
}
