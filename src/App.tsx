import { Header } from "@eladhollander/ui-kit";
import HeroSection from "./components/HeroSection";
import CurriculumSection from "./components/CurriculumSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header
        logoSrc="/images/seanovation-logo.png"
        logoAlt="SeaNovation"
        title="יוזמים סטארטאפ"
        sticky
        blur
      />
      <main>
        <HeroSection />
        <CurriculumSection />
      </main>
    </div>
  );
}
