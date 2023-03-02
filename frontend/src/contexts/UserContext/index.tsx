import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAddress } from "../../interfaces/address";
import { IComment } from "../../interfaces/comments";
import {
  IUser,
  IUserContext,
  IUserLogin,
  IUserLoginResponse,
  IUserProviderProps,
  IUserRequest,
  IUserUpdate,
} from "../../interfaces/user";
import api from "../../services/api";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [registerModal, setRegisterModal] = useState<boolean>(false);
  const [modalAddress, setAddressModal] = useState<boolean>(false);
  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [deleteUserModal, setDeleteUserModal] = useState<boolean>(false);
  const [forgotPasswordModal, setForgotPasswordModal] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const registerUser = async (data: IUserRequest) => {
    await api
      .post<IUser>("/users", data)
      .then((res) => {
        setRegisterModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = async (data: IUserLogin) => {
    await api
      .post<IUserLoginResponse>("/login", data)
      .then(({ data }) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        getUserProfile();

        localStorage.clear();
        localStorage.setItem("@user:token", data.token);

        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserProfile = async () => {
    await api.get<IUser>("/users/profile").then((res) => {
      setUser(res.data);

      localStorage.setItem("@user:id", res.data.id);
      localStorage.setItem("@user:name", res.data.name);
      localStorage.setItem("@user:account", res.data.account);
    });
  };

  const editAddress = async (data: IAddress) => {
    await api
      .patch(`/address/${user?.address.id}`, data)
      .then((res) => {
        setAddressModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editUser = async (data: IUserUpdate) => {
    await api
      .patch<IUser>("/users", data)
      .then((res) => {
        setEditUserModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUser = async () => {
    await api
      .delete<IUser>("/users")
      .then((res) => {
        setDeleteUserModal(false);
        localStorage.clear();
        setUser(null);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const loadUser = () => {
      const token = localStorage.getItem("@user:token");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          getUserProfile();
        } catch {
          localStorage.clear();
        }
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        registerModal,
        setRegisterModal,
        editAddress,
        editUser,
        modalAddress,
        setAddressModal,
        user,
        setUser,
        selectedUser,
        setSelectedUser,
        setEditUserModal,
        editUserModal,
        deleteUserModal,
        setDeleteUserModal,
        deleteUser,
        forgotPasswordModal,
        setForgotPasswordModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
