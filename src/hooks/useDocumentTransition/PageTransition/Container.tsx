import styled from "@emotion/styled";

import React, { FC } from "react";

const ContainerStyled = styled("div")`
  width: 100%;
`;

export const Container: FC = ({ children, ...props }) => {
  return <ContainerStyled {...props}>{children}</ContainerStyled>;
};
