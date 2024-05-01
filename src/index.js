import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate, } from "react-router-dom";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Navigate, { to: "/shared", replace: true }),
    },
    {
        path: "/shared",
        element: _jsx(SharedPage, {}),
    },
    {
        path: "/folder",
        element: _jsx(FolderPage, {}),
    },
]);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(_jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
