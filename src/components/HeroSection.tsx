/**
 * yozmim112026 hero (November 2026 cohort). Edit the copy directly here.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block border border-primary/30 rounded-full px-4 py-1 text-sm text-primary mb-6 bg-primary/5">
          מחזור נובמבר 2026 · 12 מפגשים · יום רביעי
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="text-foreground">SeaNovation</span>
          <br />
          <span className="text-primary">יוזמים סטארטאפ</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          תוכנית אינטנסיבית שמלווה אתכם מהרעיון הראשון ועד פיץ׳ מוכן
          למשקיעים - עם מתודולוגיה מוכחת, מנטורינג אישי וקהילה של יזמים
          שעוברים איתכם את כל הדרך.
        </p>
        <p className="mt-6 text-base text-muted-foreground max-w-2xl mx-auto">
          12 מפגשים · 17:00-21:00 · אילת
        </p>
      </div>
    </section>
  );
}
