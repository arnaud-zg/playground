import styled from "@emotion/styled";
import React, { FC } from "react";

export interface ImageProps {
  src: string;
  pageTransitionTag?: string;
}

const getPageTransitionTag = ({ pageTransitionTag }: ImageProps) =>
  pageTransitionTag && `
  page-transition-tag: ${pageTransitionTag};
`;


const ImageStyled = styled("img")<ImageProps>`
  ${getPageTransitionTag}
  contain: paint;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const Image: FC<ImageProps> = ({ children, ...props }) => (
  <ImageStyled {...props}>{children}</ImageStyled>
);
