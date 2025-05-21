import { useState } from "react";
import PendingRequestCard from "../../components/PendingRequestCard.jsx";
export default function ManageRequestsPage() {
  const [section, setSection] = useState("pending");
  function selectSection(sectionClicked) {
    if (section !== sectionClicked) {
      setSection(sectionClicked);
    }
  }
  return (
    <>
      <div className="flex justify-between">
        <h1
          className={`${
            section === "pending" ? "" : "text-txt-disabled cursor-pointer"
          }`}
          onClick={() => selectSection("pending")}
        >
          Pending
        </h1>
        <h1
          className={`${
            section === "approved" ? "" : "text-txt-disabled cursor-pointer"
          }`}
          onClick={() => selectSection("approved")}
        >
          Approved
        </h1>
        <h1
          className={`${
            section === "rejected" ? "" : "text-txt-disabled cursor-pointer"
          }`}
          onClick={() => selectSection("rejected")}
        >
          Rejected
        </h1>
      </div>
      <ol className="flex  gap-4 flex-wrap mt-4">
        <PendingRequestCard />
        <PendingRequestCard />
        <PendingRequestCard />
        <PendingRequestCard />
      </ol>
    </>
  );
}
