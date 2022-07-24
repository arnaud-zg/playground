import styled from "@emotion/styled";
import React, { FC } from "react";
import { Image } from "../../components/Image";

export type OnAction = (itemId: number, element: HTMLElement) => void;

type ItemProps = {
  itemId: number;
  src: string;
  onAction?: OnAction;
  scale: "normal" | "big";
  pageTransitionTag?: string;
};

type ItemStyledProps = Omit<ItemProps, "src">;

const scales = {
  normal: `
    flex: 0 0 25%;
    font-size: 16px;
    max-height: 200px;
  `,
  big: `
    flex: 1;
    font-size: 48px;
  `,
};

const getScale = ({ scale = "normal" }: ItemStyledProps) => scales[scale];

const ItemStyled = styled("div")<ItemStyledProps>`
  ${getScale}
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const Item: FC<ItemProps> = ({
  src,
  itemId,
  pageTransitionTag,
  onAction,
  ...props
}) => (
  <ItemStyled
    itemId={itemId}
    onClick={(e) => {
      if (onAction) {
        onAction(itemId, e.target as HTMLElement);
      }
    }}
    {...props}
  >
    <Image pageTransitionTag={pageTransitionTag} src={src} />
  </ItemStyled>
);
