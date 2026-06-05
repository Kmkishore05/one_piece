import React, { useState, useEffect } from 'react';
import { Anchor, Music, VolumeX, Menu, X } from 'lucide-react';
import { audioSynth } from '../utils/audio';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    audioSynth.playClickSound();
    if (isMuted) {
      audioSynth.startBackgroundMusic();
      setIsMuted(false);
    } else {
      audioSynth.stopBackgroundMusic();
      setIsMuted(true);
    }
  };

  const menuItems = [
    { label: 'The Lore', id: 'lore' },
    { label: 'Straw Hats', id: 'strawhats' },
    { label: 'Devil Fruits', id: 'fruits' },
    { label: 'Grand Line Map', id: 'worldmap' },
    { label: 'Villains', id: 'villains' },
    { label: 'Characters', id: 'Characters' }, 
    
  ];

  const handleLink = (id: string) => {
    audioSynth.playClickSound();
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-3 shadow-lg' : 'bg-gradient-to-b from-[#0B132B]/80 to-transparent py-5'}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#E63946] via-[#FFD166] to-[#5BC0BE] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => handleLink('hero')}
        >
          <div className="relative">
            <Anchor className="w-8 h-8 text-[#FFD166] group-hover:rotate-45 transition-transform duration-500 filter drop-shadow-[0_0_8px_#FFD166]" />
            <div className="absolute inset-0 bg-[#FFD166] blur-md opacity-20 rounded-full group-hover:opacity-40 transition-opacity" />
          </div>
          <span className="font-bold text-lg sm:text-xl tracking-wider text-white uppercase font-serif">
            ONE <span className="text-[#E63946]">PIECE</span> 
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLink(item.id)}
              className="text-sm font-medium text-slate-300 hover:text-[#FFD166] transition-colors duration-200 cursor-pointer relative py-1 group uppercase tracking-wider"
              onMouseEnter={() => audioSynth.playHoverSound()}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E63946] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Music Button */}
          <button
            onClick={toggleMusic}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${!isMuted ? 'bg-[#FFD166]/10 border-[#FFD166] text-[#FFD166] shadow-[0_0_12px_rgba(255,209,102,0.3)]' : 'bg-[#1C2541]/80 border-slate-600 text-slate-400 hover:text-white'}`}
            title={isMuted ? "Play Immersive Sea Music" : "Mute Sound"}
            onMouseEnter={() => audioSynth.playHoverSound()}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Music className="w-5 h-5 animate-pulse" />}
            <span className="hidden lg:inline text-xs font-semibold ml-1.5 pr-1">
              {isMuted ? "SOUND OFF" : "LIVE SOUND"}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => { audioSynth.playClickSound(); setMobileMenuOpen(!mobileMenuOpen); }}
            className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel-dark border-t border-slate-800 shadow-xl py-4 px-6 flex flex-col space-y-4 animate-fadeIn">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLink(item.id)}
              className="text-left py-2 font-medium text-slate-200 hover:text-[#FFD166] border-b border-slate-800/50 uppercase text-sm tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <p className="text-[10px] text-slate-500 text-center pt-2">
            ⚓ Tap the sound icon for live Grand Line ambient synthesis!
          </p>
        </div>
      )}
    </nav>
  );
};
