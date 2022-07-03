export {};

declare global {
  interface Document {
    createDocumentTransition?: CreateDocumentTransition;
  }

  interface HTMLElement {
    style: CSSStyleDeclaration & {
      pageTransitionTag: string
    }
  }
}

type CreateDocumentTransition = () => {
  start: (callback: VoidFunction) => Promise<void>;
};
