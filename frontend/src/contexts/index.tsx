import React from "react";
import { ProvidersProps } from "../interfaces/providers";
import { AnnoucementProvider } from "./AnnouncementContext";

export const Providers = ({ children }: ProvidersProps) => {
  return <AnnoucementProvider>{children}</AnnoucementProvider>;
};
