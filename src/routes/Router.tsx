import { createBrowserRouter, Navigate } from "react-router-dom";
import SharedPage from "pages/SharedPage";
import FolderPage from "pages/FolderPage";

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
    path: "/folder",
    element: <FolderPage />,
  },
]);

export default router;
