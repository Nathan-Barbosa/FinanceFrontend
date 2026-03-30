import type { GetTransactionsResponseDTO } from "@/models";
import { api } from "../api";
import type { PostTransactionsRequestDTO } from "./TransactionsService.types";

class TransactionsService {
  public static readonly url = "api/transaction";

  public static async getTransactions(): Promise<GetTransactionsResponseDTO[]> {
    const { data } = await api.get<GetTransactionsResponseDTO[]>(
      TransactionsService.url,
    );
    return data;
  }

  public static async createTransaction(
    payload: PostTransactionsRequestDTO,
  ): Promise<void> {
    await api.post(TransactionsService.url, payload);
  }
}

export { TransactionsService };
