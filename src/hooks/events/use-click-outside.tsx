import { RefObject, useEffect } from "react";

const checkIfClickOutsideOccurredForElement =
  (element: HTMLElement | null, callback: () => void) =>
  (event: MouseEvent) => {
    const elementClickedOn = event.target as Element | null;
    if (element && elementClickedOn && !element.contains(elementClickedOn)) {
      callback();
    }
  };

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickOutside: () => void
): void => {
  useEffect(() => {
    const callback = checkIfClickOutsideOccurredForElement(
      ref.current,
      onClickOutside
    );
    document.addEventListener("click", callback);

    return () => {
      document.removeEventListener("click", callback);
    };
  }, [ref, onClickOutside]);
};
