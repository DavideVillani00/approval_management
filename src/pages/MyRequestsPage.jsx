import RequestCard from "../components/RequestCard.jsx";
export default function MyRequestsPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>My Request</h1>
      <ol>
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </ol>
    </div>
  );
}
