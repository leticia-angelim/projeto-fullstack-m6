import { ReactNode } from "react";

export interface IUserContext {
  registerUser: (data: IUserRequest) => Promise<void>;
  loginUser: (data: IUserLogin) => Promise<void>;
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
  account: string;
  password: string;
}

export interface IUser extends IUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLoginResponse {
  token: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
