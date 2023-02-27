import React from "react";
import { UserProvider } from "./UserContext";
import { ProvidersProps } from "../interfaces/providers";
import { AnnoucementProvider } from "./AnnouncementContext";

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <AnnoucementProvider>{children}</AnnoucementProvider>
    </UserProvider>
  );
};
