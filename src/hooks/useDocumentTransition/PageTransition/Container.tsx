import styled from "@emotion/styled";
import React, { FC } from "react";

const ContainerStyled = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

export const Container: FC = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);
