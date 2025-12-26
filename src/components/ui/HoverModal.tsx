"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface HoverTooltipModalProps {
  tooltip: ReactNode;
  children: ReactNode;
  offset?: number;
  size?: number;
}

export function HoverModal({
  tooltip,
  children,
  offset = 8, 
  size = 8,
}: HoverTooltipModalProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!open || !triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    setPos({
      top: rect.bottom + offset, 
      left: size + rect.left + rect.width / 2,
    });
  }, [open, offset]);

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-flex"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>

      {open &&
        createPortal(
          <div
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translateX(-50%)",
            }}
            className="bg-[#0f0f0f] fixed z-[9999] rounded-lg  p-2 shadow-xl pointer-events-none
                       animate-in fade-in zoom-in duration-150"
          >
            {tooltip}
          </div>,
          document.body
        )}
    </>
  );
}