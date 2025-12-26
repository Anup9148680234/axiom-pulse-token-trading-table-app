"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Side = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: Side;
  offset?: number;
}

export function Tooltipp({
  content,
  children,
  side = "top",
  offset = 6,
}: TooltipProps) {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!open || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    const positions = {
      top: {
        top: rect.top - offset,
        left: rect.left + rect.width / 2,
      },
      bottom: {
        top: rect.bottom + offset,
        left: rect.left + rect.width / 2,
      },
      left: {
        top: rect.top + rect.height / 2,
        left: rect.left - offset,
      },
      right: {
        top: rect.top + rect.height / 2,
        left: rect.right + offset,
      },
    };

    setCoords(positions[side]);
  }, [open, side, offset]);

  return (
    <>
      <span
        ref={triggerRef}
        className="inline-flex"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </span>

      {open &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              transform:
                side === "top"
                  ? "translate(-50%, -100%)"
                  : side === "bottom"
                  ? "translate(-50%, 0)"
                  : side === "left"
                  ? "translate(-100%, -50%)"
                  : "translate(0, -50%)",
            }}
            className="z-9999 whitespace-nowrap rounded-md bg-[#22242d] px-2 py-1 text-xs text-neutral-400 shadow-lg pointer-events-none"
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
}
