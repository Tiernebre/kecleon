import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  onClickOutside: () => void
): void => {
  useEffect(() => {
    document.addEventListener("click", (event) => {
      const elementClickedOn = event.target as Element | null;
      const elementToCheck = ref.current;
      if (
        elementClickedOn &&
        elementToCheck &&
        !elementToCheck.contains(elementClickedOn)
      ) {
        onClickOutside();
      }
    });
  }, [ref, onClickOutside]);
};
