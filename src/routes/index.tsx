// src/routes.tsx

import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "../layout";
import { Dashboard } from "@/views/Dashboard";
import { ROUTES } from "@/constants";
import { CategoryTotals, Persons } from "@/views";
import { Categories } from "@/views/Categories";
import { Transactions } from "@/views/Transactions";
import { PersonsTotals } from "@/views/PersonsTotals";

const routes = createBrowserRouter([
  {
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
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
    element: <Navigate to={ROUTES.DASHBOARD} replace />,
  },
]);

export { routes };
