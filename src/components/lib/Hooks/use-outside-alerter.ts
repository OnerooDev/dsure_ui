import { RefObject, useEffect } from "react";

export const useOutsideAlerter = (
  ref: RefObject<Element>,
  onClose: () => void,
): void => {
  useEffect(() => {
    const handleClick = (event: Event): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};
