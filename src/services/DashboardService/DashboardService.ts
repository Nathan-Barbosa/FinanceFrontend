// services/DashboardService/DashboardService.ts
import { api } from "../api";
import type { DashboardDTO } from "@/models";

class DashboardService {
  public static readonly url = "api/dashboard";

  public static async getDashboard(): Promise<DashboardDTO> {
    const { data } = await api.get<DashboardDTO>(DashboardService.url);
    return data;
  }
}

export { DashboardService };
