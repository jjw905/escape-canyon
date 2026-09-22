const VW = MAP.view.w;
const VH = MAP.view.h;
const STEP = 1 / 60;
const G = 2057;
const FALL = 1333;
const RUN = 210;
const BODY_W = MAP.player.body[0];
const BODY_H = MAP.player.body[1];

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const images = {};
function img(src) {
  if (!images[src]) {
    const el = new Image();
    el.src = src;
    images[src] = el;
  }
  return images[src];
}

function preload() {
  for (const frame of Object.values(MAP.player.frames)) img(frame.src);
  img("assets/wind.png");
  for (const key of ["boot", "shield", "umbrella"]) img("assets/item/" + key + ".png");
  for (const name of ["idle", "walk0", "walk1", "walk2", "walk3", "prep", "ram", "recover"]) {
    img("assets/sheep/" + name + ".png");
  }
  for (const name of ["idle", "takeoff", "swoop0", "swoop1", "grab", "carry", "return"]) {
    img("assets/condor/" + name + ".png");
  }
  for (const name of ["idle", "walk0", "walk1", "walk2", "walk3"]) img("assets/squirrel/" + name + ".png");
  for (const name of ["walk0", "walk1", "walk2", "walk3", "heart", "laugh", "sit"]) {
    img("assets/wolf/" + name + ".png");
  }
  for (const screen of MAP.screens) {
    img(screen.bg);
    for (const plat of screen.platforms) img(plat.sprite);
  }
  for (const name of ["title", "pause", "pause_btns", "clear", "clear_btns", "over"]) {
    img("assets/ui/" + name + ".png");
  }
}

const game = {
  state: "Ready",
  screen: 0,
  player: null,
  live: {},
  drops: {},
  picked: {},
  noJump: 0,
  cover: 0,
  coverAge: 0,
  coverFade: 0,
  calls: [],
  acc: 0,
  debug: false,
  readyAt: 0,
  help: false,
  windStrong: false,
};

function freshPlayer() {
  return {
    x: (VW - BODY_W) / 2,
    y: 768 - BODY_H,
    vx: 0,
    vy: 0,
    grounded: true,
    facing: 1,
    charging: false,
    airCharging: false,
    charge: 0,
    airUsed: false,
    boot: 0,
    shield: 0,
    umbrella: 0,
    carried: false,
    knock: 0,
  };
}

function screenData() {
  return MAP.screens[game.screen];
}

function solids() {
  const list = screenData().platforms.map((p) => ({
    x: p.x,
    y: p.y + p.h / 2,
    w: p.w,
    h: Math.max(1, p.h / 2),
  }));
  if (screenData().id === "01") list.push({ x: 0, y: 768, w: VW, h: 32 });
  return list;
}

function body() {
  return { x: game.player.x, y: game.player.y, w: BODY_W, h: BODY_H };
}

function hit(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function windAt() {
  const box = body();
  for (const w of screenData().winds) {
    if (box.x + box.w < w.x || box.x > w.x + w.w || box.y + box.h < w.y || box.y > w.y + w.h) continue;
    const inset = w.h * 0.3;
    const cy = box.y + box.h / 2;
    const fromEdge = Math.min(cy - w.y, w.y + w.h - cy);
    const bodyInside = box.y >= w.y + inset && box.y + box.h <= w.y + w.h - inset;
    const zoneShorterThanBody = box.h > w.h - inset * 2;
    return { dir: w.dir, strong: bodyInside || (zoneShorterThanBody && fromEdge >= inset) };
  }
  return null;
}

function clampX() {
  const p = game.player;
  if (p.x < 0) {
    p.x = 0;
    if (p.vx < 0) p.vx = 0;
    if (p.knock < 0) p.knock = 0;
  }
  const max = VW - BODY_W;
  if (p.x > max) {
    p.x = max;
    if (p.vx > 0) p.vx = 0;
    if (p.knock > 0) p.knock = 0;
  }
}

function tierVy(seconds) {
  if (seconds < 0.2) return -270;
  if (seconds < 0.4) return -546;
  return -819;
}

function doJump(seconds) {
  game.calls.push("jump");
  const p = game.player;
  p.vy = tierVy(seconds);
  let vx = 0;
  if (Input.down.left) vx = -RUN;
  else if (Input.down.right) vx = RUN;
  if (vx !== 0) p.facing = vx < 0 ? -1 : 1;
  const wind = windAt();
  if (wind) vx += wind.dir * RUN * 0.05;
  p.vx = vx;
  p.grounded = false;
  p.charging = false;
  game.noJump = 0;
  AudioBus.jump();
}

function moveX(dx) {
  const p = game.player;
  const slices = Math.max(1, Math.ceil(Math.abs(dx) / 8));
  const step = dx / slices;
  for (let i = 0; i < slices; i++) {
    p.x += step;
    let stopped = false;
    for (const solid of solids()) {
      if (!hit(body(), solid)) continue;
      p.x = step > 0 ? solid.x - BODY_W : solid.x + solid.w;
      stopped = true;
      break;
    }
    clampX();
    if (stopped) break;
  }
  clampX();
}

function moveY(dy) {
  const p = game.player;
  const slices = Math.max(1, Math.ceil(Math.abs(dy) / 8));
  const step = dy / slices;
  for (let i = 0; i < slices; i++) {
    p.y += step;
    let stopped = false;
    for (const solid of solids()) {
      if (!hit(body(), solid)) continue;
      if (step > 0) {
        p.y = solid.y - BODY_H;
        p.vy = 0;
        p.grounded = true;
        p.airUsed = false;
      } else if (step < 0) {
        p.y = solid.y + solid.h;
        p.vy = 0;
      }
      stopped = true;
      break;
    }
    if (stopped) break;
  }
}

function probeGround() {
  const p = game.player;
  p.y += 1;
  let on = false;
  for (const solid of solids()) {
    if (hit(body(), solid)) on = true;
  }
  p.y -= 1;
  if (on && p.vy >= 0) {
    p.grounded = true;
    p.vy = 0;
    p.airUsed = false;
  }
}

function ensureMobs() {
  const id = screenData().id;
  if (game.live[id]) return game.live[id];
  const mobs = screenData().mobs.map((m, index) => ({
    ...m,
    id: id + "-" + m.kind + "-" + index,
    vx: m.kind === "condor" ? 0 : 40,
    phase: "patrol",
    timer: 0,
    frame: 0,
    petted: false,
    cooldown: 0,
    fade: 1,
    homeX: m.homeX ?? m.x,
    homeY: m.homeY ?? m.y,
  }));
  game.live[id] = mobs;
  return mobs;
}

function hurt() {
  const p = game.player;
  if (p.shield > 0) {
    p.shield = 0;
    return false;
  }
  AudioBus.hit();
  return true;
}

function ensureFlyCondor() {
  if (game.noJump < 10 || !game.player) return;
  const mobs = ensureMobs();
  if (mobs.some((m) => m.kind === "condor" && m.phase !== "gone")) return;
  const x = Math.max(0, Math.min(VW - 72, game.player.x));
  mobs.push({
    kind: "condor",
    id: screenData().id + "-condor-fly",
    x,
    y: -54,
    w: 72,
    h: 54,
    phase: "swoop",
    timer: 4,
    frame: 0,
    cooldown: 0,
    fade: 1,
    facing: 1,
    homeX: x,
    homeY: 24,
    flyin: true,
  });
  game.noJump = 0;
}

function updateMobs(dt) {
  ensureFlyCondor();
  const p = game.player;
  const box = body();
  for (const mob of ensureMobs()) {
    mob.frame += dt;
    if (mob.kind === "sheep") updateSheep(mob, dt, box);
    else if (mob.kind === "squirrel") updateSquirrel(mob, dt, box);
    else if (mob.kind === "wolf") updateWolf(mob, dt, box);
    else if (mob.kind === "condor") updateCondor(mob, dt, box);
  }
  for (const drop of game.drops[screenData().id] || []) {
    if (game.picked[drop.id] || !hit(box, drop)) continue;
    game.picked[drop.id] = true;
    grant(drop.type);
  }
  for (const item of screenData().items) {
    if (game.picked[item.id] || !hit(box, item)) continue;
    game.picked[item.id] = true;
    grant(item.type);
  }
}

function grant(type) {
  const p = game.player;
  if (type === "boot") p.boot = 10;
  if (type === "shield") p.shield = 30;
  if (type === "umbrella") p.umbrella = 20;
  AudioBus.item();
  game.calls.push("item");
}

function facePlayer(mob) {
  const cx = game.player.x + BODY_W / 2;
  mob.facing = cx < mob.x + mob.w / 2 ? -1 : 1;
}

function onFoot(mob) {
  return (mob.right ?? mob.x) - (mob.left ?? mob.x) > 2;
}

function nearMob(mob, box, times) {
  const extra = mob.w * times;
  return hit(box, { x: mob.x - extra, y: mob.y, w: mob.w + extra * 2, h: mob.h });
}

function updateSheep(mob, dt, box) {
  if (mob.phase === "gone") return;
  if (mob.phase === "fade") {
    mob.fade -= dt * 0.8;
    if (mob.fade <= 0) mob.phase = "gone";
    return;
  }
  if ((mob.cooldown ?? 0) > 0) mob.cooldown -= dt;
  if (!mob.dir) mob.dir = 1;
  if (mob.phase === "patrol" || mob.phase === "prep") facePlayer(mob);
  const near = nearMob(mob, box, 0.5);
  if (mob.phase === "patrol") {
    if (onFoot(mob)) {
      mob.x += 50 * dt * mob.dir;
      if (mob.x < mob.left) { mob.x = mob.left; mob.dir = 1; }
      if (mob.x > mob.right) { mob.x = mob.right; mob.dir = -1; }
    }
    if (near && (mob.cooldown ?? 0) <= 0) { mob.phase = "prep"; mob.timer = 0.25; }
  } else if (mob.phase === "prep") {
    mob.timer -= dt;
    if (mob.timer <= 0) { mob.phase = "ram"; mob.timer = 0.45; }
  } else if (mob.phase === "ram") {
    mob.x += 220 * dt * mob.facing;
    mob.timer -= dt;
    const reach = mob.w * 0.5 + 8;
    const minX = (mob.left ?? mob.x) - reach;
    const maxX = (mob.right ?? mob.x) + reach;
    if (hit(box, mob)) {
      if (hurt()) {
        const sign = mob.facing < 0 ? -1 : 1;
        game.player.knock = sign * mob.w;
        game.player.vx = sign * RUN;
        game.player.vy = 260;
        game.player.grounded = false;
      }
      mob.phase = "fade";
      mob.fade = 1;
    } else if (mob.timer <= 0 || mob.x < minX || mob.x > maxX) {
      mob.phase = "recover";
      mob.timer = 0.35;
    }
  } else {
    mob.timer -= dt;
    if (mob.timer <= 0) {
      mob.phase = "patrol";
      mob.cooldown = 2;
    }
  }
}

function updateSquirrel(mob, dt, box) {
  if ((mob.cooldown ?? 0) > 0) mob.cooldown -= dt;
  if (!mob.dir) mob.dir = 1;
  if (onFoot(mob)) {
    mob.x += 36 * dt * mob.dir;
    if (mob.x < mob.left) { mob.x = mob.left; mob.dir = 1; }
    if (mob.x > mob.right) { mob.x = mob.right; mob.dir = -1; }
  }
  facePlayer(mob);
  if (nearMob(mob, box, 2) && game.cover <= 0 && game.coverFade <= 0 && (mob.cooldown ?? 0) <= 0) {
    if (hurt()) {
      game.cover = 5;
      game.coverAge = 0;
    }
    mob.cooldown = 6.5;
  }
}

function updateWolf(mob, dt, box) {
  if (mob.phase === "sit") return;
  if (mob.phase === "happy") {
    mob.timer -= dt;
    if (mob.timer <= 0) mob.phase = "sit";
    return;
  }
  if (!mob.dir) mob.dir = 1;
  if (onFoot(mob)) {
    mob.x += 40 * dt * mob.dir;
    if (mob.x < mob.left) { mob.x = mob.left; mob.dir = 1; }
    if (mob.x > mob.right) { mob.x = mob.right; mob.dir = -1; }
  }
  facePlayer(mob);
  if (hit(box, mob) && Input.down.down && !mob.petted) {
    mob.petted = true;
    mob.phase = "happy";
    mob.anim = Math.random() < 0.5 ? "heart" : "laugh";
    mob.timer = 0.8;
    AudioBus.fox();
    const id = screenData().id;
    const types = ["boot", "shield", "umbrella"];
    const type = types[Math.floor(Math.random() * 3)];
    const size = type === "shield" ? [22, 26] : type === "umbrella" ? [28, 28] : [28, 27];
    game.drops[id] = game.drops[id] || [];
    game.drops[id].push({
      id: mob.id + "-drop",
      type,
      x: mob.x,
      y: mob.y - size[1],
      w: size[0],
      h: size[1],
    });
  }
}

function updateCondor(mob, dt, box) {
  facePlayer(mob);
  if (mob.phase === "patrol" && game.noJump >= 10) {
    mob.phase = "takeoff";
    mob.timer = 0.35;
    game.noJump = 0;
  } else if (mob.phase === "takeoff") {
    mob.timer -= dt;
    if (mob.timer <= 0) { mob.phase = "swoop"; mob.timer = 4; }
  } else if (mob.phase === "swoop") {
    const tx = game.player.x - mob.x;
    const ty = game.player.y - mob.y;
    const len = Math.hypot(tx, ty) || 1;
    mob.x += (tx / len) * 280 * dt;
    mob.y += (ty / len) * 280 * dt;
    mob.timer -= dt;
    if (hit(box, mob)) {
      if (hurt()) {
        mob.phase = "grab";
        mob.timer = 0.3;
        game.player.carried = true;
      } else {
        mob.phase = "return";
        mob.timer = 0;
      }
    } else if (mob.timer <= 0) {
      mob.phase = "return";
      mob.timer = 0.4;
    }
  } else if (mob.phase === "grab") {
    game.player.x = mob.x + mob.w / 2 - BODY_W / 2;
    game.player.y = Math.max(0, mob.y + mob.h - BODY_H);
    game.player.vx = 0;
    game.player.vy = 0;
    mob.timer -= dt;
    if (mob.timer <= 0) {
      mob.phase = "carry";
      mob.timer = 0.7;
    }
  } else if (mob.phase === "carry") {
    mob.y -= 180 * dt;
    if (mob.y < 8) mob.y = 8;
    game.player.x = mob.x + mob.w / 2 - BODY_W / 2;
    game.player.y = Math.max(0, mob.y + mob.h - BODY_H);
    game.player.vx = 0;
    game.player.vy = 0;
    mob.timer -= dt;
    if (mob.timer <= 0) {
      game.player.carried = false;
      game.player.vy = 260;
      mob.phase = "return";
      mob.timer = 0.5;
    }
  } else if (mob.phase === "return") {
    const dx = mob.homeX - mob.x;
    const dy = mob.homeY - mob.y;
    if (Math.hypot(dx, dy) < 6) {
      mob.x = mob.homeX;
      mob.y = mob.homeY;
      mob.phase = "patrol";
      mob.timer = 0;
    } else {
      mob.x += dx * Math.min(1, dt * 4);
      mob.y += dy * Math.min(1, dt * 4);
    }
  }
}

const SUMMIT_FLAG = 234;

function crossScreen() {
  const p = game.player;
  if (p.carried) return;
  if (game.screen === MAP.screens.length - 1 && p.y + BODY_H <= SUMMIT_FLAG) {
    game.state = "Clear";
    game.calls.push("clear");
    return;
  }
  if (p.y + BODY_H <= 0) {
    if (game.screen === MAP.screens.length - 1) {
      game.state = "Clear";
      game.calls.push("clear");
      return;
    }
    game.screen += 1;
    p.y += VH;
    for (const solid of solids()) {
      if (!hit(body(), solid)) continue;
      p.y = solid.y - BODY_H;
      p.vy = 0;
      p.grounded = true;
    }
    game.calls.push("screen");
  } else if (p.y >= VH && game.screen > 0) {
    game.screen -= 1;
    p.y -= VH;
    game.calls.push("screen");
  }
}

function step(dt) {
  game.calls = ["input", "move"];
  const p = game.player;
  const jump = Input.takeJump();
  if (p.carried) {
    updateMobs(dt);
    crossScreen();
    clampX();
    game.calls.push("carry");
    return;
  }
  if (jump.press && p.grounded && !p.charging) {
    p.charging = true;
    p.charge = 0;
    p.vx = 0;
    AudioBus.crouch();
    game.calls.push("crouch");
  }
  if (p.charging && p.grounded) {
    p.charge = Math.min(0.6, p.charge + dt);
    p.vx = 0;
    p.vy = 0;
  }
  if (jump.release && p.charging && p.grounded) {
    doJump(p.charge);
    p.charging = false;
  }
  if (jump.press && !p.grounded && p.boot > 0 && !p.airUsed && !p.charging) {
    p.airCharging = true;
    p.charge = 0;
  }
  if (p.airCharging) p.charge += dt;
  if (jump.release && p.airCharging) {
    doJump(Math.min(0.6, p.charge));
    p.airUsed = true;
    p.airCharging = false;
  }
  if (p.knock) {
    const dir = Math.sign(p.knock);
    const dist = Math.min(Math.abs(p.knock), RUN * dt);
    p.knock -= dir * dist;
    if (Math.abs(p.knock) < 0.4) p.knock = 0;
    p.vx = dir * RUN;
  } else if (p.grounded && !p.charging) {
    p.vx = 0;
  }

  p.grounded = false;
  moveX(p.vx * dt);
  moveY(p.vy * dt);
  probeGround();
  game.calls.push("collide");
  if (!p.grounded) {
    p.vy += G * dt;
    const cap = p.umbrella > 0 ? FALL * 0.5 : FALL;
    if (p.vy > cap) p.vy = cap;
    game.calls.push("gravity");
  }
  game.noJump += dt;
  p.boot = Math.max(0, p.boot - dt);
  p.shield = Math.max(0, p.shield - dt);
  p.umbrella = Math.max(0, p.umbrella - dt);
  if (game.cover > 0) {
    game.coverAge += dt;
    game.cover = Math.max(0, game.cover - dt);
    if (game.cover === 0) game.coverFade = 1.2;
  } else {
    game.coverFade = Math.max(0, game.coverFade - dt);
  }
  updateMobs(dt);
  crossScreen();
  clampX();
  const wind = windAt();
  game.windStrong = !!(wind && wind.strong);
}

function spriteFrame(mob) {
  const n = Math.floor(mob.frame * 8) % 4;
  if (mob.kind === "sheep") {
    if (mob.phase === "prep") return "assets/sheep/prep.png";
    if (mob.phase === "ram" || mob.phase === "fade") return "assets/sheep/ram.png";
    if (mob.phase === "recover") return "assets/sheep/recover.png";
    return onFoot(mob) ? "assets/sheep/walk" + n + ".png" : "assets/sheep/idle.png";
  }
  if (mob.kind === "squirrel") {
    return onFoot(mob) ? "assets/squirrel/walk" + n + ".png" : "assets/squirrel/idle.png";
  }
  if (mob.kind === "wolf") {
    if (mob.phase === "sit") return "assets/wolf/sit.png";
    if (mob.phase === "happy") return "assets/wolf/" + mob.anim + ".png";
    return onFoot(mob) ? "assets/wolf/walk" + n + ".png" : "assets/wolf/walk0.png";
  }
  if (mob.phase === "takeoff") return "assets/condor/takeoff.png";
  if (mob.phase === "swoop") return "assets/condor/swoop" + (Math.floor(mob.frame * 8) % 2) + ".png";
  if (mob.phase === "grab") return "assets/condor/grab.png";
  if (mob.phase === "carry") return "assets/condor/carry.png";
  if (mob.phase === "return") return "assets/condor/return.png";
  return "assets/condor/idle.png";
}

function titleSlide(finalY, delay, now) {
  const t = (now - game.readyAt) / 1000 - delay;
  const travel = Math.max(0, VH - finalY);
  if (t <= 0) return finalY + travel;
  const k = Math.min(1, t / 0.5);
  const e = 1 - (1 - k) * (1 - k);
  return Math.round(finalY + (1 - e) * travel);
}

function blitPart(src, sx, sy, sw, sh, x, y, w, h) {
  const el = img(src);
  if (!el.complete || !el.naturalWidth) return;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(el, sx, sy, sw, sh, Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

function blit(src, x, y, w, h, flip) {
  const el = img(src);
  if (!el.complete || !el.naturalWidth) return;
  ctx.imageSmoothingEnabled = false;
  const dx = Math.round(x);
  const dy = Math.round(y);
  const dw = Math.round(w);
  const dh = Math.round(h);
  if (!flip) {
    ctx.drawImage(el, dx, dy, dw, dh);
    return;
  }
  ctx.save();
  ctx.translate(dx + dw, dy);
  ctx.scale(-1, 1);
  ctx.drawImage(el, 0, 0, dw, dh);
  ctx.restore();
}

function drawPlayer() {
  const p = game.player;
  let key = "idle";
  if (p.charging && p.grounded) key = "crouch";
  else if (p.vy < -20) key = "jump";
  else if (!p.grounded) key = "fall";
  const frame = MAP.player.frames[key];
  const x = p.x + BODY_W / 2 - frame.w / 2;
  const y = p.y + BODY_H - frame.h;
  blit(frame.src, x, y, frame.w, frame.h, p.facing < 0);
}

function drawEffects() {
  const p = game.player;
  const icons = [];
  if (p.boot > 0) icons.push(["boot", p.boot]);
  if (p.shield > 0) icons.push(["shield", p.shield]);
  if (p.umbrella > 0) icons.push(["umbrella", p.umbrella]);
  let x = p.x + BODY_W / 2 - icons.length * 16;
  for (const [type, time] of icons) {
    const blink = time < 3 && Math.floor(performance.now() / (1000 / 3)) % 2 === 0;
    if (!blink) blit("assets/item/" + type + ".png", x, p.y - 28, 28, 28, false);
    x += 32;
  }
}

function drawWorld() {
  const data = screenData();
  blit(data.bg, 0, 0, VW, VH, false);
  const shift = (performance.now() / 16) % 576;
  for (const w of data.winds) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(w.x, w.y, w.w, w.h);
    ctx.clip();
    blit("assets/wind.png", w.x - shift * w.dir, w.y, w.w, w.h, w.dir < 0);
    ctx.restore();
  }
  for (const plat of data.platforms) blit(plat.sprite, plat.x, plat.y, plat.w, plat.h, false);
  for (const item of data.items) {
    if (!game.picked[item.id]) blit("assets/item/" + item.type + ".png", item.x, item.y, item.w, item.h, false);
  }
  for (const drop of game.drops[data.id] || []) {
    if (!game.picked[drop.id]) blit("assets/item/" + drop.type + ".png", drop.x, drop.y, drop.w, drop.h, false);
  }
  if (game.state === "Play" || game.state === "Pause" || game.state === "Clear" || game.state === "Fail") {
    for (const mob of ensureMobs()) {
      if (mob.phase === "gone") continue;
      const flip = (mob.facing || 1) < 0;
      if (mob.phase === "fade") {
        ctx.save();
        ctx.globalAlpha = Math.max(0, mob.fade);
        blit(spriteFrame(mob), mob.x, mob.y, mob.w, mob.h, flip);
        ctx.restore();
      } else {
        blit(spriteFrame(mob), mob.x, mob.y, mob.w, mob.h, flip);
      }
    }
    if (game.player) drawPlayer();
  }
}

function drawCover() {
  if (game.cover <= 0 && game.coverFade <= 0) return;
  const w = Math.round(VW * 0.7);
  const el = img("assets/squirrel/idle.png");
  const h = el.naturalWidth ? Math.round(w * (el.naturalHeight / el.naturalWidth)) : Math.round(VH * 0.4);
  const alpha = game.cover > 0 ? Math.min(1, game.coverAge / 1.5) : Math.max(0, game.coverFade / 1.2);
  ctx.save();
  ctx.globalAlpha = alpha;
  blit("assets/squirrel/idle.png", (VW - w) / 2, (VH - h) / 2, w, h, false);
  ctx.restore();
}

function posterBox(x, y, w, h, scale, dy) {
  return { x: x * scale, y: dy + y * scale, w: w * scale, h: h * scale };
}

function drawTitle() {
  ctx.fillStyle = "#14080c";
  ctx.fillRect(0, 0, VW, VH);
  const el = img("assets/ui/title.png");
  const srcW = el.naturalWidth || 1024;
  const srcH = el.naturalHeight || 1024;
  const dw = VW;
  const dh = Math.round(dw * (srcH / srcW));
  const dy = Math.round((VH - dh) / 2);
  const scale = dw / srcW;
  const now = performance.now();
  const bands = [
    { sy: 0, sh: 650, delay: 0 },
    { sy: 650, sh: 100, delay: 1, hit: "start" },
    { sy: 755, sh: srcH - 755, delay: 2, hit: "help", hitH: 110 },
  ];
  game.titleHit = {};
  for (const band of bands) {
    const finalY = dy + band.sy * scale;
    const y = titleSlide(finalY, band.delay, now);
    const h = band.sh * scale;
    blitPart("assets/ui/title.png", 0, band.sy, srcW, band.sh, 0, y, dw, h);
    if (!band.hit) continue;
    game.titleHit[band.hit] = {
      x: 320 * scale,
      y,
      w: 470 * scale,
      h: (band.hitH || band.sh) * scale,
    };
  }
}

function drawMenu(word, buttons) {
  ctx.fillStyle = "rgba(20, 8, 12, 0.72)";
  ctx.fillRect(0, 0, VW, VH);
  const wordEl = img(word);
  const wordW = Math.round(VW * 0.45);
  const wordH = wordEl.naturalWidth ? Math.round(wordW * (wordEl.naturalHeight / wordEl.naturalWidth)) : 120;
  const btnEl = img(buttons);
  const btnW = Math.round(VW * 0.28);
  const btnH = btnEl.naturalWidth ? Math.round(btnW * (btnEl.naturalHeight / btnEl.naturalWidth)) : 80;
  const yTitle = Math.round(VH * 0.29);
  const yBtn = Math.round(VH * 0.60);
  blit(word, Math.round((VW - wordW) / 2), yTitle, wordW, wordH, false);
  const x = Math.round((VW - btnW) / 2);
  blit(buttons, x, yBtn, btnW, btnH, false);
  game.titleHit = {
    top: { x, y: yBtn, w: btnW, h: btnH * 0.46 },
    bottom: { x, y: yBtn + btnH * 0.55, w: btnW, h: btnH * 0.45 },
  };
}

function drawPause() {
  drawMenu("assets/ui/pause.png", "assets/ui/pause_btns.png");
}

function drawClear() {
  drawMenu("assets/ui/clear.png", "assets/ui/clear_btns.png");
}

function drawFail() {
  drawMenu("assets/ui/over.png", "assets/ui/clear_btns.png");
}

function drawButton(label, x, y, w, h) {
  ctx.fillStyle = "#5c2a24";
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = "#f6d7b0";
  ctx.font = "24px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(label, x + w / 2, y + 36);
}

function drawHelp() {
  ctx.fillStyle = "rgba(12,4,8,0.82)";
  ctx.fillRect(0, 0, VW, VH);
  ctx.fillStyle = "#f6d7b0";
  ctx.textAlign = "left";
  ctx.font = "20px sans-serif";
  const lines = [
    "좌우 방향키로 뛰는 방향을 정한다.",
    "스페이스를 누르는 동안 웅크리고,",
    "떼면 뛴다. 짧게 누르면 낮고,",
    "길게 누르면 높다.",
    "공중에서도 좌우 방향키로 방향을 바꾼다.",
    "아래 방향키로 여우를 쓰다듬는다.",
  ];
  lines.forEach((line, i) => ctx.fillText(line, 36, 180 + i * 36));
  drawButton("닫기", VW / 2 - 90, 520, 180, 56);
  game.titleHit = { help: { x: VW / 2 - 90, y: 520, w: 180, h: 56 } };
}

function drawDebug() {
  if (!game.debug || !game.player) return;
  const p = game.player;
  ctx.strokeStyle = "#7dffb2";
  ctx.strokeRect(p.x, p.y, BODY_W, BODY_H);
  for (const solid of solids()) ctx.strokeRect(solid.x, solid.y, solid.w, solid.h);
  ctx.fillStyle = "#d8ffd0";
  ctx.textAlign = "left";
  ctx.font = "14px sans-serif";
  const lines = [
    game.state + " 맵 " + screenData().id,
    "x " + p.x.toFixed(1) + " y " + p.y.toFixed(1),
    "vx " + p.vx.toFixed(1) + " vy " + p.vy.toFixed(1),
    "grounded " + p.grounded,
    game.calls.join(" → "),
    game.routeReport || "길 검사 전",
    game.itemReport || "",
  ];
  lines.forEach((line, i) => ctx.fillText(line, 8, 18 + i * 16));
}

function draw(now) {
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, VW, VH);
  if (game.state === "Ready") {
    ctx.fillStyle = "#14080c";
    ctx.fillRect(0, 0, VW, VH);
  }
  if (game.state === "Play" || game.state === "Pause" || game.state === "Clear" || game.state === "Fail") {
    drawWorld();
    drawEffects();
    drawCover();
  }
  if (game.state === "Ready" && !game.help) drawTitle();
  if (game.help) drawHelp();
  if (game.state === "Pause") drawPause();
  if (game.state === "Clear") drawClear();
  if (game.state === "Fail") drawFail();
  drawDebug();
  AudioBus.setWind(game.state === "Play" && game.windStrong);
}

function pointer(ev) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((ev.clientX - rect.left) * VW) / rect.width,
    y: ((ev.clientY - rect.top) * VH) / rect.height,
  };
}

function inside(pt, box) {
  return box && pt.x >= box.x && pt.x <= box.x + box.w && pt.y >= box.y && pt.y <= box.y + box.h;
}

function goTitle() {
  game.state = "Ready";
  game.help = false;
  game.readyAt = performance.now();
  game.player = null;
}

canvas.addEventListener("pointerdown", (ev) => {
  AudioBus.unlock();
  const pt = pointer(ev);
  const hitbox = game.titleHit || {};
  if (game.help && inside(pt, hitbox.help)) {
    game.help = false;
    return;
  }
  if (game.state === "Ready" && !game.help) {
    if (inside(pt, hitbox.start)) startPlay();
    else if (inside(pt, hitbox.help)) game.help = true;
  } else if (game.state === "Pause") {
    if (inside(pt, hitbox.top)) game.state = "Play";
    else if (inside(pt, hitbox.bottom)) goTitle();
  } else if (game.state === "Clear" || game.state === "Fail") {
    if (inside(pt, hitbox.top)) startPlay();
    else if (inside(pt, hitbox.bottom)) goTitle();
  }
});

function startPlay() {
  game.state = "Play";
  game.help = false;
  game.screen = 0;
  game.player = freshPlayer();
  game.live = {};
  game.drops = {};
  game.picked = {};
  game.noJump = 0;
  game.cover = 0;
  game.coverAge = 0;
  game.coverFade = 0;
  game.acc = 0;
  game.calls = ["start"];
}

let last = 0;

function itemPlaceReport() {
  const bad = [];
  for (const sc of MAP.screens) {
    for (const it of sc.items) {
      const feet = it.y + it.h;
      const host = sc.platforms.find((p) => Math.abs(feet - (p.y + p.h / 2)) <= 3 && it.x + it.w > p.x + 1 && it.x < p.x + p.w - 1);
      if (!host || it.x < 0 || it.x + it.w > VW || feet > VH) bad.push(sc.id);
    }
  }
  return bad.length ? "아이템 벗어남" : "아이템 발판 위";
}

function auditClimb() {
  const keep = {
    screen: game.screen,
    state: game.state,
    player: game.player,
    live: game.live,
    acc: game.acc,
    calls: game.calls,
    edgePress: Edge.jumpPress,
    edgeRelease: Edge.jumpRelease,
    down: { ...Input.down },
    pressed: { ...Input.pressed },
    released: { ...Input.released },
  };
  const mute = {};
  for (const k of ["crouch", "jump", "hit", "fox", "item"]) {
    mute[k] = AudioBus[k];
    AudioBus[k] = function () {};
  }
  function stand(p) { return p.y + p.h / 2; }
  function onPlat(p) {
    const feet = game.player.y + BODY_H;
    return game.player.grounded && Math.abs(feet - stand(p)) < 8 && game.player.x + BODY_W > p.x + 2 && game.player.x < p.x + p.w - 2;
  }
  function hop(si, from, to) {
    const dir = to.x >= from.x ? "right" : "left";
    game.screen = si;
    game.state = "Play";
    game.live = {};
    game.player = freshPlayer();
    game.player.x = dir === "right" ? from.x + from.w - BODY_W : from.x;
    game.player.y = stand(from) - BODY_H;
    game.player.grounded = true;
    game.player.vy = 0;
    game.player.vx = 0;
    Input.down = {};
    Edge.jumpPress = true;
    Edge.jumpRelease = false;
    step(1 / 60);
    for (let i = 0; i < 36; i++) step(1 / 60);
    Input.down[dir] = true;
    Edge.jumpRelease = true;
    step(1 / 60);
    for (let i = 0; i < 140; i++) {
      step(1 / 60);
      if (onPlat(to) && game.screen === si) return true;
      if (game.player.y > 980) return false;
    }
    return false;
  }
  const fails = [];
  try {
    for (let si = 0; si < MAP.screens.length; si++) {
      const all = MAP.screens[si].platforms;
      const route = all.slice(all.length / 2);
      if (si === 0) {
        const first = route[0];
        game.screen = 0;
        game.live = {};
        game.state = "Play";
        game.player = freshPlayer();
        game.player.x = 338;
        game.player.y = 768 - BODY_H;
        game.player.grounded = true;
        Input.down = {};
        Edge.jumpPress = true;
        step(1 / 60);
        for (let i = 0; i < 36; i++) step(1 / 60);
        Input.down.right = true;
        Edge.jumpRelease = true;
        step(1 / 60);
        let ok = false;
        for (let i = 0; i < 140; i++) {
          step(1 / 60);
          if (onPlat(first)) { ok = true; break; }
        }
        if (!ok) fails.push("01바닥");
      }
      for (let i = 0; i < route.length - 1; i++) {
        if (!hop(si, route[i], route[i + 1])) fails.push(MAP.screens[si].id);
      }
    }
  } finally {
    for (const k of Object.keys(mute)) AudioBus[k] = mute[k];
    game.screen = keep.screen;
    game.state = keep.state;
    game.player = keep.player;
    game.live = keep.live;
    game.acc = keep.acc;
    game.calls = keep.calls;
    Edge.jumpPress = keep.edgePress;
    Edge.jumpRelease = keep.edgeRelease;
    Input.down = keep.down;
    Input.pressed = keep.pressed;
    Input.released = keep.released;
  }
  return fails.length ? "길 막힘 " + fails[0] : "오른쪽 길 통과";
}

function frame(now) {
  if (!last) last = now;
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (Input.pressed.pause) {
    if (game.state === "Play") game.state = "Pause";
    else if (game.state === "Pause") game.state = "Play";
  }
  if (Input.pressed.debug) {
    game.debug = !game.debug;
    if (game.debug && !game.routeReport) game.routeReport = auditClimb();
  }
  if (game.state === "Ready" && Input.pressed.start) startPlay();
  if (game.state === "Play") Input.latch();
  else Input.takeJump();
  if (game.state === "Play") {
    game.acc += dt;
    if ((Edge.jumpPress || Edge.jumpRelease) && game.acc < STEP) game.acc = STEP;
    let steps = 0;
    while (game.acc >= STEP && steps < 5) {
      step(STEP);
      game.acc -= STEP;
      steps += 1;
      if (game.state !== "Play") break;
    }
  }
  draw(now);
  Input.endFrame();
  requestAnimationFrame(frame);
}

preload();
game.readyAt = performance.now();
game.player = freshPlayer();
game.itemReport = itemPlaceReport();
requestAnimationFrame(frame);
