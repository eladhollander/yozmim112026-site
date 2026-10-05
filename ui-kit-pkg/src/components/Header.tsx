import type { ReactNode } from "react";

export interface HeaderProps {
  /** Logo image URL. Prefer a self-hosted path like `/images/logo.png`. */
  logoSrc?: string;
  logoAlt?: string;
  /** Text shown next to the logo. */
  title?: string;
  /** Stick to the top of the viewport while scrolling. Default: true. */
  sticky?: boolean;
  /** Translucent background + backdrop blur. Default: true. */
  blur?: boolean;
  /** Optional right-hand side content (nav links, CTA button, ...). */
  children?: ReactNode;
}

/**
 * Generic site header: logo + title, optionally sticky and blurred.
 * Colors come entirely from the consuming site's design tokens.
 */
export default function Header({
  logoSrc,
  logoAlt = "",
  title,
  sticky = true,
  blur = true,
  children,
}: HeaderProps) {
  const position = sticky ? "sticky top-0 z-50" : "relative";
  const surface = blur ? "bg-background/90 backdrop-blur-md" : "bg-background";

  return (
    <header className={`${position} ${surface} border-b border-border/50`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logoSrc && (
            <img src={logoSrc} alt={logoAlt} className="h-10 w-auto rounded-lg" />
          )}
          {title && (
            <span className="hidden sm:inline font-bold text-sm text-primary">
              {title}
            </span>
          )}
        </div>
        {children}
      </div>
    </header>
  );
}
