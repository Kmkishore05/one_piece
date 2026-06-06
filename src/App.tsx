import { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { CrewSection } from './components/CrewSection';
import { DevilFruitsSection } from './components/DevilFruitsSection';
import { WorldMapSection } from './components/WorldMapSection';
import { VillainsSection } from './components/VillainsSection';

import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (isLoading) {
    return <LoadingScreen onFinished={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#0B132B] text-slate-100 select-none selection:bg-[#FFD166] selection:text-[#0B132B]">
      {/* Premium Physics Dual Ring Cursor */}
      <CustomCursor />

      {/* Control Dashboard Header */}
      <Navbar onNavClick={handleScrollToSection} />

      {/* Main Cinematic Sections Flow */}
      <main className="space-y-0 relative z-10">
        <HeroSection onExploreClick={handleScrollToSection} />
        
        <StorySection />
        
        <CrewSection />
        
        <DevilFruitsSection />
        
        <WorldMapSection />
        
        <VillainsSection />

         {/* <CharacterSection/>  */}
      </main>

      {/* Final Sea Gate Footer */}
      <Footer />
    </div>
  );
}
