import React, { useState } from 'react';
import { Skull, ShieldAlert, Flame } from 'lucide-react';
import { audioSynth } from '../utils/audio';

interface Villain {
  name: string;
  alias: string;
  threatLevel: string;
  bounty: string;
  crimeSummary: string;
  quote: string;
  themeStyle: string;
  avatarIcon: string;
}

export const VillainsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const villains: Villain[] = [
    {
      name: 'Kaido',
      alias: 'The King of the Beasts / Strongest Creature',
      threatLevel: 'CATASTROPHIC EMPEROR LEVEL',
      bounty: '4,611,100,000 Berries',
      crimeSummary: 'Enslaved the isolationist samurai fortress of Wano Country for over 20 years, constructing brutal underground weapon weapon factories and consuming a Mythical Azure Dragon fruit to build an unstoppable army of artificial SMILE soldiers.',
      quote: 'If you want answers, come take them with your steel! A war is the only thing that judges right from wrong!',
      themeStyle: 'border-[#E63946] bg-gradient-to-br from-red-950/40 via-slate-900 to-[#0B132B]',
      avatarIcon: '🐉'
    },
    {
      name: 'Charlotte Linlin (Big Mom)',
      alias: 'Queen of Totto Land / Sovereign of Souls',
      threatLevel: 'EMPEROR CLASS THREAT',
      bounty: '4,388,000,000 Berries',
      crimeSummary: 'Ruled an archipelago empire of candy islands by forcefully extracting live lifespans from her citizens as taxes using the Soul-Soul Fruit. Controlled the weather with Zeus the thundercloud and Prometheus the living star.',
      quote: 'Life or treat?! No one leaves my tea parties alive unless they give up their tomorrow!',
      themeStyle: 'border-pink-500 bg-gradient-to-br from-pink-950/30 via-slate-900 to-[#0B132B]',
      avatarIcon: '🍰'
    },
    {
      name: 'Donquixote Doflamingo',
      alias: 'The Heavenly Yaksha / Underworld Joker',
      threatLevel: 'TREASONOUS EX-WARLORD',
      bounty: '340,000,000 Berries (Frozen)',
      crimeSummary: 'Stole the throne of Dressrosa through psychological framing, converting human dissidents into mindless clockwork toys. Masterminded the entire global illegal black market trade of weapon contraband under the alias Joker.',
      quote: 'Pirates are evil? Marines are righteous? These terms have always changed! The ones who stand at the top determine what justice is!',
      themeStyle: 'border-purple-500 bg-gradient-to-br from-purple-950/30 via-slate-900 to-[#0B132B]',
      avatarIcon: '🦩'
    },
    {
      name: 'Sir Crocodile',
      alias: 'Desert King / Cross Guild Director',
      threatLevel: 'STRATEGIC MASTERMIND EX-WARLORD',
      bounty: '1,965,000,000 Berries (Current)',
      crimeSummary: 'Instigated a devastating multi-year artificial drought in Alabasta using Dance Powder, plotting to usurp the kingdom and excavate the hidden Pluton Ancient Battleship weapon blueprint.',
      quote: 'True loyalty is a fool s fantasy. Power and gold are the only logic that never betrays you in the hot desert sand.',
      themeStyle: 'border-amber-500 bg-gradient-to-br from-amber-950/30 via-slate-900 to-[#0B132B]',
      avatarIcon: '🐊'
    },
    {
      name: 'Marshall D. Teach (Blackbeard)',
      alias: 'Lord of Absolute Gravity Darkness',
      threatLevel: 'SUPREME EMPEROR THREAT',
      bounty: '3,996,000,000 Berries',
      crimeSummary: 'Betrayed the Whitebeard Pirates by murdering Thatch, captured Ace to claim a Warlord position, broke into Impel Down to recruit worst-generation serial killers, and stole the Tremor-Tremor Fruit from a dying legend.',
      quote: 'A man s dreams will never die! Let them laugh all they want, only those who strive will grasp the peak!',
      themeStyle: 'border-indigo-500 bg-gradient-to-br from-indigo-950/30 via-slate-900 to-[#0B132B]',
      avatarIcon: '🏴‍☠️'
    },
    {
      name: 'Sakazuki (Akainu)',
      alias: 'Fleet Admiral / Absolute Magma Justice',
      threatLevel: 'MILITARY FANATIC COMMANDER',
      bounty: 'Marine Fleet Supreme Leader',
      crimeSummary: 'Enforces an extremist doctrine of Absolute Justice. Ordered the total slaughter of Ohara civilians fleeing the buster call, executed Portgas D. Ace during the Summit War, and altered Punk Hazard s climate forever.',
      quote: 'If a single pirate escapes, our military honor is permanently compromised! Evil must be thoroughly eradicated from the root!',
      themeStyle: 'border-orange-500 bg-gradient-to-br from-orange-950/30 via-slate-900 to-[#0B132B]',
      avatarIcon: '🌋'
    }
  ];

  const currentVillain = villains[activeIndex];

  return (
    <section id="villains" className="py-24 bg-smoke-dark relative overflow-hidden">
      {/* Red ambient smoke glow overlay filters */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 text-[#E63946] bg-[#E63946]/10 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-[#E63946]/30">
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
            <span>CRITICAL HIGH DANGER ENEMY LIST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white uppercase tracking-tight">
            THE ARCH <span className="text-[#E63946] text-glow-red">VILLAINS</span> SHOCKWAVE
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            The tyrannical tyrants, rogue conquerors, and fanatic marine admirals who block the gateway to the One Piece.
          </p>
          <div className="w-20 h-1 bg-[#E63946] mx-auto mt-3 rounded-full" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Buttons Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {villains.map((v, index) => {
              const isSelected = index === activeIndex;
              return (
                <button
                  key={v.name}
                  onClick={() => { audioSynth.playSwordSlash(); setActiveIndex(index); }}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex items-center space-x-3 cursor-pointer group ${isSelected ? 'bg-[#1C2541] border-[#E63946] text-white shadow-[0_0_15px_rgba(230,57,70,0.25)]' : 'bg-[#1C2541]/30 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-[#1C2541]/50'}`}
                  onMouseEnter={() => audioSynth.playHoverSound()}
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{v.avatarIcon}</span>
                  <div className="truncate">
                    <span className="text-[10px] block font-mono text-slate-500 font-bold">0{index + 1} ENEMY</span>
                    <span className="text-xs sm:text-sm font-bold tracking-wide font-serif">{v.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Villain Dossier Card */}
          <div className="lg:col-span-8">
            <div className={`border-l-4 rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 min-h-[380px] flex flex-col justify-between ${currentVillain.themeStyle}`}>
              
              <div className="space-y-4">
                {/* Header status bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-wide">
                      {currentVillain.name}
                    </h3>
                    <p className="text-xs text-[#FFD166] font-mono mt-0.5 tracking-tight font-semibold">
                      {currentVillain.alias}
                    </p>
                  </div>
                  
                  <div className="bg-slate-950 px-3 py-1.5 rounded border border-slate-800 text-center sm:text-right">
                    <span className="text-[9px] font-mono text-slate-500 block">BOUNTY VALUATION</span>
                    <span className="text-xs font-black font-mono text-[#E63946] tracking-wider">
                      {currentVillain.bounty}
                    </span>
                  </div>
                </div>

                {/* Threat level indicator bar */}
                <div className="flex items-center space-x-2 bg-slate-950 px-3 py-2 rounded text-xs font-mono border border-slate-900">
                  <Skull className="w-4 h-4 text-[#E63946] animate-bounce" />
                  <span className="text-slate-400 font-bold">IMPEL DOWN PROTOCOL:</span>
                  <span className="text-[#E63946] font-black tracking-widest">{currentVillain.threatLevel}</span>
                </div>

                {/* Core crime overview narrative text */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 tracking-widest block uppercase font-bold">CRIMINAL INTEL & ATROCITIES:</span>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {currentVillain.crimeSummary}
                  </p>
                </div>
              </div>

              {/* Terrifying Villain Tyrant Statement block */}
              <div className="p-4 bg-slate-950/80 rounded border-l-4 border-red-500 relative overflow-hidden">
                <div className="absolute right-2 bottom-0 text-5xl text-slate-900 font-serif select-none pointer-events-none font-bold">"</div>
                <span className="text-[9px] font-mono text-[#E63946] tracking-widest block font-bold">NOTORIOUS MONOLOGUE STATEMENT:</span>
                <p className="text-xs sm:text-sm text-slate-200 italic mt-1 font-sans font-medium">
                  "{currentVillain.quote}"
                </p>
              </div>

              {/* Footer classified metadata labels */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-900">
                <span className="flex items-center"><Flame className="w-3.5 h-3.5 text-[#E63946] mr-1" /> EXTREME TERROR THREAT</span>
                <span>LEVEL LEVEL LEVEL 6 RECORD</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
