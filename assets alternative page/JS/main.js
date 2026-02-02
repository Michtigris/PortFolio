const html = document.documentElement;
html.style.height = "100%";
html.style.margin = "0";
html.style.padding = "0";

const body = document.body;
body.style.backgroundColor = "black";
body.style.margin = "0";
body.style.padding = "0";
body.style.overflow = "hidden";

const Main = document.createElement("main");
Main.style.margin = "0 57px";     // bande noire gauche/droite
Main.style.padding = "0";
Main.style.height = "100vh";
Main.style.backgroundColor = "#000";
Main.style.color = "white";
Main.style.textShadow = "0 0 0.8em limegreen, 0 0 0.8em green";
Main.style.position = "relative";
Main.style.overflow = "hidden";
body.appendChild(Main);

/* Layers Setup */
const bgLayer = document.createElement("div");
bgLayer.style.position = "absolute";
bgLayer.style.inset = "0";
bgLayer.style.zIndex = "1";
Main.appendChild(bgLayer);



const uiLayer = document.createElement("div");
uiLayer.style.position = "relative";
uiLayer.style.zIndex = "3";
Main.appendChild(uiLayer);

const bgGlitch = document.createElement("div");
bgGlitch.style.position = "absolute";
bgGlitch.style.inset = "0";
bgGlitch.style.pointerEvents = "none";
bgGlitch.style.zIndex = "50";
bgGlitch.style.mixBlendMode = "screen";
bgGlitch.style.opacity = "0.22";
bgLayer.appendChild(bgGlitch);

const bgGlitchStyle = document.createElement("style");
bgGlitchStyle.textContent = `
@keyframes bgDrift {
  0% { transform: translateX(0px); }
  50% { transform: translateX(-18px); }
  100% { transform: translateX(0px); }
}
@keyframes bgPulse {
  0% { opacity: 0.18; }
  50% { opacity: 0.30; }
  100% { opacity: 0.18; }
}
.fx-bgdrift { animation: bgDrift 1.6s steps(2,end) infinite; }
.fx-bgpulse { animation: bgPulse 2.2s linear infinite; }
`;
document.head.appendChild(bgGlitchStyle);

const glitchLines = document.createElement("div");
glitchLines.style.position = "absolute";
glitchLines.style.inset = "0";
glitchLines.style.pointerEvents = "none";
glitchLines.style.zIndex = "999";
glitchLines.style.opacity = "0";
glitchLines.style.mixBlendMode = "screen";
uiLayer.style.position = "relative";
uiLayer.appendChild(glitchLines);

const titre = document.createElement("div");
titre.style.fontFamily = "'Noto Sans', sans-serif";
titre.style.fontWeight = "900";
titre.style.fontSize = "35px";
titre.style.paddingLeft = "158px";
titre.style.paddingTop = "75px";
uiLayer.appendChild(titre);

const profil = document.createElement("img");
profil.src = "./IMG/PDIDDY.png";
profil.style.position = "absolute";
profil.style.right = "140px";
profil.style.top = "100px";
profil.style.width = "600px";
profil.style.filter = "grayscale(100%)";
profil.style.zIndex = "1";
profil.style.webkitMaskImage = `
linear-gradient(
  to bottom right,
  rgba(0,0,0,0.6) 10%,
  rgba(0,0,0,0) 65%
)
`;

