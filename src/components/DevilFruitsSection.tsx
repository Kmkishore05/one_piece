import React, { useState } from 'react';
import { Sparkles, ShieldAlert, Zap, Layers } from 'lucide-react';
import { audioSynth } from '../utils/audio';

interface FruitItem {
  name: string;
  type: 'Mythical Zoan' | 'Logia' | 'Paramecia';
  currentWielder: string;
  formerWielder: string;
  description: string;
  abilities: string[];
  rarityColor: string;
  iconSymbol: string;
}

export const DevilFruitsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const fruits: FruitItem[] = [
    {
      name: 'Gomu Gomu no Mi (Hito Hito: Model Nika)',
      type: 'Mythical Zoan',
      currentWielder: 'Monkey D. Luffy',
      formerWielder: 'Joy Boy (800 years ago)',
      description: 'Initially disguised by the Five Elders as a Paramecia-type rubber fruit, this is actually a legendary God Fruit. Awakening it grants the wielder a body with the properties of rubber but limited only by their imagination, bringing laughter, freedom, and the Drums of Liberation to all souls.',
      abilities: ['Gear 2nd to 4th body enhancements', 'Total immunity to lightning/blunt force', 'Gear 5th comic-reality physics bending'],
      rarityColor: 'from-[#FFD166]/30 via-amber-500/10 to-transparent border-[#FFD166]',
      iconSymbol: '☀️'
    },
    {
      name: 'Mera Mera no Mi (Flame Flame Fruit)',
      type: 'Logia',
      currentWielder: 'Sabo (Revolutionary Army)',
      formerWielder: 'Portgas D. Ace',
      description: 'Allows the user to create, control, and transform their body completely into devastating, high-temperature raging fireballs. The wielder becomes immune to standard physical strikes, melting weapons instantly and turning naval battlefleets into ashes.',
      abilities: ['Hiken (Fire Fist) blast waves', 'Enkai (Flame Commandment) fire armor', 'Complete physical body intangibility'],
      rarityColor: 'from-[#E63946]/30 via-red-500/10 to-transparent border-[#E63946]',
      iconSymbol: '🔥'
    },
    {
      name: 'Ope Ope no Mi (Op Op Fruit)',
      type: 'Paramecia',
      currentWielder: 'Trafalgar D. Water Law',
      formerWielder: 'Unknown Medical Doctor',
      description: 'Known as the "Ultimate Devil Fruit". It grants the absolute power to manipulate anything within a spherical light-blue field called "ROOM". The wielder can perform miraculous surgical procedures, teleport objects, slice mountains without killing, or perform the Eternal Youth Operation.',
      abilities: ['ROOM & Amputation grid slices', 'Shambles coordinate teleportation', 'Perpetual Ageless Surgery capability'],
      rarityColor: 'from-[#5BC0BE]/30 via-cyan-500/10 to-transparent border-[#5BC0BE]',
      iconSymbol: '🌐'
    },
    {
      name: 'Yami Yami no Mi (Dark Dark Fruit)',
      type: 'Logia',
      currentWielder: 'Marshall D. Teach (Blackbeard)',
      formerWielder: 'None (Stolen from Thatch)',
      description: 'The most evil and unique Logia fruit in existence. It generates an infinite gravity void of total darkness that forcefully pulls in everything. Unlike other Logia users, the wielder cannot pass through attacks, but they can completely crush objects or temporarily nullify any other Devil Fruit power upon physical contact.',
      abilities: ['Black Hole gravity absorption', 'Liberation crushed debris ejection', 'Absolute Devil Fruit power suppression'],
      rarityColor: 'from-purple-900/40 via-slate-900/40 to-transparent border-purple-600',
      iconSymbol: '🕳️'
    }
  ];

  return (
    <section id="fruits" className="py-24 bg-devil-fruit relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E63946]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#5BC0BE] uppercase">Encyclopedia of the Sea</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white uppercase">
            MYSTICAL <span className="text-[#FFD166] text-glow-gold">DEVIL FRUITS</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Eaten at the cost of losing the ability to swim forever, these sea treasures grant godlike powers that echo humanity's deepest desires.
          </p>
          <div className="w-16 h-1 bg-[#5BC0BE] mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Overview Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-center text-xs font-mono">
          <div className="bg-[#0B132B]/80 p-3 rounded border border-slate-800 flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4 text-[#E63946]" />
            <span className="text-slate-300 font-bold">LOGIA:</span>
            <span className="text-slate-400">Elemental Transformation</span>
          </div>
          <div className="bg-[#0B132B]/80 p-3 rounded border border-slate-800 flex items-center justify-center space-x-2">
            <Layers className="w-4 h-4 text-[#FFD166]" />
            <span className="text-slate-300 font-bold">PARAMECIA:</span>
            <span className="text-slate-400">Environmental Modification</span>
          </div>
          <div className="bg-[#0B132B]/80 p-3 rounded border border-slate-800 flex items-center justify-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#5BC0BE]" />
            <span className="text-slate-300 font-bold">ZOAN:</span>
            <span className="text-slate-400">Animalistic Mutations</span>
          </div>
        </div>

        {/* Fruits Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fruits.map((fruit, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={fruit.name}
                onMouseEnter={() => { audioSynth.playHoverSound(); setHoveredIndex(idx); }}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-gradient-to-br ${fruit.rarityColor} border rounded-xl p-6 transition-all duration-500 transform relative overflow-hidden flex flex-col justify-between cursor-pointer group ${isHovered ? 'scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-[#0B132B]' : 'bg-[#0B132B]/60'}`}
              >
                {/* Upper row header */}
                <div className="flex justify-between items-start space-x-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono bg-[#0B132B] px-2.5 py-0.5 rounded border border-slate-800 text-slate-300 font-bold uppercase tracking-wider">
                      {fruit.type}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-white tracking-wide mt-1.5 group-hover:text-[#FFD166] transition-colors">
                      {fruit.name}
                    </h3>
                  </div>

                  <div className="w-12 h-12 bg-[#0B132B] rounded-full flex items-center justify-center text-2xl border border-slate-700 shadow-lg group-hover:rotate-12 transition-transform">
                    {fruit.iconSymbol}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4 font-sans">
                  {fruit.description}
                </p>

                {/* Line separation wielder details */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-800/60 text-[11px] font-mono">
                  <div>
                    <span className="text-slate-500 block">CURRENT WIELDER</span>
                    <span className="text-white font-bold">{fruit.currentWielder}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">PRIOR LEGACY WIELDER</span>
                    <span className="text-slate-400 italic">{fruit.formerWielder}</span>
                  </div>
                </div>

                {/* Combat Capabilities Stagger Panel */}
                <div className="mt-4 bg-[#0B132B]/90 p-3 rounded border border-slate-800 space-y-1.5">
                  <span className="text-[9px] font-bold text-[#5BC0BE] tracking-widest block uppercase">COMBAT TECHNIQUES & MUTATIONS:</span>
                  <ul className="text-[11px] text-slate-300 space-y-1 font-mono">
                    {fruit.abilities.map((ability, index) => (
                      <li key={index} className="flex items-center space-x-1 truncate">
                        <span className="text-[#FFD166]">⚡</span>
                        <span>{ability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Marine Hazard Warning Overlay Label */}
                <div className="mt-4 text-right text-[9px] text-slate-500 font-mono tracking-tighter uppercase flex items-center justify-end space-x-1">
                  <ShieldAlert className="w-3 h-3 text-[#E63946]" />
                  <span>CLASSIFIED SEA TREASURE • DEVIL RECTO</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sea Curse Footnote dialogue style */}
        <div className="comic-box p-4 mt-12 rounded-lg max-w-2xl mx-auto text-xs text-center text-slate-200">
          <span className="font-bold text-[#FFD166] block mb-1">⚠️ THE HAMMER OF THE SEA CURSE:</span>
          "They may achieve godhood, but the Sea forever hates them. If they plunge into the ocean, they sink like an anchor, rendered completely motionless. It is the final price for absolute power!"
        </div>

      </div>
    </section>
  );
};
