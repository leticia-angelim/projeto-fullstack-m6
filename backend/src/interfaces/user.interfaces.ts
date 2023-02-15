export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
  account: string;
  password: string;
}

export interface IUser extends IUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birth_date?: string;
  description?: string;
}
