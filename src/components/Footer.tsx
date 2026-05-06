import React, { useState } from 'react';
import { Heart, ArrowUp, X } from 'lucide-react';
import { audioSynth } from '../utils/audio';

export const Footer: React.FC = () => {
  const [showImage, setShowImage] = useState(false);

  const scrollToTop = () => {
    audioSynth.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-400 py-12 border-t border-slate-900 relative overflow-hidden">
      
      {/* Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD166]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-center md:text-left">

        {/* Left Side */}
        <div className="space-y-3">
          
          {/* Title */}
          <div className="flex items-center justify-center md:justify-start space-x-2 text-white font-serif font-bold tracking-wider">
            <span>
              THE KING OF NEW AI ERA - THE PIRATE KING MONKEY D KISHORE 2026
            </span>
          </div>

          {/* NEW BUTTON */}
          <button
            onClick={() => {
              audioSynth.playClickSound();
              setShowImage(true);
            }}
            className="px-5 py-2 bg-[#E63946] hover:bg-[#ff4d5d] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-lg hover:scale-105"
          >
            View Pirate King
          </button>

          {/* Quote */}
          <p className="text-xs text-slate-500 max-w-sm font-sans">
            "Inherited Will, The Destiny of Age, and The Dreams of
            People... As long as people continue to pursue the meaning of
            Freedom, these things will never cease to exist!"
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
          <a href="#lore" className="hover:text-[#FFD166] transition-colors">
            THE LORE
          </a>

          <span className="text-slate-800">•</span>

          <a
            href="#strawhats"
            className="hover:text-[#E63946] transition-colors"
          >
            WANTED RANGERS
          </a>

          <span className="text-slate-800">•</span>

          <a
            href="#fruits"
            className="hover:text-[#5BC0BE] transition-colors"
          >
            DEVIL DIARY
          </a>

          <span className="text-slate-800">•</span>

          <a
            href="#worldmap"
            className="hover:text-[#FFD166] transition-colors"
          >
            LOG POSE
          </a>
        </div>

        {/* Right Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#1C2541] hover:bg-[#E63946] hover:text-white border border-slate-800 rounded-full transition-all duration-300 group cursor-pointer shadow-lg"
            title="Return to Crow's Nest"
          >
            <ArrowUp className="w-4 h-4 text-[#FFD166] group-hover:text-white transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900/50 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] font-mono text-slate-600">
        <p>© 2026 Grand Line Adventures Inc.</p>

        <p className="flex items-center">
          Made for true dreamers who seek freedom across the Grand Line
          <Heart className="w-2.5 h-2.5 text-[#E63946] mx-1 fill-current" />
        </p>
      </div>

      {/* IMAGE POPUP */}
      {showImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setShowImage(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowImage(false)}
            className="absolute top-6 right-6 text-white bg-red-600 hover:bg-red-700 rounded-full p-2 z-50"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image */}
          <img
            src="public\pirateking.png"
            alt="Pirate King"
            className="max-w-[95%] md:max-w-5xl rounded-xl shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </footer>
  );
};