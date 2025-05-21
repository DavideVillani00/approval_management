import PendingRequestCard from "../../components/PendingRequestCard.jsx";
export default function PendingRequestsPage() {
  return (
    <>
      <h1>Pending</h1>
      <ol className="flex  gap-4 flex-wrap mt-4">
        <PendingRequestCard />
        <PendingRequestCard />
        <PendingRequestCard />
        <PendingRequestCard />
      </ol>
    </>
  );
}
