const JUMP_SPLIT = 0.174;

function wavBuffer(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

const AudioBus = {
  ctx: null,
  buffers: null,
  loading: null,
  windGain: null,
  strong: false,
  leapSrc: null,
  leapFrom: 0,
  leapAt: 0,
  leapTimer: 0,
  unlock() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.loading = this.load();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
  },
  async load() {
    const buffers = {};
    await Promise.all(Object.keys(SFX_B64).map(async (name) => {
      buffers[name] = await this.ctx.decodeAudioData(wavBuffer(SFX_B64[name]));
    }));
    this.buffers = buffers;
    this.startWind();
  },
  startWind() {
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers.wind;
    src.loop = true;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.12;
    src.connect(gain);
    gain.connect(this.ctx.destination);
    src.start();
    this.windGain = gain;
  },
  play(name, gainValue) {
    if (!this.buffers || !this.buffers[name]) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers[name];
    const gain = this.ctx.createGain();
    gain.gain.value = gainValue;
    src.connect(gain);
    gain.connect(this.ctx.destination);
    src.start();
  },
  playJump(offset, stopAfter) {
    if (!this.buffers || !this.buffers.jump) return;
    if (this.leapSrc) {
      try { this.leapSrc.stop(); } catch (e) { /* already stopped */ }
      this.leapSrc = null;
    }
    clearTimeout(this.leapTimer);
    const src = this.ctx.createBufferSource();
    src.buffer = this.buffers.jump;
    const gain = this.ctx.createGain();
    gain.gain.value = 0.7;
    src.connect(gain);
    gain.connect(this.ctx.destination);
    const now = this.ctx.currentTime;
    src.start(now, offset);
    this.leapSrc = src;
    this.leapFrom = offset;
    this.leapAt = now;
    src.onended = () => {
      if (this.leapSrc === src) this.leapSrc = null;
    };
    if (stopAfter) {
      this.leapTimer = setTimeout(() => {
        try { src.stop(); } catch (e) { /* already stopped */ }
        if (this.leapSrc === src) this.leapSrc = null;
      }, stopAfter * 1000);
    }
  },
  crouch() {
    this.playJump(0, JUMP_SPLIT);
  },
  jump() {
    const pos = this.leapFrom + (this.ctx ? this.ctx.currentTime - this.leapAt : 0);
    if (this.leapSrc && pos > 0 && pos < JUMP_SPLIT) {
      clearTimeout(this.leapTimer);
      this.leapTimer = 0;
      return;
    }
    this.playJump(JUMP_SPLIT, 0);
  },
  hit() {
    this.play("turu", 0.7);
  },
  fox() {
    this.play("wolf", 0.8);
  },
  item() {
    this.play("item", 0.7);
  },
  setWind(strong) {
    if (!this.windGain || this.strong === strong) return;
    this.strong = strong;
    this.windGain.gain.setTargetAtTime(strong ? 0.7 : 0.12, this.ctx.currentTime, 0.08);
  },
};
