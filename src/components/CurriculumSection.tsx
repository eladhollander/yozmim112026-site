import { CurriculumTable, SectionHeading } from "@eladhollander/ui-kit";
import { sessions } from "../data/sessions";

export default function CurriculumSection() {
  return (
    <section className="py-16 px-4" id="curriculum">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="לוח המפגשים - מחזור נובמבר 2026"
          subtitle="12 מפגשים · יום רביעי · 17:00-21:00 · אילת"
          titleClassName="text-3xl md:text-4xl font-extrabold text-foreground mb-3"
          subtitleClassName="text-muted-foreground"
          className="text-center mb-12"
        />
        <CurriculumTable sessions={sessions} labels={{ topic: "מפגש" }} />
      </div>
    </section>
  );
}
