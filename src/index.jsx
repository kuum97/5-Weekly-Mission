import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/shared" replace />,
  },
  {
    path: "/shared",
    element: <SharedPage />,
  },
  {
    path: "/folder/:userId",
    element: <FolderPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
