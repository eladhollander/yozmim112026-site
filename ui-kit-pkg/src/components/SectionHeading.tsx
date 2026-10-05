export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Tailwind classes for the <h2>. Lets each site keep its own type scale. */
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
}

/** Centered section title + optional subtitle. Used by both sites. */
export default function SectionHeading({
  title,
  subtitle,
  titleClassName = "text-4xl md:text-5xl font-light text-foreground mb-4",
  subtitleClassName = "text-xl text-muted-foreground",
  className = "text-center mb-16",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
}
