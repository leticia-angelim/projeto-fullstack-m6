import { IUser, IUserLogin, IUserLoginResponse } from "../interfaces/user";
import api from "./api";

export const registerUserRequest = async (userData: IUser): Promise<IUser> => {
  const { data } = await api.post<IUser>("/users", userData);

  return data;
};

export const loginRequest = async (
  userData: IUserLogin
): Promise<IUserLoginResponse> => {
  const { data } = await api.post<IUserLoginResponse>("/login", userData);

  return data;
};
