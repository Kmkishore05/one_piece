import React, { useState } from 'react';
import { BookOpen, Award, Compass, Sparkles, HelpCircle, Flame } from 'lucide-react';
import { audioSynth } from '../utils/audio';

interface TimelineItem {
  id: string;
  title: string;
  era: string;
  icon: React.ReactNode;
  lore: string;
  highlight: string;
  color: string;
}

export const StorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('roger');

  const timelineData: TimelineItem[] = [
    {
      id: 'roger',
      title: 'The Execution of Gol D. Roger',
      era: '24 Years Before Present',
      icon: <Award className="w-6 h-6 text-[#FFD166]" />,
      lore: 'Gol D. Roger, known as the Pirate King, conquered the entire Grand Line and amassed wealth, fame, and power. Facing a terminal illness, he turned himself in to the Marines. On the execution platform in Loguetown, his final words sparked a global firestorm: "My treasure? If you want it, you can have it! Find it! I left everything this world has to offer at that place!"',
      highlight: 'His death did not extinguish the pirate flame; it ignited it.',
      color: 'border-[#FFD166]'
    },
    {
      id: 'era',
      title: 'The Great Pirate Era Begins',
      era: 'The Golden Age of Sails',
      icon: <Flame className="w-6 h-6 text-[#E63946]" />,
      lore: 'Prompted by Rogers final words, thousands of daring dreamers unfurled their flags and set sail into the treacherous oceans. The title of "Pirate King" became the ultimate pursuit. Countless armadas, crews, and rogue idealists took up arms, permanently shifting the geopolitical balance of power away from absolute World Government supremacy.',
      highlight: 'A time of absolute lawlessness, unmitigated freedom, and epic romanticism.',
      color: 'border-[#E63946]'
    },
    {
      id: 'grandline',
      title: 'The Grand Line & The Calm Belts',
      era: 'The Pirates Graveyard',
      icon: <Compass className="w-6 h-6 text-[#5BC0BE]" />,
      lore: 'A unique ocean current wrapped diagonally around the world, bounded by stagnant Calm Belts crawling with colossal Sea Kings. Here, standard compasses fail entirely, replaced only by magnetic Log Poses. The weather fluctuates instantly from blizzards to volcanic heat, testing the limits of human navigation and shipcraft.',
      highlight: 'Split into Paradise and the brutal New World where only the strongest survive.',
      color: 'border-[#5BC0BE]'
    },
    {
      id: 'treasure',
      title: 'The Fabled One Piece Treasure',
      era: 'The Final Island: Laugh Tale',
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      lore: 'The ultimate treasure left behind by Roger on the hidden final island, Laugh Tale. To locate it, one must find and decipher four scarlet Road Poneglyphs. It is not merely physical gold; it represents the revelation of everything the world has sought, causing Roger and his entire crew to burst into hysterical laughter upon discovery.',
      highlight: 'A mystery so profound it promises to overturn the entire world order.',
      color: 'border-yellow-400'
    },
    {
      id: 'joyboy',
      title: 'The Legacy of Joy Boy',
      era: '800 Years Ago & The Prophecy',
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      lore: 'An enigmatic figure from the distant past who played a monumental role in global history. He left an apology inscribed on a Poneglyph to Fishman Island for breaking a promise, along with a treasure of unimaginable impact on Laugh Tale. He is intrinsically linked with the Sun God Nika, liberation, and the sounding of the Drums of Liberation.',
      highlight: 'Prophesied to return after 800 years to liberate the oppressed nations.',
      color: 'border-purple-400'
    },
    {
      id: 'void',
      title: 'The Enigmatic Void Century',
      era: 'The Forgotten 100-Year History',
      icon: <HelpCircle className="w-6 h-6 text-cyan-400" />,
      lore: 'A century-long blank period in human history that the World Government strictly forbids studying. It marks the total destruction of an advanced Ancient Kingdom and the consolidation of the twenty founding royal families. The truth of this era is carved exclusively on indestructible Poneglyphs scattered across the globe.',
      highlight: 'The ultimate secret that the Five Elders will assassinate anyone to keep hidden.',
      color: 'border-cyan-400'
    }
  ];

  const currentItem = timelineData.find(item => item.id === activeTab) || timelineData[0];

  return (
    <section id="lore" className="py-24 bg-parchment relative overflow-hidden">
      {/* Decorative parchment line grids */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FFD166_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs uppercase font-mono tracking-widest text-[#5BC0BE]">HISTORICAL TIMELINE</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif uppercase">
            THE CHRONICLES OF <span className="text-[#FFD166] text-glow-gold">THE LORE</span>
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Unravel the ultimate secrets of the sea that drove an entire civilization to declare war on the skies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E63946] to-[#FFD166] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Timeline Switchers */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs text-slate-400 font-mono tracking-widest uppercase block mb-2 px-1">
              Select Historic Milestone:
            </span>
            {timelineData.map((item, index) => {
              const isSelected = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  onClick={() => { audioSynth.playClickSound(); setActiveTab(item.id); }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center space-x-4 border cursor-pointer interactive-card ${isSelected ? 'bg-[#0B132B] border-[#FFD166] shadow-[0_0_15px_rgba(255,209,102,0.2)] text-white' : 'bg-[#0B132B]/40 border-slate-800/80 text-slate-400 hover:bg-[#0B132B]/70 hover:text-slate-200'}`}
                  onMouseEnter={() => audioSynth.playHoverSound()}
                >
                  <div className={`p-2 rounded ${isSelected ? 'bg-[#FFD166]/10 text-[#FFD166]' : 'bg-slate-900 text-slate-500'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold font-mono text-[#5BC0BE] tracking-wide">{item.era}</div>
                    <div className="text-sm font-semibold truncate mt-0.5">{item.title}</div>
                  </div>
                  <div className="text-xs font-mono text-slate-600 font-bold">0{index + 1}</div>
                </button>
              );
            })}
          </div>

          {/* Right Immersive Lore Comic Showcase */}
          <div className="lg:col-span-8">
            <div className={`bg-[#0B132B] border-t-4 ${currentItem.color} rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 relative transition-all duration-500 min-h-[380px] flex flex-col justify-between`}>
              
              {/* Watermark quote symbol */}
              <div className="absolute right-6 top-4 font-serif text-8xl text-slate-800 opacity-20 pointer-events-none select-none">
                ☠️
              </div>

              <div className="space-y-4">
                <div className="inline-block bg-[#1C2541] px-3 py-1 rounded text-xs font-mono font-bold text-[#FFD166] border border-slate-800 tracking-wider">
                  {currentItem.era}
                </div>
                
                <h4 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-wide text-glow-gold">
                  {currentItem.title}
                </h4>

                <div className="h-[1px] bg-gradient-to-r from-slate-800 via-slate-700 to-transparent w-full" />

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans pt-2">
                  {currentItem.lore}
                </p>
              </div>

              {/* Dialogue Box Accent Block */}
              <div className="p-4 bg-[#1C2541]/90 rounded border-l-4 border-[#5BC0BE] mt-6">
                <span className="text-[11px] font-mono tracking-wider font-bold text-[#5BC0BE] block uppercase">
                  CRITICAL WORLD CONTEXT:
                </span>
                <p className="text-xs text-slate-300 italic mt-1 font-medium">
                  "{currentItem.highlight}"
                </p>
              </div>

              {/* Bottom Nav Helper */}
              <div className="pt-4 border-t border-slate-900 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>CHAPTER STATUS: TRANSLATED BY NICO ROBIN</span>
                <span className="text-[#FFD166] font-bold">PONEGLYPH REVEAL • CONFIDENTIAL</span>
              </div>

            </div>
          </div>

        </div>

        {/* Fun Lore Factboard Banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#0B132B] to-[#1C2541] border border-dashed border-[#FFD166]/30 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold font-mono text-[#E63946] tracking-widest block">THE REVOLUTIONARY WATCH</span>
            <p className="text-xs text-slate-300 max-w-xl">
              "The World Government fears the truth because it reveals that the global order is built on a stolen century. Luffy doesn't care about history, he just wants everyone to eat as much as they want!"
            </p>
          </div>
          <button 
            onClick={() => { audioSynth.playSwordSlash(); document.getElementById('worldmap')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-5 py-2.5 bg-[#FFD166] text-[#0B132B] font-extrabold text-[11px] tracking-widest uppercase rounded hover:bg-white transition-colors whitespace-nowrap cursor-pointer"
          >
            Track Log Pose 🧭
          </button>
        </div>

      </div>
    </section>
  );
};
