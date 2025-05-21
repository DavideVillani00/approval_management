export default function PendingRequestCard() {
  return (
    <li className="rounded-lg border-2 border-input-border p-4 gap-2 flex flex-col max-w-lg">
      <h3>Title</h3>
      <p className="text-sm text-txt-secondary">name & date</p>
      <p className="">
        description Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Alias, molestias.
      </p>
      <div className="flex gap-2 justify-end mt-4">
        <button className="primaryBtn">Approve</button>
        <button className="dangerBtn">Reject</button>
      </div>
    </li>
  );
}
