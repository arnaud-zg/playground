import styled from "@emotion/styled";
import { Link, ThemeConfig } from "docz";
import React, { FC, HTMLAttributeAnchorTarget } from "react";
import { isUrl } from "../helpers";

interface RefProps {
  to: string;
  name: string;
  target?: HTMLAttributeAnchorTarget;
}

type RefStyledProps = Omit<RefProps, "to" | "name">;

const getBgColor = ({ theme }: { theme: ThemeConfig }) =>
  theme.colors.background2;
const getColorPrimary = ({ theme }: { theme: ThemeConfig }) =>
  theme.colors.primary;
const getColorLink = ({ theme }: { theme: ThemeConfig }) => theme.colors.gray;

const RefStyled = styled("div")<RefStyledProps>`
  display: flex;
  justify-content: space-between;
  margin: 1.25rem 0;
  padding: 1rem;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${getBgColor};
  color: ${getColorPrimary};
  border-radius: 3px;
  box-shadow: 0px 3px 8px 0px rgba(10, 25, 36, 0.1);
  span:first-of-type {
    text-decoration: underline;
  }

  span:last-of-type {
    color: ${getColorLink};
    text-decoration: none;
  }

  &:hover {
    box-shadow: 0px 3px 8px 0px rgba(10, 25, 36, 0.15);
  }
`;

export const Ref: FC<RefProps> = ({ to, name, target, ...restProps }) => {
  const ui = (
    <RefStyled {...restProps}>
      <span>{name}</span>
      <span>{to}</span>
    </RefStyled>
  );

  if (isUrl(to)) {
    return (
      <a href={to} target={target} {...restProps}>
        {ui}
      </a>
    );
  }

  return (
    <Link to={to} {...restProps}>
      {ui}
    </Link>
  );
};
