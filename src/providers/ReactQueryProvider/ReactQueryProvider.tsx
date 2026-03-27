// ReactQueryProvider.tsx
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactQueryProviderProps } from "./ReactQueryProvider.types";

const fiveMinutes = 1000 * 60 * 5;

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: { queries: { retry: 1, staleTime: fiveMinutes } },
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { ReactQueryProvider };
