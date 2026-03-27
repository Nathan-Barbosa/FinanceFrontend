// src/routes.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "../layout";
import { Home } from "@/views/Home";
import { ROUTES } from "@/constants";

const routes = createBrowserRouter([
  {
    children: [
      {
        path: ROUTES.HOME,
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
]);

export { routes };
