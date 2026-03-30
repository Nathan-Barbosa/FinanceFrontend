type PersonsDTO = {
  id: string;
  name: string;
  age: number;
};

type GetPersonsResponseDTO = PersonsDTO;

export type { PersonsDTO, GetPersonsResponseDTO };
