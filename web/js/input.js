const Edge = { jumpPress: false, jumpRelease: false };

const Input = {
  down: {},
  pressed: {},
  released: {},
  latch() {
    if (this.pressed.jump) Edge.jumpPress = true;
    if (this.released.jump) Edge.jumpRelease = true;
  },
  takeJump() {
    const edge = { press: Edge.jumpPress, release: Edge.jumpRelease };
    Edge.jumpPress = false;
    Edge.jumpRelease = false;
    return edge;
  },
  endFrame() {
    this.pressed = {};
    this.released = {};
  },
  set(action, on) {
    const was = !!this.down[action];
    if (on && !was) this.pressed[action] = true;
    if (!on && was) this.released[action] = true;
    this.down[action] = on;
  },
};

const KEYS = {
  ArrowLeft: "left",
  ArrowRight: "right",
  ArrowDown: "down",
  Space: "jump",
  KeyD: "debug",
  Enter: "start",
  Escape: "pause",
};

window.addEventListener("keydown", (e) => {
  const action = KEYS[e.code];
  if (!action) return;
  e.preventDefault();
  AudioBus.unlock();
  Input.set(action, true);
});

window.addEventListener("keyup", (e) => {
  const action = KEYS[e.code];
  if (!action) return;
  e.preventDefault();
  Input.set(action, false);
});

