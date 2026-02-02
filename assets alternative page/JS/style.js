


bgGlitch.classList.add("fx-bgdrift");
bgGlitch.classList.add("fx-bgpulse");

function buildBgGlitchBackground() {
  const n = 10 + Math.floor(Math.random() * 10);
  const parts = [];

  for (let i = 0; i < n; i++) {
    const y = Math.random() * 100;
    const h = 2 + Math.floor(Math.random() * 6);
    const a = (0.05 + Math.random() * 0.16).toFixed(3);

    const start = Math.floor(Math.random() * 20);
    const mid1 = start + 10 + Math.floor(Math.random() * 25);
    const mid2 = mid1 + 10 + Math.floor(Math.random() * 25);
    const end = Math.min(100, mid2 + 10 + Math.floor(Math.random() * 25));

    const g = `linear-gradient(to right,
      rgba(0,0,0,0) 0%,
      rgba(120,255,150,0) ${start}%,
      rgba(120,255,150,${a}) ${mid1}%,
      rgba(120,255,150,${a}) ${mid2}%,
      rgba(120,255,150,0) ${end}%,
      rgba(0,0,0,0) 100%
    ) 0 ${y.toFixed(2)}% / 100% ${h}px no-repeat`;

    parts.push(g);
  }

  return parts.join(",");
}

function refreshBgGlitch() {
  bgGlitch.style.background = buildBgGlitchBackground();
}

refreshBgGlitch();
setInterval(refreshBgGlitch, 220);

const glitchStyle = document.createElement("style");
glitchStyle.textContent = `
@keyframes glitchJitter {
  0% { transform: translateX(0px); opacity: 0; }
  10% { opacity: 1; }
  30% { transform: translateX(-14px); }
  60% { transform: translateX(10px); }
  100% { transform: translateX(0px); opacity: 0; }
}
.fx-glitch { animation: glitchJitter 140ms steps(2,end) 1; }
`;
document.head.appendChild(glitchStyle);

function buildGlitchBackground() {
  const n = 6 + Math.floor(Math.random() * 8);
  const parts = [];
  for (let i = 0; i < n; i++) {
    const y = Math.random() * 100;
    const h = 1 + Math.floor(Math.random() * 3);
    const a = (0.08 + Math.random() * 0.18).toFixed(3);
    const start = Math.floor(Math.random() * 25);
    const mid1 = start + 10 + Math.floor(Math.random() * 25);
    const mid2 = mid1 + 10 + Math.floor(Math.random() * 25);
    const end = Math.min(100, mid2 + 10 + Math.floor(Math.random() * 25));
    const g = `linear-gradient(to right,
      rgba(0,0,0,0) 0%,
      rgba(110,255,140,0) ${start}%,
      rgba(110,255,140,${a}) ${mid1}%,
      rgba(110,255,140,${a}) ${mid2}%,
      rgba(110,255,140,0) ${end}%,
      rgba(0,0,0,0) 100%
    ) 0 ${y.toFixed(2)}% / 100% ${h}px no-repeat`;
    parts.push(g);
  }
  return parts.join(",");
}

let glitchBusy = false;

function triggerGlitch() {
  if (glitchBusy) return;
  glitchBusy = true;

  glitchLines.style.background = buildGlitchBackground();
  glitchLines.style.opacity = (0.35 + Math.random() * 0.35).toFixed(3);

  glitchLines.classList.remove("fx-glitch");
  void glitchLines.offsetWidth;
  glitchLines.classList.add("fx-glitch");

  setTimeout(() => {
    glitchLines.style.opacity = "0";
    glitchBusy = false;
  }, 170);
}

function glitchLoop() {
  const r = Math.random();
  if (r < 0.22) triggerGlitch();
  setTimeout(glitchLoop, 90 + Math.random() * 220);
}
glitchLoop();

// Fonts
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap";
document.head.appendChild(link);

const style = document.createElement("style");
style.textContent = `
@font-face {
  font-family: '5 Computers In Love';
  src: url('./FONTS/5Computers-In-Love.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
`;
document.head.appendChild(style);

let titrecomplet = "Five Nights at Diddy's 3";
let L = titrecomplet.split(" ");
for (let i = 0; i < L.length; i++) mot(L[i]);

function mot(part) {
  const mots = document.createElement("h1");
  mots.textContent = part;
  mots.style.margin = "0";
  mots.style.lineHeight = "0.99";
  titre.appendChild(mots);
}

// Menu (UI)
const navbar = document.createElement("ul");
navbar.style.marginTop = "86px";
navbar.style.marginLeft = "127px";
uiLayer.appendChild(navbar);

L = [["New Projects", "https://www.youtube.com/shorts/vj-aKQOUBGA"], ["All Projects", "https://www.youtube.com/shorts/qj8xH4PoPsg"], 
["Nightmare", "https://youtube.com"], ["Retour", "../index.html"]];
for (let i = 0; i < L.length; i++) navitem(L[i], i);

function navitem(part, n) {
  const elem = document.createElement("li");
  elem.textContent = part[0];
  elem.style.cursor = "pointer";
  elem.addEventListener("click", () => {
    window.open(part[1], "_self");
  });
  elem.style.fontFamily = "'5 Computers In Love', monospace";
  elem.style.fontWeight = "400";
  elem.style.fontSize = "50px";
  elem.style.listStyle = "none";
  elem.style.wordSpacing = "-25px";
  elem.style.transform = "scaleY(0.75)";
  elem.style.marginBottom = "20px";
  navbar.appendChild(elem);
}

profil.style.maskImage = profil.style.webkitMaskImage;
bgLayer.appendChild(profil);

function fxLayer(z) {
  const d = document.createElement("div");
  d.style.position = "absolute";
  d.style.inset = "0";
  d.style.pointerEvents = "none";
  d.style.zIndex = String(z);
  bgLayer.appendChild(d);
  return d;
}

const scan = fxLayer(3);
scan.style.mixBlendMode = "screen";
scan.style.opacity = "0.25";
scan.style.background = `
repeating-linear-gradient(
  to bottom,
  rgba(0,255,120,0.25) 0px,
  rgba(0,255,120,0.25) 5px,
  rgba(0,0,0,0) 5px,
  rgba(0,0,0,0) 10px
)
`;