type PersonsDTO = {
  id: string;
  name: string;
  age: number;
};

type GetPersonsResponseDTO = PersonsDTO;

type PersonTotalsDTO = {
  name: string;
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

type GetTotalsResponseDTO = {
  persons: PersonTotalsDTO[];
  totalIncome: number;
  totalExpense: number;
  balance: number;
};

export type {
  PersonsDTO,
  GetPersonsResponseDTO,
  PersonTotalsDTO,
  GetTotalsResponseDTO,
};
