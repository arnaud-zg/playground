import { css, Global } from "@emotion/react";
import React, { useState } from "react";
import { Alert } from "../../../components/Alert";
import { usePageTransition } from "../usePageTransition";
import { Container } from "./Container";
import { Item } from "./Item";
import { ItemContainer } from "./ItemContainer";
import { ItemList, ITEM_LIST } from "./ItemList";

export const PageTransitionStatus = () => {
  const { isEnabled } = usePageTransition();

  return (
    <>
      {isEnabled ? (
        <Alert kind="positive">Page-Transition API: Enabled</Alert>
      ) : (
        <Alert kind="negative">Page-Transition API: Disabled</Alert>
      )}
    </>
  );
};

export const NoPageTransition = () => {
  const [itemId, setItemId] = useState<number>();
  const onAction = (nextItemId: number) => {
    setItemId(nextItemId);
  };
  const onReset = () => {
    setItemId(undefined);
  };
  const selectedItem = ITEM_LIST.find(({ id }) => id === itemId);

  return (
    <Container>
      {!selectedItem && (
        <ItemContainer>
          <ItemList onAction={onAction} />
        </ItemContainer>
      )}
      {itemId && selectedItem && (
        <ItemContainer>
          <Item
            itemId={itemId}
            onAction={onReset}
            scale="big"
            src={selectedItem.src}
          />
        </ItemContainer>
      )}
    </Container>
  );
};

export const PageTransitionFadeInFadeOut = () => {
  const [itemId, setItemId] = useState<number>();
  const { startTransition } = usePageTransition();
  const onAction = (nextItemId: number) => {
    startTransition({
      updateDOM: () => {
        setItemId(nextItemId);
      },
    });
  };
  const onReset = () => {
    startTransition({
      updateDOM: () => {
        setItemId(undefined);
      },
    });
  };
  const selectedItem = ITEM_LIST.find(({ id }) => id === itemId);

  return (
    <Container>
      {!selectedItem && (
        <ItemContainer>
          <ItemList onAction={onAction} />
        </ItemContainer>
      )}
      {itemId && selectedItem && (
        <ItemContainer>
          <Item
            itemId={itemId}
            onAction={onReset}
            scale="big"
            src={selectedItem.src}
          />
        </ItemContainer>
      )}
    </Container>
  );
};

export const PageTransitionTranslate = () => {
  const [itemId, setItemId] = useState<number>();
  const { startTransition } = usePageTransition();
  const onAction = (nextItemId: number) => {
    startTransition({
      updateDOM: () => {
        setItemId(nextItemId);
      },
    });
  };
  const onReset = () => {
    startTransition({
      updateDOM: () => {
        setItemId(undefined);
      },
    });
  };
  const pageId = "page-transition-translate";
  const isItemSelected = itemId !== undefined;
  const selectedItem = ITEM_LIST.find(({ id }) => id === itemId);

  return (
    <>
      <Global
        styles={css`
          @keyframes slide-to-top {
            to {
              opacity: 0;
              transform: translateY(-100%);
            }
          }

          ::page-transition-image-wrapper(${pageId}) {
            overflow: hidden;
          }

          ::page-transition-outgoing-image(${pageId}) {
            animation: 600ms ease-out both slide-to-top;
          }

          ::page-transition-incoming-image(${pageId}) {
            animation: none;
          }
        `}
      />
      <Container>
        {!isItemSelected && (
          <ItemContainer pageTransitionTag={pageId}>
            <ItemList onAction={onAction} />
          </ItemContainer>
        )}
        {isItemSelected && (
          <ItemContainer pageTransitionTag={pageId}>
            <Item
              itemId={itemId}
              onAction={onReset}
              scale="big"
              src={selectedItem!.src}
            />
          </ItemContainer>
        )}
      </Container>
    </>
  );
};

export const PageTransitionCSS = () => {
  const [itemId, setItemId] = useState<number>();
  const { startTransition } = usePageTransition();
  const onAction = (nextItemId: number) => {
    startTransition({
      updateDOM: () => {
        setItemId(nextItemId);
      },
    });
  };
  const onReset = () => {
    startTransition({
      updateDOM: () => {
        setItemId(undefined);
      },
    });
  };
  const pageId = "page-transition-css";
  const isItemSelected = itemId !== undefined;
  const selectedItem = ITEM_LIST.find(({ id }) => id === itemId);

  return (
    <Container>
      {!isItemSelected && (
        <ItemContainer>
          <ItemList
            onAction={onAction}
            getPageTransitionTag={({ itemId }) => `${pageId}-item-${itemId}`}
          />
        </ItemContainer>
      )}
      {isItemSelected && (
        <ItemContainer>
          <Item
            itemId={itemId}
            onAction={onReset}
            scale="big"
            pageTransitionTag={`${pageId}-item-${itemId}`}
            src={selectedItem!.src}
          />
        </ItemContainer>
      )}
    </Container>
  );
};

export const PageTransitionDOM = () => {
  const [itemId, setItemId] = useState<number>();
  const { startTransition } = usePageTransition();
  const pageId = "page-transition-dom";
  const onAction = (nextItemId: number, sourceElement: HTMLElement) => {
    startTransition({
      updateDOM: () => {
        setItemId(nextItemId);
      },
      transitionTag: {
        pageTransitionTag: `${pageId}-item-${nextItemId}`,
        sourceElement,
      },
    });
  };
  const onReset = () => {
    startTransition({
      updateDOM: () => {
        setItemId(undefined);
      },
    });
  };
  const isItemSelected = itemId !== undefined;
  const selectedItem = ITEM_LIST.find(({ id }) => id === itemId);

  console.log(`${pageId}-item-${itemId}`)

  return (
    <Container>
      {!selectedItem && (
        <ItemContainer>
          <ItemList onAction={onAction} />
        </ItemContainer>
      )}
      {isItemSelected && (
        <ItemContainer>
          <Item
            itemId={itemId}
            onAction={onReset}
            pageTransitionTag={`${pageId}-item-${itemId}`}
            scale="big"
            src={selectedItem!.src}
          />
        </ItemContainer>
      )}
    </Container>
  );
};
