import React from "react";

export const ContentContainer = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#F6F6F6",
    }}
  >
    {children}
  </div>
);
