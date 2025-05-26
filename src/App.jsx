import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutPage from "./layouts/LayoutPage.jsx";

import SubmitRequestPage from "./pages/SubmitRequestPage.jsx";
import MyRequestsPage from "./pages/MyRequestsPage.jsx";
import ManageRequestsPage from "./pages/supervisor/ManageRequestsPage.jsx";

import UsersPage from "./pages/admin/UsersPage.jsx";
import AuditLogPage from "./pages/admin/AuditLogPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import RequestCardExpanded from "./components/RequestCardExpanded.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  { path: "/login", element: <Login /> },
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
      { path: "/users", element: <UsersPage /> },
      { path: "/auditLog", element: <AuditLogPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/logout", element: <LogoutPage /> },
      { path: "/manageRequest", element: <ManageRequestsPage /> },
      { path: "/requestExtended", element: <RequestCardExpanded /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
