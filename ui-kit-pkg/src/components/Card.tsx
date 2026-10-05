import type { ReactNode } from "react";

export interface CardProps {
  className?: string;
  /** Lift the shadow on hover. */
  hoverable?: boolean;
  children: ReactNode;
}

/** Generic surface card. Used by both sites. */
export function Card({ className = "", hoverable = false, children }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-card text-card-foreground shadow ${
        hoverable ? "hover:shadow-lg transition-all" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export interface CardContentProps {
  className?: string;
  children: ReactNode;
}

export function CardContent({ className = "p-6", children }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
