import type { ReactNode } from "react";
import Badge from "./Badge";

/**
 * One row of a cohort curriculum / schedule table.
 *
 * Only `num`, `date`, `daytime` and `topic` are required — a cohort whose
 * curriculum breakdown isn't published yet simply omits `location`, `detail`
 * and `tags`, and those columns disappear from the table automatically.
 */
export interface CurriculumSession {
  num: string;
  date: string;
  /** e.g. "יום רביעי · 17:00-21:00" */
  daytime: string;
  topic: string;
  /** Optional longer description. */
  detail?: string;
  /** Optional keyword chips. */
  tags?: string[];
  /** Optional location key — rendered via `renderLocation`. */
  location?: string;
  /** Highlight the row (e.g. session falls on an unusual weekday). */
  different?: boolean;
  /** Badge shown on a highlighted row. */
  differentLabel?: ReactNode;
}

export interface CurriculumTableProps {
  sessions: CurriculumSession[];
  /** Column headers, right-to-left order. */
  labels?: {
    num?: string;
    date?: string;
    location?: string;
    topic?: string;
    detail?: string;
  };
  /** Renders the location cell. Required only if sessions carry `location`. */
  renderLocation?: (location: string) => ReactNode;
}

const DEFAULT_LABELS = {
  num: "#",
  date: "תאריך",
  location: "מיקום",
  topic: "נושא",
  detail: "פירוט",
};

function Tag({ children }: { children: string }) {
  return (
    <Badge variant="muted" pill={false} className="font-medium">
      {children}
    </Badge>
  );
}

function NumBubble({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 text-primary font-bold text-xs">
      {children}
    </span>
  );
}

/**
 * Responsive RTL schedule table: a real <table> on desktop, stacked cards on
 * mobile. Shared by every cohort site in this monorepo.
 */
export default function CurriculumTable({
  sessions,
  labels,
  renderLocation,
}: CurriculumTableProps) {
  const L = { ...DEFAULT_LABELS, ...labels };

  // columns are only rendered when at least one session actually supplies them
  const hasLocation = Boolean(renderLocation) && sessions.some((s) => s.location);
  const hasDetail = sessions.some((s) => s.detail || (s.tags && s.tags.length > 0));

  return (
    <div className="rounded-2xl border border-border/50 overflow-hidden">
      {/* desktop */}
      <div className="hidden md:block">
        <table className="w-full text-sm" dir="rtl">
          <thead>
            <tr className="border-b border-border/40 text-muted-foreground text-xs bg-muted/30">
              <th className="py-3 px-4 text-right font-semibold w-12">{L.num}</th>
              <th className="py-3 px-4 text-right font-semibold w-44">{L.date}</th>
              {hasLocation && (
                <th className="py-3 px-4 text-right font-semibold w-28">{L.location}</th>
              )}
              <th className="py-3 px-4 text-right font-semibold">{L.topic}</th>
              {hasDetail && (
                <th className="py-3 px-4 text-right font-semibold">{L.detail}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {sessions.map((s, i) => {
              const zebra = i % 2 === 1 ? "bg-muted/10" : "";
              const highlight = s.different
                ? "bg-destructive/[0.04] ring-1 ring-inset ring-destructive/20"
                : zebra;
              return (
                <tr
                  key={s.num}
                  className={`border-b border-border/30 last:border-b-0 transition-colors hover:bg-muted/20 ${highlight}`}
                >
                  <td className="py-4 px-4 text-center">
                    <NumBubble>{s.num}</NumBubble>
                  </td>
                  <td className="py-4 px-4 text-foreground/80 text-sm whitespace-nowrap">
                    <div className={s.different ? "font-bold text-destructive" : ""}>
                      {s.date}
                    </div>
                    <div
                      className={`text-xs mt-0.5 ${
                        s.different
                          ? "font-bold text-destructive"
                          : "text-muted-foreground"
                      }`}
                    >
                      {s.daytime}
                    </div>
                    {s.different && s.differentLabel && (
                      <div className="mt-1">{s.differentLabel}</div>
                    )}
                  </td>
                  {hasLocation && (
                    <td className="py-4 px-4">
                      {s.location && renderLocation?.(s.location)}
                    </td>
                  )}
                  <td className="py-4 px-4 text-foreground font-medium leading-relaxed">
                    {s.topic}
                  </td>
                  {hasDetail && (
                    <td className="py-4 px-4 text-muted-foreground leading-relaxed">
                      {s.detail && <div>{s.detail}</div>}
                      {s.tags && s.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {s.tags.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        {sessions.map((s) => (
          <div
            key={s.num}
            className={`p-4 border-b border-border/30 last:border-b-0 ${
              s.different
                ? "bg-destructive/[0.04] ring-1 ring-inset ring-destructive/20"
                : ""
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <NumBubble>{s.num}</NumBubble>
              {hasLocation && s.location && renderLocation?.(s.location)}
            </div>
            <div className="text-sm text-foreground/80 mb-1">
              <span className={s.different ? "font-bold text-destructive" : ""}>
                {s.date}
              </span>
              {" · "}
              <span
                className={
                  s.different ? "font-bold text-destructive" : "text-muted-foreground"
                }
              >
                {s.daytime}
              </span>
            </div>
            {s.different && s.differentLabel && (
              <div className="mb-2">{s.differentLabel}</div>
            )}
            <div className="font-medium text-foreground mb-1">{s.topic}</div>
            {s.detail && (
              <div className="text-sm text-muted-foreground leading-relaxed">
                {s.detail}
              </div>
            )}
            {s.tags && s.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
