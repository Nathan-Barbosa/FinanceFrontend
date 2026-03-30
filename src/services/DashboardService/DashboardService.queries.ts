// services/DashboardService/DashboardService.hooks.ts
import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "./DashboardService";
import type { DashboardDTO } from "@/models";

const dashboardKeys = {
  all: ["dashboard"] as const,
};

const useGetDashboardQuery = () => {
  return useQuery<DashboardDTO>({
    queryKey: dashboardKeys.all,
    queryFn: DashboardService.getDashboard,
  });
};

export { useGetDashboardQuery };
