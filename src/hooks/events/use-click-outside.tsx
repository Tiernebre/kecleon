import { Ref, useEffect } from "react";

export const useClickOutside = (ref: Ref<HTMLElement>): void => {
  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as Element;
      if (target) {
        console.log(target);
      }
    });
  }, [ref]);
};
