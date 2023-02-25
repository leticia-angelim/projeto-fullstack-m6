import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IUser,
  IUserContext,
  IUserLogin,
  IUserProviderProps,
} from "../../interfaces/user";
import api from "../../services/api";
import { loginRequest, registerUserRequest } from "../../services/userRequests";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const registerUser = async (data: IUser) => {
    await registerUserRequest(data)
      .then((res) => {
        console.log(res);
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = async (data: IUserLogin) => {
    await loginRequest(data)
      .then((res) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;

        getUserProfile();

        localStorage.clear();
        localStorage.setItem("@user:token", res.token);

        navigate("/profileAdmin", { replace: true });

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserProfile = async () => {
    const { data } = await api.get<IUser>("/users/profile");
    setUser(data);

    localStorage.setItem("@user:id", data.id);
  };

  // useEffect(() => {
  //   const loadUser = () => {
  //     const token = localStorage.getItem("@user:token");

  //     if (token) {
  //       try {
  //         api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  //         getUserProfile();
  //       } catch {
  //         localStorage.clear();
  //       }
  //     }
  //   };

  //   loadUser();
  // }, []);

  return (
    <UserContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
