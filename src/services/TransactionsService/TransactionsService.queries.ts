import type { GetTransactionsResponseDTO } from "@/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TransactionsService } from "./TransactionsService";
import type { PostTransactionsRequestDTO } from "./TransactionsService.types";

const transactionsKeys = {
  all: ["transactions"] as const,
  lists: () => [...transactionsKeys.all, "list"] as const,
  create: () => [...transactionsKeys.all, "createTransactions"] as const,
};

const useGetTransactionsQuery = () => {
  return useQuery<GetTransactionsResponseDTO[]>({
    queryKey: transactionsKeys.lists(),
    queryFn: () => TransactionsService.getTransactions(),
  });
};

const usePostTransactionsQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostTransactionsRequestDTO>({
    mutationKey: transactionsKeys.create(),
    mutationFn: TransactionsService.createTransaction,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: transactionsKeys.lists(),
      }),
  });
};

export { useGetTransactionsQuery, usePostTransactionsQuery };
