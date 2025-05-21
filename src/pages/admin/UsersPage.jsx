export default function UsersPage() {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h1>Users</h1>
        <button className="primaryBtn">+ Add User</button>
      </div>
      <table className="w-full text-left mt-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tizio</td>
            <td>tizio@lalla-sdsd.io</td>
            <td>user</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
