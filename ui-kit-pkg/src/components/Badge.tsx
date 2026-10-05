import type { ReactNode } from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "destructive";

export interface BadgeProps {
  variant?: BadgeVariant;
  /** Fully rounded pill (default) vs. slightly rounded chip. */
  pill?: boolean;
  /** Optional leading icon element. */
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

const VARIANTS: Record<BadgeVariant, string> = {
  primary: "bg-primary/20 text-primary border border-primary/30",
  secondary:
    "bg-secondary text-secondary-foreground border border-secondary-foreground/20",
  muted: "bg-muted text-muted-foreground border border-transparent",
  accent: "bg-accent/30 text-accent-foreground border border-accent/40",
  destructive:
    "bg-destructive/15 text-destructive border border-destructive/30",
};

/** Generic pill / chip used for tags, labels and status markers. */
export default function Badge({
  variant = "muted",
  pill = true,
  icon,
  className = "",
  children,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-wider px-2 py-0.5 whitespace-nowrap ${
        pill ? "rounded-full" : "rounded"
      } ${VARIANTS[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
