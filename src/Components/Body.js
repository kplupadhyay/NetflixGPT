import React from "react";
import Login from "./Login.js";
import Browse from "./Browse.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
export default function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
