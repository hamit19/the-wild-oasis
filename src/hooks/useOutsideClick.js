import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenedCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, listenedCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenedCapturing);
  }, [handler, listenedCapturing]);

  return {
    ref,
  };
}

export default useOutsideClick;
