// src/routes.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "../layout";
import { Home } from "@/views/Home";
import { ROUTES } from "@/constants";
import { CategoryTotals, Persons } from "@/views";
import { Categories } from "@/views/Categories";
import { Transactions } from "@/views/Transactions";
import { PersonsTotals } from "@/views/PersonsTotals";

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
          {
            path: ROUTES.PERSONS,
            element: <Persons />,
          },
          {
            path: ROUTES.CATEGORIES,
            element: <Categories />,
          },
          {
            path: ROUTES.TRANSACTIONS,
            element: <Transactions />,
          },
          {
            path: ROUTES.PERSONSTOTALS,
            element: <PersonsTotals />,
          },
          {
            path: ROUTES.CATEGORYTOTALS,
            element: <CategoryTotals />,
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
