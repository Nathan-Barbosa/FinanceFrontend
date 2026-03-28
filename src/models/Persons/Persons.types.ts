type PersonsDTO = {
  id: number;
  name: string;
  age: number;
};

type GetPersonsResponseDTO = PersonsDTO;

export type { PersonsDTO, GetPersonsResponseDTO };
