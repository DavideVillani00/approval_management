import NavItems from "./NavItems";
const role = "user";
export default function Navbar({ children }) {
  return (
    <header className="bg-navbar md:w-2/5 lg:w-1/4  border-b-2 md:border-r-2 border-divider md:border-b-0 md:rounded-l-lg">
      <div className="flex gap-2 justify-center md:justify-start items-center p-4 border-b-2 border-divider ">
        <img src="#" alt="" />
        <h1 className="text-xl font-bold ">Approval Management</h1>
      </div>
      <nav>
        <ol className="flex md:flex-col justify-evenly items-center md:pl-4 ">
          {role !== "admin" && (
            <>
              <NavItems name="submitRequest" text="Submit request" />
              <NavItems name="myRequests" text="My request" />
            </>
          )}
          {role === "supervisor" && (
            <>
              <NavItems name="pendingRequests" text="Pending request" />
              <NavItems name="approvedRequests" text="Approved request" />
              <NavItems name="rejectedRequests" text="Rejected request" />
            </>
          )}
          {role === "admin" && (
            <>
              <NavItems name="users" text="Users" />
              <NavItems name="auditLog" text="Audit log" />
            </>
          )}

          <NavItems name="settings" text="Settings" />
          <NavItems name="logout" text="Logout" />
        </ol>
      </nav>
    </header>
  );
}
