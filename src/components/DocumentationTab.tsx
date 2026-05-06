import React, { useState } from 'react';
import { Code, Image, Sparkles, Cpu, Layers, HardDrive } from 'lucide-react';
import { audioSynth } from '../utils/audio';

export const DocumentationTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'prompts' | 'structure' | 'devops'>('prompts');

  return (
    <section id="guide" className="py-24 bg-[#1C2541] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FFD166] uppercase">Creative Director Kit</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white uppercase tracking-tight">
            AI GENERATION & <span className="text-[#5BC0BE] text-glow-cyan">PRODUCTION GUIDE</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Complete resource package including technical blueprint code architectures, production guidelines, and prompt engines.
          </p>
          <div className="w-16 h-1 bg-[#FFD166] mx-auto mt-3 rounded-full" />
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
          <button
            onClick={() => { audioSynth.playClickSound(); setActiveSubTab('prompts'); }}
            className={`px-4 py-2 text-xs font-mono rounded font-bold uppercase transition-all flex items-center space-x-2 cursor-pointer ${activeSubTab === 'prompts' ? 'bg-[#FFD166] text-[#0B132B] shadow-md' : 'bg-[#0B132B]/60 text-slate-400 hover:text-white'}`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>AI Midjourney Prompts</span>
          </button>

          <button
            onClick={() => { audioSynth.playClickSound(); setActiveSubTab('structure'); }}
            className={`px-4 py-2 text-xs font-mono rounded font-bold uppercase transition-all flex items-center space-x-2 cursor-pointer ${activeSubTab === 'structure' ? 'bg-[#FFD166] text-[#0B132B] shadow-md' : 'bg-[#0B132B]/60 text-slate-400 hover:text-white'}`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Folder Structure</span>
          </button>

          <button
            onClick={() => { audioSynth.playClickSound(); setActiveSubTab('devops'); }}
            className={`px-4 py-2 text-xs font-mono rounded font-bold uppercase transition-all flex items-center space-x-2 cursor-pointer ${activeSubTab === 'devops' ? 'bg-[#FFD166] text-[#0B132B] shadow-md' : 'bg-[#0B132B]/60 text-slate-400 hover:text-white'}`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Deployment & Perf Tips</span>
          </button>
        </div>

        {/* Tab content readout */}
        <div className="bg-[#0B132B] rounded-xl border border-slate-800 p-6 sm:p-8 shadow-2xl">
          
          {activeSubTab === 'prompts' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center space-x-2 text-[#FFD166]">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <h3 className="font-serif text-lg font-bold text-white uppercase">Midjourney & DALL-E 3 Prompts for Premium Assets</h3>
              </div>
              <p className="text-xs text-slate-400">Copy these exact stylized prompt engines into AI tools to build high-end assets for your local production folder structure:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-[#1C2541]/50 p-4 rounded border border-slate-800 space-y-2">
                  <span className="text-[#E63946] font-bold">1. HERO BACKGROUND ARTWORK:</span>
                  <p className="text-slate-300 italic bg-slate-950 p-2.5 rounded text-[11px] leading-relaxed">
                    "Cinematic 2D anime illustration, high seas grand line background, towering dark neon blue tidal waves, golden sunset sunbeams piercing through epic stylized clouds, one piece visual style, fine line detail, ukiyo-e vector blend, 8k resolution, cinematic lighting, wallpaper --ar 16:9"
                  </p>
                </div>

                <div className="bg-[#1C2541]/50 p-4 rounded border border-slate-800 space-y-2">
                  <span className="text-[#FFD166] font-bold">2. THOUSAND SUNNY FLAGSHIP:</span>
                  <p className="text-slate-300 italic bg-slate-950 p-2.5 rounded text-[11px] leading-relaxed">
                    "A grand pirate ship with a cheerful lion figurehead floating proudly on deep turquoise blue waves, golden accents, straw hat flag fluttering in the wind, clean transparent PNG background, high quality 2D anime cell style shading, cinematic look --v 6.0"
                  </p>
                </div>

                <div className="bg-[#1C2541]/50 p-4 rounded border border-slate-800 space-y-2">
                  <span className="text-[#5BC0BE] font-bold">3. DEVIL FRUITS ARTIFACTS:</span>
                  <p className="text-slate-300 italic bg-slate-950 p-2.5 rounded text-[11px] leading-relaxed">
                    "Mystical glowing purple fruit with beautiful spiral swirls, emitting intense solar fire flares, dark background background, fantasy anime artifact asset, premium card presentation, Unreal Engine 5 render feel, high detail glowing border style"
                  </p>
                </div>

                <div className="bg-[#1C2541]/50 p-4 rounded border border-slate-800 space-y-2">
                  <span className="text-purple-400 font-bold">4. VILLAIN DOSSIER SMOKE LAYER:</span>
                  <p className="text-slate-300 italic bg-slate-950 p-2.5 rounded text-[11px] leading-relaxed">
                    "Dark abstract anime background, red magma heat fissures, floating cinder ash particles, dark smoke overlay texture, menacing pirate emperor tone, abstract game UI assets vignette --ar 4:3"
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'structure' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center space-x-2 text-[#5BC0BE]">
                <Code className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-white uppercase">Production Directory Layout Blueprint</h3>
              </div>
              <p className="text-xs text-slate-400 font-sans">The application architecture uses a scalable layout to keep code modular and clean:</p>
              
              <pre className="bg-slate-950 text-slate-300 p-4 rounded text-xs overflow-x-auto font-mono leading-relaxed">
{`my-onepiece-experience/
├── public/
│   ├── favicon.ico
│   └── audio/               # Fallback mp3 ambient loops if needed
├── src/
│   ├── components/          # Reusable High-Performance UI blocks
│   │   ├── CustomCursor.tsx # Crosshair dynamic tracker
│   │   ├── Navbar.tsx       # Glassmorphism header & sound dashboard
│   │   ├── LoadingScreen.tsx# Dynamic percentage log pose preloader
│   │   ├── HeroSection.tsx  # Parallax presentation canvas
│   │   ├── StorySection.tsx # Timeline lore engine
│   │   ├── CrewSection.tsx  # Wanted poster data layout
│   │   ├── DevilFruitsSection.tsx
│   │   ├── WorldMapSection.tsx # Log pose waypoint tracking ship
│   │   ├── VillainsSection.tsx # Level 6 threat dossier
│   │   ├── Footer.tsx       # Anchor final layout
│   │   └── DocumentationTab.tsx
│   ├── utils/
│   │   ├── audio.ts         # Live audio synthesizer matrix
│   │   └── cn.ts            # Tailwinds classes merger
│   ├── index.css            # Custom text shadows & cloud drift keyframes
│   ├── main.tsx             # React DOM injection point
│   └── App.tsx              # Master Section Router orchestration`}
              </pre>
            </div>
          )}

          {activeSubTab === 'devops' && (
            <div className="space-y-6 animate-fadeIn font-sans text-xs">
              <div className="flex items-center space-x-2 text-rose-400">
                <HardDrive className="w-5 h-5" />
                <h3 className="font-serif text-lg font-bold text-white uppercase font-mono">Deployment Matrix & Optimization Tips</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 bg-[#1C2541]/40 p-4 rounded border border-slate-800">
                  <h4 className="font-mono font-bold text-[#FFD166] uppercase">🚀 Deployment Commands:</h4>
                  <ul className="space-y-2 font-mono text-slate-300 text-[11px]">
                    <li><strong className="text-white">1. Install Dependencies:</strong> <br /><code className="bg-slate-950 px-1 py-0.5 rounded text-rose-400">npm install</code></li>
                    <li><strong className="text-white">2. Launch Local Dev Fleet:</strong> <br /><code className="bg-slate-950 px-1 py-0.5 rounded text-rose-400">npm run dev</code></li>
                    <li><strong className="text-white">3. Build Production Ship:</strong> <br /><code className="bg-slate-950 px-1 py-0.5 rounded text-rose-400">npm run build</code></li>
                    <li><strong className="text-white">4. Hosting Platforms:</strong> Upload the compiled <code className="text-slate-400">dist/</code> static directory folder instantly to Vercel, Netlify, or GitHub Pages.</li>
                  </ul>
                </div>

                <div className="space-y-3 bg-[#1C2541]/40 p-4 rounded border border-slate-800">
                  <h4 className="font-mono font-bold text-[#5BC0BE] uppercase">⚙️ Optimization Tips:</h4>
                  <ul className="space-y-1.5 text-slate-300 text-[11px]">
                    <li>• <strong className="text-white">Hardware Acceleration:</strong> Use CSS <code className="font-mono text-amber-400">will-change: transform</code> on large cloud graphics to move processing entirely to the GPU.</li>
                    <li>• <strong className="text-white">Web Audio Context:</strong> Prevents audio blocking policies by suspending sound until the user explicitly triggers the "Set Sail" preloader or navbar audio icons.</li>
                    <li>• <strong className="text-white">Responsive Multi-column Layouts:</strong> Implements defensive layout grids that fall back to clean 1-column tall formats on small touch screens automatically.</li>
                    <li>• <strong className="text-white">Component Lazy Rendering:</strong> Keeps bundle size ultra-lean by avoiding massive inline binary strings or uncompressed web view attachments.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
