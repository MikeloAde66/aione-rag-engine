class AudioEngine {
  private ctx: AudioContext | null = null;
  private osc: OscillatorNode | null = null;
  private gain: GainNode | null = null;

  public toggle(kpIndex: number): boolean {
    if (this.osc) {
      this.osc.stop();
      this.osc.disconnect();
      this.osc = null;
      return false;
    }

    this.ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    this.osc = this.ctx.createOscillator();
    this.gain = this.ctx.createGain();

    this.osc.frequency.value = 432.0 + kpIndex * 0.5;
    this.osc.type = "sine";

    this.gain.gain.setValueAtTime(0.05, this.ctx.currentTime);

    this.osc.connect(this.gain);
    this.gain.connect(this.ctx.destination);
    this.osc.start();

    return true;
  }

  public updateFrequency(kpIndex: number) {
    if (this.osc && this.ctx) {
      this.osc.frequency.setValueAtTime(432.0 + kpIndex * 0.5, this.ctx.currentTime);
    }
  }
}

export const audioEngine = new AudioEngine();
