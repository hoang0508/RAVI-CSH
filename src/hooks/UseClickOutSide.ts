import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef<HTMLDivElement | undefined>(null);
  useEffect(() => {
    const handleClickOutSide = (event: Event) => {
      const target = event.target as HTMLElement;
      if (nodeRef?.current && !nodeRef?.current?.contains(target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
