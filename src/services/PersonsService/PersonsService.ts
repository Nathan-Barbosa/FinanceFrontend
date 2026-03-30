import type {
  GetPersonsResponseDTO,
  GetTotalsResponseDTO,
} from "@/models/Persons";
import { api } from "../api";
import type { PostPersonsRequestDTO } from "./PersonsService.types";

class PersonService {
  public static readonly url = "api/person";

  public static async getPersons(): Promise<GetPersonsResponseDTO[]> {
    const { data } = await api.get<GetPersonsResponseDTO[]>(PersonService.url);
    return data;
  }

  public static async createPerson(
    payload: PostPersonsRequestDTO,
  ): Promise<void> {
    await api.post(PersonService.url, payload);
  }

  public static async updatePerson(
    id: string,
    payload: PostPersonsRequestDTO,
  ): Promise<void> {
    await api.put(`${PersonService.url}/${id}`, payload);
  }

  public static async deletePerson(id: string): Promise<void> {
    await api.delete(`${PersonService.url}/${id}`);
  }

  public static async getTotals(): Promise<GetTotalsResponseDTO> {
    const { data } = await api.get<GetTotalsResponseDTO>(
      `${PersonService.url}/totals`,
    );
    return data;
  }
}

export { PersonService };
