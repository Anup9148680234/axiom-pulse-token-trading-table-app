"use client";

import * as React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof ScrollArea.Root>;

type ScrollAreaRailProps = React.ComponentPropsWithoutRef<
  typeof ScrollArea.Scrollbar
> & {
  thickness?: "sm" | "md";
};

const railBase =
  "flex touch-none select-none transition-colors data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full";

const railByOrientation = {
  vertical: "w-2.5 border-l border-l-transparent p-px",
  horizontal: "h-2.5 flex-col border-t border-t-transparent p-px",
} as const;

const railByThickness = {
  sm: "data-[orientation=vertical]:w-2 data-[orientation=horizontal]:h-2",
  md: "",
} as const;

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof ScrollArea.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollArea.Viewport>
>(({ className, ...props }, ref) => (
  <ScrollArea.Viewport
    ref={ref}
    className={cn("h-full w-full rounded-[inherit]", className)}
    {...props}
  />
));
ScrollAreaViewport.displayName = "ScrollAreaViewport";

const ScrollAreaRail = React.forwardRef<
  React.ElementRef<typeof ScrollArea.Scrollbar>,
  ScrollAreaRailProps
>(({ className, orientation = "vertical", thickness = "md", ...props }, ref) => (
  <ScrollArea.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      railBase,
      railByOrientation[orientation],
      railByThickness[thickness],
      className
    )}
    {...props}
  >
    <ScrollArea.Thumb className="relative flex-1 rounded-full bg-border" />
  </ScrollArea.Scrollbar>
));
ScrollAreaRail.displayName = "ScrollAreaRail";

function ScrollAreaRoot(
  { className, children, ...props }: ScrollAreaProps,
  ref: React.ForwardedRef<React.ElementRef<typeof ScrollArea.Root>>
) {
  return (
    <ScrollArea.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaViewport>{children}</ScrollAreaViewport>

      <ScrollAreaRail orientation="vertical" />
      <ScrollAreaRail orientation="horizontal" />

      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}

const ScrollAreaShell = React.forwardRef<
  React.ElementRef<typeof ScrollArea.Root>,
  ScrollAreaProps
>(ScrollAreaRoot);

ScrollAreaShell.displayName = "ScrollAreaShell";

export { ScrollAreaShell as ScrollArea, ScrollAreaRail as ScrollBar };
