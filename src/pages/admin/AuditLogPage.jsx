export default function AuditLogPage() {
  return (
    <div className="p-5">
      <h1>Audit log</h1>
      <table className="w-full text-left mt-7">
        <thead>
          <tr>
            <th>Event</th>
            <th>User</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User login</td>
            <td>tizio</td>
            <td>2025/05/15</td>
            <td>successful login</td>
          </tr>
          <tr>
            <td>User login</td>
            <td>tizio</td>
            <td>2025/05/15</td>
            <td>successful login</td>
          </tr>
          <tr>
            <td>User login</td>
            <td>tizio</td>
            <td>2025/05/15</td>
            <td>successful login</td>
          </tr>
          <tr>
            <td>User login</td>
            <td>tizio</td>
            <td>2025/05/15</td>
            <td>successful login</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
