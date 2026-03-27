import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ReactQueryProvider } from "./providers";

function App() {
  return (
    <ReactQueryProvider>
      <RouterProvider router={routes} />
    </ReactQueryProvider>
  );
}

export { App };
