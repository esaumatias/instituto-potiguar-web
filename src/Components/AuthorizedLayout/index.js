import React from "react";

import './AuthorizedLayout.css';

import { MainTopbar } from "../MainTopbar";
import { ContentContainer } from "./ContentContainer";
export const AuthorizedLayout = ({ children }) => {
  return (
    <div className="containerPage">
      <div className="containerMenuNav">
        <MainTopbar />
      </div>
      <ContentContainer>{children}</ContentContainer>
    </div>
  );
};
