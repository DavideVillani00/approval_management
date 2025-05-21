import ChronologyCard from "./ChronologyCard.jsx";

export default function RequestCardExpanded() {
  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div>
          <h1>Title</h1>
          <p>name</p>
          <p>submitted date</p>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="warningBtn  w-full">Back</button>
          <button className="primaryBtn w-full">Approve</button>
          <button className="dangerBtn w-full">Reject</button>
        </div>
      </div>
      <div className="w-full h-0.5 bg-divider my-3 "></div>
      <h3>Description</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        incidunt explicabo nulla. Iure soluta nostrum cumque officiis, ea
        tempore vitae.
      </p>
      <div className="w-full h-0.5 bg-divider my-3 "></div>

      <h3>Chronology</h3>
      <ol className="list-disc p-5">
        <ChronologyCard />
        <ChronologyCard />
        <ChronologyCard />
        <ChronologyCard />
      </ol>
    </div>
  );
}
