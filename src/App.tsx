import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ReactQueryProvider } from "./providers";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ReactQueryProvider>
      <RouterProvider router={routes} />
      <Toaster
        richColors
        toastOptions={{
          classNames: {
            success: "!bg-green-600 !text-white",
            error: "!bg-red-600 !text-white",
          },
        }}
      />
    </ReactQueryProvider>
  );
}

export { App };
