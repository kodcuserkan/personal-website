import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { AILabSection } from './components/AILabSection';
import { WorkSection } from './components/WorkSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen text-white">
        <BackgroundEffects />
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ExpertiseSection />
            <AILabSection />
            <WorkSection />
            <ExperienceSection />
            <PrinciplesSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;