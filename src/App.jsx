import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./layouts/LayoutPage.jsx";

import SubmitRequestPage from "./pages/SubmitRequestPage.jsx";
import MyRequestsPage from "./pages/MyRequestsPage.jsx";
import PendingRequestsPage from "./pages/supervisor/PendingRequestsPage.jsx";
import RejectedRequestsPage from "./pages/supervisor/RejectedRequestsPage.jsx";
import ApprovedRequestsPage from "./pages/supervisor/ApprovedRequestsPage.jsx";
import UsersPage from "./pages/admin/UsersPage.jsx";
import AuditLogPage from "./pages/admin/AuditLogPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";

const router = createBrowserRouter([
  {
    path: "signup",
    element: <h1>Sign up</h1>,
  },
  { path: "login", element: <h1>Login</h1> },
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        path: "/",
        element: <h1 className=" text-center">Select a section</h1>,
      },
      { path: "/submitRequest", element: <SubmitRequestPage /> },
      { path: "/myRequests", element: <MyRequestsPage /> },
      { path: "/pendingRequests", element: <PendingRequestsPage /> },
      { path: "/rejectedRequests", element: <RejectedRequestsPage /> },
      { path: "/users", element: <UsersPage /> },
      { path: "/auditLog", element: <AuditLogPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/logout", element: <LogoutPage /> },
      { path: "/approvedRequests", element: <ApprovedRequestsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
