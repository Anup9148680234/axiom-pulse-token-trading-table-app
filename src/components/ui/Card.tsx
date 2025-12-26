import * as React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

function withDivRef(
  displayName: string,
  baseClass: string,
  Tag: "div" | "p" | "h3" = "div"
) {
  const Comp = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => {
      const Element = Tag as any;
      return (
        <Element
          ref={ref}
          className={cn(baseClass, className)}
          {...(props as any)}
        />
      );
    }
  );

  Comp.displayName = displayName;
  return Comp;
}

const Card = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = withDivRef("CardHeader", "flex flex-col space-y-1.5 p-6");
const CardContent = withDivRef("CardContent", "p-6 pt-0");
const CardFooter = withDivRef("CardFooter", "flex items-center p-6 pt-0");

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
