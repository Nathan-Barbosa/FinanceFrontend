import type { GetPersonsResponseDTO } from "@/models/Persons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PersonService } from "./PersonsService";
import type {
  PostPersonsRequestDTO,
  UpdatePersonRequestDTO,
} from "./PersonsService.types";

const personsKeys = {
  all: ["persons"] as const,
  lists: () => [...personsKeys.all, "list"] as const,
  create: () => [...personsKeys.all, "createPerson"] as const,
  update: () => [...personsKeys.all, "updatePerson"] as const,
  delete: () => [...personsKeys.all, "deletePerson"] as const,
};

const useGetPersonsQuery = () => {
  return useQuery<GetPersonsResponseDTO[]>({
    queryKey: personsKeys.lists(),
    queryFn: () => PersonService.getPersons(),
  });
};

const usePostPersonQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, PostPersonsRequestDTO>({
    mutationKey: personsKeys.create(),
    mutationFn: PersonService.createPerson,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: personsKeys.lists(),
      }),
  });
};

const usePutPersonQuery = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, UpdatePersonRequestDTO>({
    mutationKey: personsKeys.update(),
    mutationFn: ({ id, payload }) => PersonService.updatePerson(id, payload),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: personsKeys.lists(),
      }),
  });
};

const useDeletePersonMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationKey: personsKeys.delete(),
    mutationFn: PersonService.deletePerson,

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: personsKeys.lists(),
      }),
  });
};

export {
  useGetPersonsQuery,
  usePostPersonQuery,
  usePutPersonQuery,
  useDeletePersonMutation,
};
