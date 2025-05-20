import Input from "../components/Input.jsx";
export default function SubmitRequestPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Submit Request</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          name="title"
          type="text"
          label="Title"
          placeholder="Insert a title"
        />
        <Input
          name="description"
          type="textarea"
          label="Description"
          placeholder="Insert a description"
        />
        <button type="submit" className="primaryBtn float-end">
          Submit
        </button>
      </form>
    </div>
  );
}
