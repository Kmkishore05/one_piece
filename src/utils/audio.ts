import bgMusic from "../assets/onepiece.mp3";

class AudioSynthManager {

  private ctx: AudioContext | null = null;

  // External Background Music
  private bgAudio: HTMLAudioElement | null = null;

  public isPlaying: boolean = false;

  constructor() {

    // Initialize external music
    this.bgAudio = new Audio(bgMusic);

    this.bgAudio.loop = true;

    this.bgAudio.volume = 0.35;

    this.bgAudio.preload = "auto";
  }

  private init() {

    if (!this.ctx) {

      this.ctx = new (
        window.AudioContext ||
        (window as any).webkitAudioContext
      )();

    }
  }

  // ===============================
  // EXTERNAL BACKGROUND MUSIC
  // ===============================

  public startBackgroundMusic() {

    try {

      if (this.isPlaying) return;

      if (this.bgAudio) {

        this.bgAudio.play();

        this.isPlaying = true;

      }

    } catch (e) {

      console.error("Music failed:", e);

    }
  }

  public stopBackgroundMusic() {

    this.isPlaying = false;

    if (this.bgAudio) {

      this.bgAudio.pause();

      this.bgAudio.currentTime = 0;

    }
  }

  // ===============================
  // INTERNAL CLICK SOUND
  // ===============================

  public playClickSound() {

    try {

      this.init();

      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();

      const gain = this.ctx.createGain();

      osc.type = 'sine';

      osc.frequency.setValueAtTime(
        587.33,
        this.ctx.currentTime
      );

      osc.frequency.exponentialRampToValueAtTime(
        880,
        this.ctx.currentTime + 0.1
      );

      gain.gain.setValueAtTime(
        0.04,
        this.ctx.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.001,
        this.ctx.currentTime + 0.15
      );

      osc.connect(gain);

      gain.connect(this.ctx.destination);

      osc.start();

      osc.stop(this.ctx.currentTime + 0.15);

    } catch(e){}
  }

  // ===============================
  // INTERNAL HOVER SOUND
  // ===============================

  public playHoverSound() {

    try {

      this.init();

      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();

      const gain = this.ctx.createGain();

      osc.type = 'triangle';

      osc.frequency.setValueAtTime(
        440,
        this.ctx.currentTime
      );

      gain.gain.setValueAtTime(
        0.015,
        this.ctx.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.001,
        this.ctx.currentTime + 0.08
      );

      osc.connect(gain);

      gain.connect(this.ctx.destination);

      osc.start();

      osc.stop(this.ctx.currentTime + 0.08);

    } catch(e){}
  }

  // ===============================
  // INTERNAL SWORD SLASH
  // ===============================

  public playSwordSlash() {

    try {

      this.init();

      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();

      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';

      osc.frequency.setValueAtTime(
        800,
        this.ctx.currentTime
      );

      osc.frequency.exponentialRampToValueAtTime(
        200,
        this.ctx.currentTime + 0.2
      );

      const filter = this.ctx.createBiquadFilter();

      filter.type = 'highpass';

      filter.frequency.setValueAtTime(
        500,
        this.ctx.currentTime
      );

      gain.gain.setValueAtTime(
        0.03,
        this.ctx.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.001,
        this.ctx.currentTime + 0.25
      );

      osc.connect(filter);

      filter.connect(gain);

      gain.connect(this.ctx.destination);

      osc.start();

      osc.stop(this.ctx.currentTime + 0.25);

    } catch(e){}
  }
}

export const audioSynth = new AudioSynthManager();