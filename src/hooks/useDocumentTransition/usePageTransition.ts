import { useMemo } from "react";

type UpdateDOM = (() => Promise<void>) | VoidFunction;

type StartTransitionProps = {
  updateDOM: UpdateDOM;
  transitionTag?: {
    pageTransitionTag: string;
    sourceElement: HTMLElement;
  };
};

export const usePageTransition = () => {
  const isEnabled =
    !!document.createDocumentTransition &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches;

  const startTransition = async ({
    updateDOM,
    transitionTag,
  }: StartTransitionProps) => {
    if (!isEnabled) {
      await updateDOM();
      return;
    }

    if (transitionTag) {
      const { sourceElement, pageTransitionTag } = transitionTag;
      sourceElement.style.contain = "paint";
      sourceElement.style.pageTransitionTag = pageTransitionTag;
    }

    const transition = document.createDocumentTransition!();
    await transition.start(() => updateDOM());

    if (transitionTag) {
      const { sourceElement } = transitionTag;
      sourceElement.style.contain = "";
      sourceElement.style.pageTransitionTag = "";
    }
  };

  return useMemo(
    () => ({
      isEnabled,
      startTransition,
    }),
    []
  );
};
