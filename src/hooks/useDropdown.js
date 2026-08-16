import { useEffect, useRef, useState } from "react";

function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    function handlePointerDown(event) {
      const clickedOutside =
        containerRef.current && !containerRef.current.contains(event.target);

      if (clickedOutside) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  function toggle() {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  }
  function close() {
    setIsOpen(false);
  }

  return {
    isOpen,
    toggle,
    close,
    containerRef,
    triggerRef,
  };
}

export default useDropdown;
