import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { audioSynth } from '../utils/audio';

interface CrewMember {
  name: string;
  jpName: string;
  role: string;
  bounty: string;
  abilities: string[];
  quote: string;
  avatarIcon: string;
  glowColor: string;
  badge: string;
  poster: string;
}

export const CrewSection: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const crewMembers: CrewMember[] = [
    {
      name: 'Monkey D. Luffy',
      jpName: 'モンキー・D・ルフィ',
      role: 'Captain / Straw Hat Founder',
      bounty: '3,000,000,000 Berries',
      abilities: [
        'Hito Hito no Mi Model: Nika',
        'Gear 5 Awakening',
        'Conquerors Haki (Advanced)'
      ],
      quote:
        'If I die fighting for my dream, that is fine. Freedom is being the king of the sea!',
      avatarIcon: '👑',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(230,57,70,0.6)] hover:border-[#E63946]',
      badge: 'Straw Hat Emperor',
      poster: '/posters/luffy.jpg'
    },

    {
      name: 'Roronoa Zoro',
      jpName: 'ロロノア・ゾロ',
      role: 'First Mate / Master Swordsman',
      bounty: '1,111,000,000 Berries',
      abilities: [
        'Three-Sword Style (Santoryu)',
        'King of Hell mode',
        'Asura Avatar Strike'
      ],
      quote:
        'When I decided to follow my dream, I had already discarded my life.',
      avatarIcon: '⚔️',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(91,192,190,0.6)] hover:border-[#5BC0BE]',
      badge: 'King of Hell',
      poster: '/posters/zoro.jpg'
    },

    {
      name: 'Nami',
      jpName: 'ナミ',
      role: 'Expert Navigator / Cartographer',
      bounty: '366,000,000 Berries',
      abilities: [
        'Climate Tact Wizardry',
        'Zeus Thunderbolts',
        'Perfect Weather Sensing'
      ],
      quote:
        'Life is like a wind, which redirects our ship towards the brightest tomorrow.',
      avatarIcon: '🍊',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(255,209,102,0.6)] hover:border-[#FFD166]',
      badge: 'Cat Burglar',
      poster: '/posters/nami.jpg'
    },

    {
      name: 'Usopp',
      jpName: 'ウソップ',
      role: 'Master Sniper / Gadgeteer',
      bounty: '500,000,000 Berries',
      abilities: [
        'Pop Green Botanical Ammo',
        'Kuro Kabuto Slingshot',
        'Observation Haki Awake'
      ],
      quote:
        'There comes a time when a man has to stand and fight, even if he knows he will lose!',
      avatarIcon: '🎯',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:border-purple-500',
      badge: 'God Usopp',
      poster: '/posters/usopp.jpg'
    },

    {
      name: 'Vinsmoke Sanji',
      jpName: 'サンジ',
      role: 'Chef of the Seas / Black Leg Fighter',
      bounty: '1,032,000,000 Berries',
      abilities: [
        'Diable / Ifrit Jambe',
        'Germa Exoskeleton Speed',
        'Sky Walk Aerial Dash'
      ],
      quote:
        'A mans dreams will never die, but I will never kick a woman even if it kills me.',
      avatarIcon: '🚬',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:border-red-500',
      badge: 'Black Leg',
      poster: '/posters/sanji.jpg'
    },

    {
      name: 'Tony Tony Chopper',
      jpName: 'トニートニー・チョッパー',
      role: 'Doctor / Cotton Candy Lover',
      bounty: '1,000 Berries',
      abilities: [
        'Rumble Ball Mutations',
        'Monster Point Form',
        'Miracle Medicine Synthesis'
      ],
      quote:
        'I will become a doctor who can cure any disease! Because there is nothing impossible!',
      avatarIcon: '🌸',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] hover:border-pink-400',
      badge: 'Cotton Candy Eater',
      poster: '/posters/chopper.jpg'
    },

    {
      name: 'Nico Robin',
      jpName: 'ニコ・ロビン',
      role: 'Archaeologist / Poneglyph Decoder',
      bounty: '930,000,000 Berries',
      abilities: [
        'Hana Hana no Mi (Flower-Flower)',
        'Demonio Fleur form',
        'Void Century Polymath'
      ],
      quote:
        'I want to live! Take me out to the sea with you guys!',
      avatarIcon: '👁️',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:border-blue-500',
      badge: 'Light of the Revolution',
      poster: '/posters/nico.jpg'
    },

    {
      name: 'Franky',
      jpName: 'フランキー',
      role: 'Shipwright / Cyborg Engineer',
      bounty: '394,000,000 Berries',
      abilities: [
        'General Franky Shogun Mech',
        'Radical Beam Cannon',
        'Cola Powered Rocket Punches'
      ],
      quote:
        'Existing is not a sin! A ship is beautiful as long as it navigates through storms!',
      avatarIcon: '🤖',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:border-cyan-500',
      badge: 'Iron Man',
      poster: '/posters/franky.jpg'
    },

    {
      name: 'Brook',
      jpName: 'ブルック',
      role: 'Musician / Soul King Swordsman',
      bounty: '383,000,000 Berries',
      abilities: [
        'Yomi Yomi no Mi Soul Form',
        'Ice Cold Soul Solid Blade',
        'Binks Sake Symphony'
      ],
      quote:
        'What keeps me alive in this lonely world are memories and the promise to meet Laboon!',
      avatarIcon: '🎻',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:border-amber-500',
      badge: 'Soul King',
      poster: '/posters/brook.jpg'
    },

    {
      name: 'Jinbe',
      jpName: 'ジンベエ',
      role: 'Helmsman / Fish-Man Karate Master',
      bounty: '1,100,000,000 Berries',
      abilities: [
        'Fish-Man Karate Secret Arts',
        'Ocean Current Shoulder Throw',
        'Whale Shark Telepathy'
      ],
      quote:
        'Do not count what you have lost! Look at what remains with you!',
      avatarIcon: '🥋',
      glowColor:
        'hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] hover:border-teal-500',
      badge: 'First Son of the Sea',
      poster: '/posters/jinbe.jpg'
    }
  ];

  const handleMemberClick = (poster: string) => {
    audioSynth.playSwordSlash();
    setSelectedPoster(poster);
  };

  return (
    <section
      id="strawhats"
      className="py-24 bg-crew relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-r from-[#5BC0BE]/5 via-transparent to-[#FFD166]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-[#FFD166]">
              Bounty Hunter Ledger
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-white uppercase">
              THE <span className="text-[#E63946]">STRAW HAT</span> CREW
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              Meet the legendary pirates who shook the Grand Line.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="text-xs bg-[#1C2541] border border-slate-700 px-4 py-2 rounded text-slate-300 font-mono">
              TOTAL CREW BOUNTY:{' '}
              <span className="text-[#FFD166] font-bold">
                8,816,001,000 Berries
              </span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {crewMembers.map((member) => (
            <div
              key={member.name}
              onClick={() => handleMemberClick(member.poster)}
              onMouseEnter={() => audioSynth.playHoverSound()}
              className={`glass-panel rounded-xl p-5 border transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col justify-between ${member.glowColor}`}
            >
              
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-slate-900/60 px-2 py-0.5 text-[9px] font-mono tracking-wide text-slate-400 rounded-bl border-l border-b border-slate-800">
                {member.badge}
              </div>

              <div className="space-y-4">

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#0B132B] border border-slate-700 flex items-center justify-center text-2xl">
                  {member.avatarIcon}
                </div>

                {/* Name */}
                <div>
                  <h3 className="text-base font-bold text-white font-serif">
                    {member.name}
                  </h3>

                  <p className="text-[10px] text-slate-400 font-mono tracking-tighter truncate">
                    {member.jpName}
                  </p>

                  <p className="text-xs font-semibold text-[#FFD166] mt-1 font-mono tracking-tight">
                    {member.role}
                  </p>
                </div>

                {/* Bounty */}
                <div className="bg-[#0B132B] px-2.5 py-1.5 rounded border border-slate-800 text-center">
                  <span className="text-[9px] font-mono text-slate-400 block tracking-tight">
                    OFFICIAL WANTED BOUNTY
                  </span>

                  <span className="text-xs font-black text-[#E63946] font-mono tracking-wider">
                    {member.bounty}
                  </span>
                </div>

                {/* Abilities */}
                <div className="space-y-1 pt-1">
                  <span className="text-[9px] text-slate-400 font-mono uppercase block tracking-widest">
                    Mastery & Powers:
                  </span>

                  <div className="flex flex-wrap gap-1">
                    {member.abilities.map((ability, index) => (
                      <span
                        key={index}
                        className="text-[9px] bg-[#1C2541]/90 text-slate-300 border border-slate-800/80 px-1.5 py-0.5 rounded"
                      >
                        • {ability}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="text-[9px] text-[#5BC0BE] font-mono uppercase flex items-center space-x-1">
                  <MessageSquare className="w-2.5 h-2.5" />
                  <span>SIGNATURE STATEMENT:</span>
                </div>

                <p className="text-[11px] text-slate-300 italic mt-1 leading-tight">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE POPUP */}
      {selectedPoster && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedPoster(null)}
        >
          <img
            src={selectedPoster}
            alt="Wanted Poster"
            className="max-w-[90%] md:max-w-[500px] rounded-lg shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};