import React, { useState } from 'react';
import { Compass, ShieldCheck, Ship, MapPin } from 'lucide-react';
import { audioSynth } from '../utils/audio';

interface Island {
  name: string;
  type: string;
  climate: string;
  coordinates: string;
  summary: string;
  arcImportance: string;
}

export const WorldMapSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(7); // Default to Wano Country

  const islands: Island[] = [
    {
      name: 'East Blue',
      type: 'Starting Sea Kingdom',
      climate: 'Mild & Predictable',
      coordinates: 'LOG: 001-ALPHA',
      summary: 'The peaceful sea where Monkey D. Luffy grew up, received the straw hat from Shanks, and gathered his founding crew members: Zoro, Nami, Usopp, and Sanji.',
      arcImportance: 'The cradle of global romance and pirate dreams.'
    },
    {
      name: 'Alabasta Kingdom',
      type: 'Desert Island Continent',
      climate: 'Arid & High Heat Storms',
      coordinates: 'LOG: 014-SAND',
      summary: 'An ancient kingdom ruled by the Nefertari family. The Straw Hats defeated Crocodile and Baroque Works, stopped a catastrophic civil war, and said goodbye to Vivi.',
      arcImportance: 'First encounter with a ancient Pluton Poneglyph.'
    },
    {
      name: 'Skypiea',
      type: 'Angel Island of Sky Sea',
      climate: 'Low Gravity White-Clouds',
      coordinates: 'LOG: 029-HEAVEN',
      summary: 'A fabled island floating 10,000 meters above the sea. Luffy defeated God Enel, rang the Golden Bell of Shandora, and proved the city of gold exists in the skies.',
      arcImportance: 'Revealed the golden bell inscription carved by Gol D. Roger.'
    },
    {
      name: 'Water 7',
      type: 'Metropolis of Shipwrights',
      climate: 'Acqua Alta Seasonal Tides',
      coordinates: 'LOG: 042-WATER',
      summary: 'The majestic floating canal city of shipwrights. Home to the Galley-La Company and Tom workers. Here, the crew commissioned the construction of the Thousand Sunny.',
      arcImportance: 'Franky joins the crew after building the ultimate ship.'
    },
    {
      name: 'Enies Lobby',
      type: 'Judicial Stronghold Tower',
      climate: 'Eternal Daylight Void',
      coordinates: 'LOG: 043-JUSTICE',
      summary: 'The World Government’s impregnable courtroom. The crew declared war directly on the World Government flag to rescue Nico Robin from CP9.',
      arcImportance: 'Luffy unveils Gear 2nd & 3rd to break the gates.'
    },
    {
      name: 'Marineford',
      type: 'Navy Headquarters Base',
      climate: 'Sub-zero Polar Glaciers',
      coordinates: 'LOG: 060-FORTRESS',
      summary: 'The stage for the Summit War. Whitebeard and Luffy broke into the fortress to rescue Ace from execution, ending the golden generation of older emperors.',
      arcImportance: 'Luffy learns the lesson of loss and undergoes 2-year training.'
    },
    {
      name: 'Dressrosa',
      type: 'Kingdom of Passion & Toys',
      climate: 'Warm Mediterranean Breeze',
      coordinates: 'LOG: 084-ROSE',
      summary: 'Ruled by the Tyrant Heavenly Yaksha Donquixote Doflamingo. The Straw Hats liberated the transformed toy citizens and formed the 5,600-strong Straw Hat Grand Fleet.',
      arcImportance: 'Gear 4th Boundman form breaks through the birdcage.'
    },
    {
      name: 'Wano Country',
      type: 'Isolated Samurai Fortress',
      climate: 'Extreme Seasonal Barriers',
      coordinates: 'LOG: 105-SHOGUN',
      summary: 'An unaligned country of master samurai oppressed by Kaido and Orochi. Luffy awakened Gear 5th Sun God Nika on the roof of Onigashima, permanently dethroning the Strongest Beast.',
      arcImportance: 'Luffy becomes officially crowned as one of the Four Emperors.'
    },
    {
      name: 'Egghead Island',
      type: 'Future Laboratory Island',
      climate: 'Holographic Cyber-Climate',
      coordinates: 'LOG: 112-FUTURE',
      summary: 'The futuristic high-tech sanctuary of Dr. Vegapunk. The crew uncovers the forbidden power source of the Void Century, igniting a total buster call from the Gorosei.',
      arcImportance: 'The truth of the world sinking is broadcast globally.'
    }
  ];

  const currentIsland = islands[activeIdx];

  return (
    <section id="worldmap" className="py-24 bg-map-texture relative overflow-hidden">
      {/* Decorative ocean coordinate grid text */}
      <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-700 tracking-widest hidden md:block">
        GRID REF: LAT 35.12N / LON 139.65E • GRAND LINE COMPASS SYNC
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-[#FFD166] flex items-center justify-center space-x-1">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '15s' }} />
            <span>Active Log Pose Tracking</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white uppercase">
            THE GRAND LINE <span className="text-[#5BC0BE] text-glow-cyan">WORLD ROUTE</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Navigate the historical milestones of the Straw Hat adventure. Click any island waypoint node to navigate the ship.
          </p>
        </div>

        {/* Interactive Voyage Progress Pipeline */}
        <div className="bg-[#1C2541]/50 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8">
          
          {/* Animated Node Pathway */}
          <div className="relative pt-6 pb-6 overflow-x-auto scrollbar-none">
            {/* The Connecting Sea Route Line */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-[#E63946] via-[#FFD166] to-[#5BC0BE] -translate-y-1/2 rounded z-0" />

            <div className="flex justify-between items-center min-w-[900px] px-4 relative z-10">
              {islands.map((island, index) => {
                const isActive = index === activeIdx;
                return (
                  <button
                    key={island.name}
                    onClick={() => { audioSynth.playClickSound(); setActiveIdx(index); }}
                    className="flex flex-col items-center group relative cursor-pointer focus:outline-none"
                  >
                    {/* Floating Ship indicator on top of active item */}
                    {isActive && (
                      <div className="absolute -top-10 text-[#FFD166] animate-bounce flex flex-col items-center">
                        <Ship className="w-6 h-6 fill-[#FFD166]" />
                        <span className="text-[8px] font-mono tracking-tighter uppercase font-bold bg-[#E63946] text-white px-1 rounded">Sunny</span>
                      </div>
                    )}

                    {/* Node Circle */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs border transition-all duration-300 ${isActive ? 'bg-[#FFD166] border-white text-[#0B132B] scale-125 shadow-[0_0_15px_#FFD166]' : 'bg-[#0B132B] border-slate-700 text-slate-400 hover:border-[#FFD166] hover:text-white'}`}>
                      {index + 1}
                    </div>

                    {/* Island Short Label */}
                    <span className={`text-[11px] font-mono mt-3 font-semibold tracking-tight transition-colors whitespace-nowrap ${isActive ? 'text-[#FFD166] font-bold underline decoration-wavy' : 'text-slate-400 group-hover:text-white'}`}>
                      {island.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Island Log readout pane */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0B132B] rounded-xl p-6 border border-slate-800 relative overflow-hidden">
            
            {/* Left technical coordinate column */}
            <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-800 pb-4 lg:pb-0 lg:pr-6">
              <div className="flex items-center space-x-2 text-[#FFD166]">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-bold font-serif tracking-wider uppercase">LOG POSE LOCK ON</span>
              </div>

              <div className="space-y-2 font-mono text-xs text-slate-300">
                <div className="bg-[#1C2541] p-2 rounded flex justify-between">
                  <span className="text-slate-500">ISLAND WAYPOINT:</span>
                  <span className="text-white font-bold">{currentIsland.name}</span>
                </div>
                <div className="bg-[#1C2541] p-2 rounded flex justify-between">
                  <span className="text-slate-500">MAGNETIC PATH:</span>
                  <span className="text-[#5BC0BE] font-bold">{currentIsland.coordinates}</span>
                </div>
                <div className="bg-[#1C2541] p-2 rounded flex justify-between">
                  <span className="text-slate-500">CLIMATE PROFILE:</span>
                  <span className="text-[#E63946] font-bold">{currentIsland.climate}</span>
                </div>
                <div className="bg-[#1C2541] p-2 rounded flex justify-between">
                  <span className="text-slate-500">ISLAND STATUS:</span>
                  <span className="text-green-400 font-bold">STORY CONCLUDED</span>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 font-mono italic">
                ⚓ Log Pose fully charged. Ready to set sail to the adjacent waypoint node upon command.
              </div>
            </div>

            {/* Right core historic summary column */}
            <div className="lg:col-span-8 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest bg-slate-900 text-[#5BC0BE] px-2.5 py-0.5 rounded border border-slate-800 inline-block uppercase">
                  {currentIsland.type}
                </span>
                <h3 className="text-2xl font-bold font-serif text-white tracking-wide">
                  The Miracle of {currentIsland.name}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {currentIsland.summary}
                </p>
              </div>

              <div className="p-3 bg-[#1C2541]/90 rounded border-l-4 border-[#FFD166] text-xs">
                <span className="font-bold text-[#FFD166] block font-mono">🌟 ARC CLIMAX & WORLD CHANGE:</span>
                <p className="text-slate-300 italic mt-0.5">
                  "{currentIsland.arcImportance}"
                </p>
              </div>

              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-900">
                <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                <span>VERIFIED BY THE STRAW HAT NAVIGATOR ACADEMY</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom map summary status notice */}
        <div className="mt-8 text-center text-xs font-mono text-slate-400 max-w-xl mx-auto">
          🧭 "Follow the Log Pose, because no matter how terrifying the sea weather gets, the needle never lies."
        </div>

      </div>
    </section>
  );
};
