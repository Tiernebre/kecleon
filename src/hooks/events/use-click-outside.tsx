import { Ref, useEffect } from "react";

export const useClickOutside = (ref: Ref<HTMLElement>): null => {
  useEffect(() => {
    document.addEventListener("click", () => {
      console.log("click event woo");
    });
  }, [ref]);

  return null;
};
