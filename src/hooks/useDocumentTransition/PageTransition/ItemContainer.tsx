import styled from "@emotion/styled";

import React, { FC } from "react";

interface ItemContainerProps {
  pageTransitionTag?: string;
}

const getPageTransitionTag = ({ pageTransitionTag }: ItemContainerProps) =>
  pageTransitionTag &&
  `
  page-transition-tag: ${pageTransitionTag};
  contain: paint;
`;

const ItemContainerStyled = styled("div")<ItemContainerProps>`
  ${getPageTransitionTag}
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  max-height: 800px;
`;

export const ItemContainer: FC<ItemContainerProps> = ({
  children,
  ...props
}) => {
  return <ItemContainerStyled {...props}>{children}</ItemContainerStyled>;
};
