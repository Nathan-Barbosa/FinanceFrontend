type PostPersonsRequestDTO = {
  name: string;
  age: number;
};

type UpdatePersonRequestDTO = {
  id: string;
  payload: PostPersonsRequestDTO;
};

export type { PostPersonsRequestDTO, UpdatePersonRequestDTO };
