import React, { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const IMAGES = [
  {
    src: '../assets/luffy2.png',
    bg: '#F57C00',
    name: 'Monkey D. Luffy',
    description:
      'Captain of the Straw Hat Pirates. Luffy dreams of becoming the Pirate King and possesses the powers of the legendary Sun God Nika.',
  },
  {
    src: '../assets/shanks.png',
    bg: '#C62828',
    name: 'Red-Haired Shanks',
    description:
      'One of the Four Emperors of the Sea. Shanks inspired Luffy to become a pirate and is renowned for his overwhelming Haki.',
  },
  {
    src: '../assets/zoro.png',
    bg: '#1B5E20',
    name: 'Roronoa Zoro',
    description:
      'The swordsman of the Straw Hat Pirates. Wielder of the Three-Sword Style and future World’s Greatest Swordsman.',
  },
  {
    src: '../assets/sanji.png',
    bg: '#1565C0',
    name: 'Vinsmoke Sanji',
    description:
      'Chef of the Straw Hat Pirates. Famous for his Black Leg fighting style, incredible cooking skills and unwavering loyalty.',
  },
  {
    src: '../assets/law.png',
    bg: '#5D4037',
    name: 'Trafalgar D. Water Law',
    description:
      'Captain of the Heart Pirates and one of the Worst Generation. Law wields the Ope Ope no Mi, allowing him to manipulate anything within his Room.',
  },
  {
    src: '../assets/roger.png',
    bg: '#8D6E63',
    name: 'Gol D. Roger',
    description:
      'The King of the Pirates. Roger conquered the Grand Line, discovered the legendary treasure One Piece, and ushered in the Great Pirate Era.',
  },
  {
    src: '../assets/ace.png',
    bg: '#D84315',
    name: 'Portgas D. Ace',
    description:
      'Luffy’s sworn brother and former commander of the Whitebeard Pirates. Ace possessed the Flame-Flame Fruit and carried Roger’s bloodline.',
  },
  {
    src: '../assets/sabo.png',
    bg: '#FBC02D',
    name: 'Sabo',
    description:
      'Chief of Staff of the Revolutionary Army and brother to Luffy and Ace. Sabo inherited Ace’s Flame-Flame Fruit and fights for freedom worldwide.',
  },
  {
    src: '../assets/brook.png',
    bg: '#7E57C2',
    name: 'Soul King Brook',
    description:
      'Musician of the Straw Hat Pirates. Revived by the Yomi Yomi no Mi, Brook is a living skeleton known for his music, swordsmanship and humor.',
  },
  {
    src: '../assets/jimbei.png',
    bg: '#0277BD',
    name: 'First son of the Sea Jinbe',
    description:
      'Helmsman of the Straw Hat Pirates and master of Fish-Man Karate. Jinbe is a respected warrior who values honor, loyalty and justice.',
  },
  {
  src: '../assets/mihawk.png',
  bg: '#212121',
  name: 'Dracule Mihawk',
  description:
    'The World’s Greatest Swordsman and Zoro’s ultimate goal.'
},
{
  src: '../assets/rayleigh.png',
  bg: '#6D4C41',
  name: 'Silvers Rayleigh',
  description:
    'The Dark King and former first mate of the Roger Pirates, mentor to Luffy during the timeskip.'
},
{
  src: '../assets/marco.png',
  bg: '#00ACC1',
  name: 'Marco the Phoenix',
  description:
    'Former First Division Commander of the Whitebeard Pirates. Marco possesses the Mythical Zoan Phoenix Fruit, granting him regenerative blue flames and incredible aerial combat abilities.',
},
{
  src: '../assets/Newgate.png',
  bg: '#455A64',
  name: 'Edward Newgate (Whitebeard)',
  description:
    'The legendary captain of the Whitebeard Pirates and known as the Strongest Man in the World. Whitebeard wielded the Tremor-Tremor Fruit, capable of creating devastating earthquakes.',
},
{
  src: '../assets/dragon.png',
  bg: '#2E7D32',
  name: 'Monkey D. Dragon',
  description:
    'Leader of the Revolutionary Army and the most wanted man in the world. Dragon seeks to overthrow the World Government and bring freedom to oppressed nations.',
},
{
  src: '../assets/kuma.png',
  bg: '#424242',
  name: 'Bartholomew Kuma',
  description:
    'Former Warlord of the Sea, member of the Revolutionary Army, and the father of Jewelry Bonney. Kuma possesses the Paw-Paw Fruit, allowing him to repel anything, including attacks, pain, and even people across vast distances.',
},
{
  src: '../assets/garp.png',
  bg: '#0D47A1',
  name: 'Monkey D. Garp',
  description:
    'Known as Garp the Fist, he is one of the strongest Marines in history. A legendary hero who cornered Gol D. Roger countless times, Garp is the grandfather of Luffy and father of Dragon. His immense Haki and raw physical strength make him a living legend.',
},
]

const FRACTAL_NOISE_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E`

function CharacterSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    IMAGES.forEach((image) => {
      const img = new Image()
      img.src = image.src
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navigate = (direction) => {
    if (isAnimating) return

    setIsAnimating(true)

    setActiveIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % IMAGES.length
      }
      return (prev - 1 + IMAGES.length) % IMAGES.length
    })

    setTimeout(() => {
      setIsAnimating(false)
    }, 650)
  }

  const getCenterIndex = () => activeIndex
  const getLeftIndex = () => (activeIndex + 3) % 4
  const getRightIndex = () => (activeIndex + 1) % 4
  const getBackIndex = () => (activeIndex + 2) % 4

  const getRole = (index) => {
    if (index === getCenterIndex()) return 'center'
    if (index === getLeftIndex()) return 'left'
    if (index === getRightIndex()) return 'right'
    return 'back'
  }

  const getItemStyles = (role) => {
    const base = {
      position: 'absolute',
      transition: 'all 650ms cubic-bezier(0.4,0,0.2,1)',
    }

    if (role === 'center') {
      return {
        ...base,
        left: '50%',
        top: '50%',
        width: isMobile ? '75%' : '40%',
        height: isMobile ? '70%' : '90%',
        transform: 'translate(-50%, -50%)',
        zIndex: 20,
        opacity: 1,
      }
    }

    if (role === 'left') {
      return {
        ...base,
        left: isMobile ? '15%' : '25%',
        top: '60%',
        width: isMobile ? '35%' : '20%',
        height: isMobile ? '35%' : '45%',
        transform: 'translate(-50%, -50%) scale(.75)',
        opacity: 0.5,
        filter: 'blur(2px)',
        zIndex: 10,
      }
    }

    if (role === 'right') {
      return {
        ...base,
        left: isMobile ? '85%' : '75%',
        top: '60%',
        width: isMobile ? '35%' : '20%',
        height: isMobile ? '35%' : '45%',
        transform: 'translate(-50%, -50%) scale(.75)',
        opacity: 0.5,
        filter: 'blur(2px)',
        zIndex: 10,
      }
    }

    return {
      ...base,
      left: '50%',
      top: '65%',
      width: isMobile ? '25%' : '15%',
      height: isMobile ? '25%' : '35%',
      transform: 'translate(-50%, -50%) scale(.5)',
      opacity: 0.2,
      filter: 'blur(5px)',
      zIndex: 5,
    }
  }

  return (
    <>
      <style>
        {`
          @keyframes fadeText {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: IMAGES[activeIndex].bg,
          transition: 'background-color .65s ease',
        }}
        className="w-full h-screen overflow-hidden relative"
      >
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('${FRACTAL_NOISE_SVG}')`,
            opacity: 0.3,
            zIndex: 1,
          }}
        />

        {/* Background Text */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-inherit fontfamilyOnePiece"
          style={{
            fontSize: 'clamp(80px,20vw,350px)',
            color: 'rgba(255,255,255,.12)',
            fontWeight: 900,
            letterSpacing: '-5px',
            zIndex: 2,
            userSelect: 'none',
            fontFamily: 'OnePiece, sans-serif',
            
            
          }}
        >
          ONE PIECE
        </div>

        {/* Characters */}
        <div className="absolute inset-0 z-10">
          {IMAGES.map((image, index) => (
            <div
              key={index}
              style={getItemStyles(getRole(index))}
            >
              <img
                src={image.src}
                alt={image.name}
                draggable={false}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  userSelect: 'none',
                }}
              />
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="absolute left-8 bottom-10 md:left-16 md:bottom-16 z-30 max-w-lg">
          <h1
            key={IMAGES[activeIndex].name}
            style={{
              color: 'white',
              fontSize: isMobile ? '28px' : '52px',
              fontWeight: '800',
              animation: 'fadeText .6s ease',
            }}
          >
            {IMAGES[activeIndex].name}
          </h1>

          <p
            key={IMAGES[activeIndex].description}
            style={{
              color: 'rgba(255,255,255,.9)',
              lineHeight: 1.8,
              marginTop: '12px',
              animation: 'fadeText .6s ease',
            }}
          >
            {IMAGES[activeIndex].description}
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate('prev')}
              className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={() => navigate('next')}
              className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Discover */}
        <div
          className="absolute right-8 bottom-10 md:right-16 md:bottom-16 z-30 discover"
          style={{
            color: 'white',
            fontSize: isMobile ? '24px' : '50px',
            fontWeight: '800',
            letterSpacing: '-2px',
          }}
        >
          ONE PIECE
        </div>
      </div>
    </>
  )
}

export default CharacterSection
