import React, { FC } from "react";
import { Item, OnAction } from "./Item";

export const ITEM_LIST = [
  { id: 1, src: "public/media/city-1.jpeg" },
  { id: 2, src: "public/media/city-2.jpeg" },
  { id: 3, src: "public/media/city-3.jpeg" },
  { id: 4, src: "public/media/city-4.jpeg" },
  { id: 5, src: "public/media/city-5.jpeg" },
  { id: 6, src: "public/media/city-6.jpeg" },
  { id: 7, src: "public/media/city-7.jpeg" },
  { id: 8, src: "public/media/city-8.jpeg" },
  { id: 9, src: "public/media/city-9.jpeg" },
  { id: 10, src: "public/media/city-10.jpeg" },
  { id: 11, src: "public/media/city-11.jpeg" },
  { id: 12, src: "public/media/city-12.jpeg" },
  { id: 13, src: "public/media/city-13.jpeg" },
  { id: 14, src: "public/media/city-14.jpeg" },
  { id: 15, src: "public/media/city-15.jpeg" },
  { id: 16, src: "public/media/city-16.jpeg" },
];

type ItemListProps = {
  onAction: OnAction;
  getPageTransitionTag?: (props: { itemId: number }) => string;
};

export const ItemList: FC<ItemListProps> = ({
  onAction,
  getPageTransitionTag,
}) => (
  <>
    {ITEM_LIST.map(({ id: itemId, src: filePath }) => (
      <Item
        src={filePath}
        itemId={itemId}
        key={itemId}
        onAction={onAction}
        scale="normal"
        {...(getPageTransitionTag
          ? { pageTransitionTag: getPageTransitionTag({ itemId }) }
          : {})}
      />
    ))}
  </>
);
