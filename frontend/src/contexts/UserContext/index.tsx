import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = () => {
  return <UserContext.Provider value={{}}>{}</UserContext.Provider>;
};
