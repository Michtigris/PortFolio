// ===============================
// 2) STYLES GLOBAUX + STRUCTURE
// ===============================
const body = document.body;
body.style.margin = "0";
body.style.background = "linear-gradient(180deg, #0b1220, #07101a)";
body.style.minHeight = "100vh";
body.style.fontFamily = "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial";
body.style.color = "#e6eef8";

// ------- HEADER PRINCIPAL -------
const topHeader = document.createElement("div");
topHeader.style.background = "rgba(15, 23, 42, 0.8)";
topHeader.style.borderBottom = "1px solid rgba(148, 163, 184, 0.1)";
topHeader.style.padding = "16px 24px";
topHeader.style.display = "flex";
topHeader.style.justifyContent = "space-between";
topHeader.style.alignItems = "center";
topHeader.style.position = "sticky";
topHeader.style.top = "0";
topHeader.style.zIndex = "1000";
topHeader.style.backdropFilter = "blur(8px)";

const portfolioTitle = document.createElement("h1");
portfolioTitle.textContent = "PORTFOLIO - ange bequet";
portfolioTitle.style.margin = "0";
portfolioTitle.style.fontSize = "1.5rem";
portfolioTitle.style.fontFamily = "fantasy, monospace";
portfolioTitle.style.fontWeight = "600";
portfolioTitle.style.letterSpacing = "1px";
portfolioTitle.style.color = "#e6eef8";

const backBtn = document.createElement("button");
backBtn.textContent = "← Retour";
backBtn.style.padding = "8px 16px";
backBtn.style.background = "transparent";
backBtn.style.border = "1px solid rgba(148, 163, 184, 0.3)";
backBtn.style.borderRadius = "6px";
backBtn.style.color = "#e6eef8";
backBtn.style.cursor = "pointer";
backBtn.style.fontSize = "0.9rem";
backBtn.style.fontWeight = "500";
backBtn.style.transition = "all 0.2s";

backBtn.onmouseenter = () => {
  backBtn.style.background = "rgba(96, 165, 250, 0.1)";
  backBtn.style.borderColor = "#60a5fa";
};

backBtn.onmouseleave = () => {
  backBtn.style.background = "transparent";
  backBtn.style.borderColor = "rgba(148, 163, 184, 0.3)";
};

backBtn.onclick = () => {
  window.history.back();
};

topHeader.append(portfolioTitle, backBtn);
body.appendChild(topHeader);

// ------- CONTAINER -------  
const container = document.createElement("div");
container.style.maxWidth = "1100px";
container.style.margin = "32px auto";
container.style.padding = "16px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "20px";
body.appendChild(container);

// ------- HEADER -------
const header = document.createElement("div");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.flexWrap = "wrap";
header.style.gap = "12px";

const title = document.createElement("h1");
title.textContent = "Portfolio – Projets";
title.style.margin = "0";
title.style.fontSize = "1.4rem";

const total = document.createElement("div");
total.textContent = `Total : ${projects.length}`;
total.style.color = "#9aa6b8";
total.style.fontSize = "0.95rem";

header.append(title, total);
container.appendChild(header);

// ------- NAVIGATION / FILTRES -------
const nav = document.createElement("div");
nav.style.display = "flex";
nav.style.gap = "16px";
nav.style.flexWrap = "wrap";
nav.style.padding = "16px";
nav.style.background = "rgba(15, 23, 42, 0.6)";
nav.style.borderRadius = "12px";
nav.style.border = "1px solid rgba(148, 163, 184, 0.1)";
nav.style.alignItems = "flex-start";

// État des filtres
let excludeFilters = {
  noJS: false,
  noCSS: false,
  noHTML: false
};
let mainFilter = "all"; // "all", "html", "css", "js"

// ===== DROPDOWN 1: Exclusions (checkboxes) =====
const excludeWrapper = document.createElement("div");
excludeWrapper.style.position = "relative";
excludeWrapper.style.flex = "1";
excludeWrapper.style.minWidth = "200px";

const excludeBtn = document.createElement("button");
excludeBtn.textContent = "Exclure langages ▾";
excludeBtn.style.width = "100%";
excludeBtn.style.padding = "10px 14px";
excludeBtn.style.background = "#1e293b";
excludeBtn.style.border = "1px solid rgba(148, 163, 184, 0.3)";
excludeBtn.style.borderRadius = "8px";
excludeBtn.style.color = "#e6eef8";
excludeBtn.style.cursor = "pointer";
excludeBtn.style.fontSize = "0.9rem";
excludeBtn.style.textAlign = "left";
excludeBtn.style.display = "flex";
excludeBtn.style.justifyContent = "space-between";
excludeBtn.style.alignItems = "center";

const excludeMenu = document.createElement("div");
excludeMenu.style.position = "absolute";
excludeMenu.style.top = "calc(100% + 4px)";
excludeMenu.style.left = "0";
excludeMenu.style.width = "100%";
excludeMenu.style.background = "#1e293b";
excludeMenu.style.border = "1px solid rgba(148, 163, 184, 0.3)";
excludeMenu.style.borderRadius = "8px";
excludeMenu.style.padding = "8px";
excludeMenu.style.display = "none";
excludeMenu.style.flexDirection = "column";
excludeMenu.style.gap = "8px";
excludeMenu.style.zIndex = "100";
excludeMenu.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";

const excludeOptions = [
  { id: "noJS", label: "Sans JavaScript" },
  { id: "noCSS", label: "Sans CSS" },
  { id: "noHTML", label: "Sans HTML" }
];

const excludeCheckboxes = {}; // Stocker les références aux checkboxes
const excludeCounters = {}; // Stocker les références aux compteurs

excludeOptions.forEach(opt => {
  const optDiv = document.createElement("label");
  optDiv.style.display = "flex";
  optDiv.style.alignItems = "center";
  optDiv.style.gap = "8px";
  optDiv.style.cursor = "pointer";
  optDiv.style.padding = "6px";
  optDiv.style.borderRadius = "4px";
  optDiv.style.transition = "background 0.2s";

  optDiv.onmouseenter = () => optDiv.style.background = "rgba(96, 165, 250, 0.1)";
  optDiv.onmouseleave = () => optDiv.style.background = "transparent";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.cursor = "pointer";
  checkbox.style.width = "16px";
  checkbox.style.height = "16px";

  excludeCheckboxes[opt.id] = checkbox; // Sauvegarder la référence

  const labelText = document.createElement("span");
  labelText.textContent = opt.label;
  labelText.style.color = "#e6eef8";
  labelText.style.fontSize = "0.9rem";
  labelText.style.flex = "1";

  const counter = document.createElement("span");
  counter.style.color = "#6b7280";
  counter.style.fontSize = "0.85rem";
  counter.style.marginLeft = "auto";
  excludeCounters[opt.id] = counter;

  checkbox.onchange = () => {
    excludeFilters[opt.id] = checkbox.checked;
    applyFilters();
  };

  optDiv.append(checkbox, labelText, counter);
  excludeMenu.appendChild(optDiv);
});

excludeBtn.onclick = (e) => {
  e.stopPropagation();
  const isOpen = excludeMenu.style.display === "flex";
  excludeMenu.style.display = isOpen ? "none" : "flex";
  mainMenu.style.display = "none"; // Fermer l'autre menu
};

// Empêcher la fermeture du menu lors de clics internes
excludeMenu.onclick = (e) => {
  e.stopPropagation();
};

excludeWrapper.append(excludeBtn, excludeMenu);

// ===== DROPDOWN 2: Principal (radio) =====
const mainWrapper = document.createElement("div");
mainWrapper.style.position = "relative";
mainWrapper.style.flex = "1";
mainWrapper.style.minWidth = "200px";

const mainBtn = document.createElement("button");
mainBtn.textContent = "Langage principal ▾";
mainBtn.style.width = "100%";
mainBtn.style.padding = "10px 14px";
mainBtn.style.background = "#1e293b";
mainBtn.style.border = "1px solid rgba(148, 163, 184, 0.3)";
mainBtn.style.borderRadius = "8px";
mainBtn.style.color = "#e6eef8";
mainBtn.style.cursor = "pointer";
mainBtn.style.fontSize = "0.9rem";
mainBtn.style.textAlign = "left";
mainBtn.style.display = "flex";
mainBtn.style.justifyContent = "space-between";
mainBtn.style.alignItems = "center";

const mainMenu = document.createElement("div");
mainMenu.style.position = "absolute";
mainMenu.style.top = "calc(100% + 4px)";
mainMenu.style.left = "0";
mainMenu.style.width = "100%";
mainMenu.style.background = "#1e293b";
mainMenu.style.border = "1px solid rgba(148, 163, 184, 0.3)";
mainMenu.style.borderRadius = "8px";
mainMenu.style.padding = "8px";
mainMenu.style.display = "none";
mainMenu.style.flexDirection = "column";
mainMenu.style.gap = "8px";
mainMenu.style.zIndex = "100";
mainMenu.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";

const mainOptions = [
  { id: "all", label: "Tous" },
  { id: "html", label: "HTML" },
  { id: "css", label: "CSS" },
  { id: "js", label: "JavaScript" }
];

const radioName = "mainFilter_" + Date.now();
const mainRadios = {}; // Stocker les références aux radios
const mainCounters = {}; // Stocker les références aux compteurs

mainOptions.forEach(opt => {
  const optDiv = document.createElement("label");
  optDiv.style.display = "flex";
  optDiv.style.alignItems = "center";
  optDiv.style.gap = "8px";
  optDiv.style.cursor = "pointer";
  optDiv.style.padding = "6px";
  optDiv.style.borderRadius = "4px";
  optDiv.style.transition = "background 0.2s";

  optDiv.onmouseenter = () => optDiv.style.background = "rgba(96, 165, 250, 0.1)";
  optDiv.onmouseleave = () => optDiv.style.background = "transparent";

  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = radioName;
  radio.value = opt.id;
  radio.checked = opt.id === "all";
  radio.style.cursor = "pointer";
  radio.style.width = "16px";
  radio.style.height = "16px";

  mainRadios[opt.id] = radio; // Sauvegarder la référence

  const labelText = document.createElement("span");
  labelText.textContent = opt.label;
  labelText.style.color = "#e6eef8";
  labelText.style.fontSize = "0.9rem";
  labelText.style.flex = "1";

  const counter = document.createElement("span");
  counter.style.color = "#6b7280";
  counter.style.fontSize = "0.85rem";
  counter.style.marginLeft = "auto";
  mainCounters[opt.id] = counter;

  radio.onchange = () => {
    if (radio.checked) {
      mainFilter = opt.id;
      mainBtn.textContent = `Langage principal: ${opt.label} ▾`;
      applyFilters();
    }
  };

  optDiv.append(radio, labelText, counter);
  mainMenu.appendChild(optDiv);
});

mainBtn.onclick = (e) => {
  e.stopPropagation();
  const isOpen = mainMenu.style.display === "flex";
  mainMenu.style.display = isOpen ? "none" : "flex";
  excludeMenu.style.display = "none"; // Fermer l'autre menu
};

// Empêcher la fermeture du menu lors de clics internes
mainMenu.onclick = (e) => {
  e.stopPropagation();
};

mainWrapper.append(mainBtn, mainMenu);

// Fermer les menus en cliquant ailleurs
document.addEventListener("click", () => {
  excludeMenu.style.display = "none";
  mainMenu.style.display = "none";
});

nav.append(excludeWrapper, mainWrapper);

// ===== BOUTON RESET =====
const resetBtn = document.createElement("button");
resetBtn.textContent = "⟲ Réinitialiser";
resetBtn.style.padding = "10px 20px";
resetBtn.style.background = "rgba(239, 68, 68, 0.1)";
resetBtn.style.border = "1px solid rgba(239, 68, 68, 0.3)";
resetBtn.style.borderRadius = "8px";
resetBtn.style.color = "#ef4444";
resetBtn.style.cursor = "pointer";
resetBtn.style.fontSize = "0.9rem";
resetBtn.style.fontWeight = "500";
resetBtn.style.transition = "all 0.2s";
resetBtn.style.whiteSpace = "nowrap";

resetBtn.onmouseenter = () => {
  resetBtn.style.background = "rgba(239, 68, 68, 0.2)";
  resetBtn.style.borderColor = "#ef4444";
};

resetBtn.onmouseleave = () => {
  resetBtn.style.background = "rgba(239, 68, 68, 0.1)";
  resetBtn.style.borderColor = "rgba(239, 68, 68, 0.3)";
};

resetBtn.onclick = () => {
  // Réinitialiser les filtres d'exclusion
  excludeFilters.noJS = false;
  excludeFilters.noCSS = false;
  excludeFilters.noHTML = false;

  // Décocher toutes les checkboxes
  Object.values(excludeCheckboxes).forEach(cb => cb.checked = false);

  // Réinitialiser le filtre principal
  mainFilter = "all";
  mainRadios.all.checked = true;
  mainBtn.textContent = "Langage principal ▾";

  // Appliquer les filtres réinitialisés
  applyFilters();
};

nav.appendChild(resetBtn);
container.appendChild(nav);

// Fonction de tri : date décroissante puis total caractères décroissant
function sortProjects(projectList) {
  return projectList.sort((a, b) => {
    // 1. Trier par date (plus récent d'abord)
    const dateA = parseInt(a.date) || 0;
    const dateB = parseInt(b.date) || 0;
    if (dateB !== dateA) return dateB - dateA;

    // 2. Si même date, trier par nombre total de caractères
    const totalA = Object.values(a.tags).reduce((sum, val) => sum + val, 0);
    const totalB = Object.values(b.tags).reduce((sum, val) => sum + val, 0);
    return totalB - totalA;
  });
}

// Fonction pour mettre à jour les compteurs
function updateCounters() {
  // Compter pour les exclusions
  excludeCounters.noJS.textContent = projects.filter(p => !p.tags.JavaScript && !p.tags.JS).length;
  excludeCounters.noCSS.textContent = projects.filter(p => !p.tags.CSS).length;
  excludeCounters.noHTML.textContent = projects.filter(p => !p.tags.HTML).length;

  // Compter pour le filtre principal
  mainCounters.all.textContent = projects.length;

  mainCounters.html.textContent = projects.filter(p => {
    const entries = Object.entries(p.tags);
    if (entries.length === 0) return false;
    const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);
    return max[0] === "HTML";
  }).length;

  mainCounters.css.textContent = projects.filter(p => {
    const entries = Object.entries(p.tags);
    if (entries.length === 0) return false;
    const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);
    return max[0] === "CSS";
  }).length;

  mainCounters.js.textContent = projects.filter(p => {
    const entries = Object.entries(p.tags);
    if (entries.length === 0) return false;
    const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);
    return max[0] === "JavaScript" || max[0] === "JS";
  }).length;
}

// Fonction pour appliquer les filtres
function applyFilters() {
  let filtered = projects;

  // Appliquer les exclusions
  if (excludeFilters.noJS) {
    filtered = filtered.filter(p => !p.tags.JavaScript && !p.tags.JS);
  }
  if (excludeFilters.noCSS) {
    filtered = filtered.filter(p => !p.tags.CSS);
  }
  if (excludeFilters.noHTML) {
    filtered = filtered.filter(p => !p.tags.HTML);
  }

  // Appliquer le filtre principal
  if (mainFilter !== "all") {
    filtered = filtered.filter(p => {
      const entries = Object.entries(p.tags);
      if (entries.length === 0) return false;
      const max = entries.reduce((a, b) => a[1] > b[1] ? a : b);

      if (mainFilter === "html") return max[0] === "HTML";
      if (mainFilter === "css") return max[0] === "CSS";
      if (mainFilter === "js") return max[0] === "JavaScript" || max[0] === "JS";
      return false;
    });
  }

  // Trier puis réafficher les cartes
  const sorted = sortProjects(filtered);
  grid.innerHTML = "";
  sorted.forEach(p => {
    grid.appendChild(createCard(p));
  });

  // Mettre à jour le total
  total.textContent = `Total : ${filtered.length} / ${projects.length}`;

  // Mettre à jour les compteurs
  updateCounters();
}

// ------- GRILLE -------
const grid = document.createElement("div");
grid.style.display = "flex";
grid.style.flexWrap = "wrap";
grid.style.gap = "20px";
container.appendChild(grid);

const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.inset = "0";
overlay.style.background = "rgba(0,0,0,0.6)";
overlay.style.display = "none";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.zIndex = "999";

const modal = document.createElement("div");
modal.style.background = "#020617";
modal.style.borderRadius = "16px";
modal.style.padding = "20px";
modal.style.boxShadow = "0 18px 40px #000";
modal.style.minWidth = "380px";
modal.style.maxWidth = "600px";
modal.style.display = "flex";
modal.style.flexDirection = "column";
modal.style.gap = "14px";

// header modale
const modalHeader = document.createElement("div");
modalHeader.style.display = "flex";
modalHeader.style.justifyContent = "space-between";
modalHeader.style.alignItems = "center";

const modalTitle = document.createElement("div");
modalTitle.style.fontWeight = "600";
modalTitle.style.fontSize = "1rem";

const closeBtn = document.createElement("button");
closeBtn.textContent = "✕";
closeBtn.style.border = "none";
closeBtn.style.background = "transparent";
closeBtn.style.color = "#9ca3af";
closeBtn.style.cursor = "pointer";
closeBtn.style.fontSize = "1rem";

modalHeader.append(modalTitle, closeBtn);

// texte sous le titre
const modalSub = document.createElement("div");
modalSub.textContent = "Répartition par langage (caractères).";
modalSub.style.fontSize = "0.85rem";
modalSub.style.color = "#9ca3af";

// contenu: camembert + légende
const modalContent = document.createElement("div");
modalContent.style.display = "flex";
modalContent.style.gap = "16px";
modalContent.style.alignItems = "center";

const canvas = document.createElement("canvas");
canvas.width = 220;
canvas.height = 220;
canvas.style.borderRadius = "999px";
canvas.style.background = "#020617";

const legend = document.createElement("div");
legend.style.display = "flex";
legend.style.flexDirection = "column";
legend.style.gap = "6px";
legend.style.fontSize = "0.85rem";

modalContent.append(canvas, legend);

// footer total
const modalFooter = document.createElement("div");
modalFooter.style.fontSize = "0.8rem";
modalFooter.style.color = "#9ca3af";

modal.append(modalHeader, modalSub, modalContent, modalFooter);
overlay.appendChild(modal);
body.appendChild(overlay);

// fermer en cliquant à côté
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.style.display = "none";
});
closeBtn.onclick = () => (overlay.style.display = "none");

// couleurs fixes pour chaque langage
function getLanguageColor(lang) {
  const colors = {
    "HTML": "#f97316",      // Orange
    "CSS": "#3b82f6",       // Bleu
    "JavaScript": "#22c55e", // Vert
    "JS": "#22c55e"         // Vert (alias)
  };
  return colors[lang] || "#9ca3af"; // Gris par défaut
}

// fonction pour ouvrir la modale avec un projet donné
function openStatsModal(project) {
  if (!project.tags || Object.keys(project.tags).length === 0) return;

  modalTitle.textContent = `Détail du code – ${project.name}`;

  const entries = Object.entries(project.tags);
  const totalChars = entries.reduce((sum, [, v]) => sum + v, 0);

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = Math.min(cx, cy) - 8;

  let startAngle = -Math.PI / 2;
  legend.innerHTML = "";

  entries.forEach(([lang, value]) => {
    const ratio = value / totalChars;
    const sliceAngle = ratio * Math.PI * 2;
    const color = getLanguageColor(lang);

    // tranche camembert
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    startAngle += sliceAngle;

    // ligne de légende
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.justifyContent = "space-between";
    row.style.gap = "8px";

    const left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";
    left.style.gap = "6px";

    const colorDot = document.createElement("span");
    colorDot.style.width = "10px";
    colorDot.style.height = "10px";
    colorDot.style.borderRadius = "999px";
    colorDot.style.background = color;

    const nameSpan = document.createElement("span");
    nameSpan.textContent = lang;

    left.append(colorDot, nameSpan);

    const right = document.createElement("div");
    right.style.display = "flex";
    right.style.gap = "10px";

    const countSpan = document.createElement("span");
    countSpan.textContent = `${value} car.`;

    const percentSpan = document.createElement("span");
    percentSpan.textContent = `${Math.round(ratio * 100)}%`;
    percentSpan.style.color = "#e5e7eb";

    right.append(countSpan, percentSpan);
    row.append(left, right);
    legend.appendChild(row);
  });

  modalFooter.textContent = `Total : ${totalChars} caractères sur ce projet.`;
  overlay.style.display = "flex";
}

// ===============================
// 3) FONCTION DE CRÉATION DE CARTE
// ===============================
function createCard(p) {
  // ------- CARTE -------
  const card = document.createElement("div");
  card.style.width = "320px";
  card.style.background = "rgba(15,23,36,0.95)";
  card.style.borderRadius = "14px";
  card.style.overflow = "hidden";
  card.style.boxShadow = "0 8px 24px #0007";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.cursor = "pointer";
  card.style.transition = "transform .2s, box-shadow .2s";

  card.onmouseenter = () => {
    card.style.transform = "translateY(-4px)";
    card.style.boxShadow = "0 12px 32px #000a";
  };
  card.onmouseleave = () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 8px 24px #0007";
  };

  // ------- MEDIA -------
  const media = document.createElement("div");
  media.style.position = "relative";
  media.style.width = "100%";
  media.style.height = "160px";
  media.style.overflow = "hidden";
  media.style.background = "#020617";
  media.style.cursor = "pointer";

  // Clic sur le media ouvre Vercel
  media.onclick = () => window.open(p.vercelUrl, "_blank");

  let img = null;
  let video = null;

  // IMAGE
  if (p.image && p.image !== "NONE") {
    img = document.createElement("img");
    img.src = p.image;
    img.alt = p.name + " preview";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.objectPosition = "bottom"; // crop vertical
    img.style.transition = "opacity .25s";
    media.appendChild(img);
  }

  // VIDÉO
  if (p.video && p.video !== "NONE") {
    video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.style.position = "absolute";
    video.style.inset = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.objectPosition = "bottom"; // même crop
    video.style.opacity = "0";
    video.style.transition = "opacity .25s";
    video.style.pointerEvents = "none";

    const src = document.createElement("source");
    src.src = p.video;
    src.type = "video/mp4";
    video.appendChild(src);

    media.appendChild(video);

    // Effet hover pour jouer la vidéo
    card.addEventListener("mouseenter", () => {
      // 0 ms par défaut
      let startMs = 0;

      // si un start est défini dans le projet (ex: start: "2000")
      if (p.start !== undefined) {
        startMs = parseInt(p.start); // en millisecondes
      }

      const startSeconds = startMs / 1000; // currentTime est en secondes

      video.currentTime = startSeconds;
      video.play();
      video.style.opacity = "1";
      if (img) img.style.opacity = "0";
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = "0";
      if (img) img.style.opacity = "1";
    });
  }

  // Ajouter le media à la carte
  card.appendChild(media);

  // ------- BODY -------
  const bodyDiv = document.createElement("div");
  bodyDiv.style.padding = "16px";
  bodyDiv.style.display = "flex";
  bodyDiv.style.flexDirection = "column";
  bodyDiv.style.gap = "10px";

  const h3 = document.createElement("h3");
  h3.textContent = p.name;
  h3.style.margin = "0";
  h3.style.fontSize = "1.1rem";

  const desc = document.createElement("p");
  desc.textContent = p.description || "";
  desc.style.margin = "0";
  desc.style.color = "#9aa6b8";
  desc.style.fontSize = "0.95rem";

  // ------- TAGS -------
  const tags = document.createElement("div");
  tags.style.display = "flex";
  tags.style.flexWrap = "wrap";
  tags.style.gap = "8px";

  if (p.tags) {
    // Transformer en tableau + tri décroissant
    const sortedTags = Object.entries(p.tags)
      .sort((a, b) => b[1] - a[1]); // tri du plus grand au plus petit

    const maxValue = sortedTags[0][1]; // meilleure valeur

    sortedTags.forEach(([tagName, value]) => {
      const span = document.createElement("span");
      span.textContent = tagName;

      span.style.padding = "4px 8px";
      span.style.fontSize = "0.8rem";
      span.style.borderRadius = "999px";
      span.style.cursor = "pointer";
      span.style.border = "1px solid rgba(96,165,250,0.2)";

      // COULEUR : le plus important = plus saturé
      if (value === maxValue) {
        span.style.background = "rgba(96,165,250,0.35)";
        span.style.color = "#bcdcff";
      } else {
        span.style.background = "rgba(96,165,250,0.12)";
        span.style.color = "#7eb3f5";
      }

      // Clic -> camembert
      span.onclick = (e) => {
        e.stopPropagation();
        openStatsModal(p);
      };

      tags.appendChild(span);
    });
  }



  const actions = document.createElement("div");
  actions.style.display = "flex";
  actions.style.gap = "10px";
  actions.style.marginTop = "10px";

  const live = document.createElement("button");
  live.textContent = "Voir en ligne";
  live.style.flex = "1";
  live.style.padding = "10px";
  live.style.border = "none";
  live.style.borderRadius = "8px";
  live.style.cursor = "pointer";
  live.style.background = "#60a5fa";
  live.style.color = "#04203a";
  live.onclick = () => window.open(p.vercelUrl, "_blank");

  const git = document.createElement("button");
  git.textContent = "GitHub";
  git.style.flex = "1";
  git.style.padding = "10px";
  git.style.borderRadius = "8px";
  git.style.border = "1px solid rgba(255,255,255,0.2)";
  git.style.background = "transparent";
  git.style.color = "#e6eef8";
  git.style.cursor = "pointer";
  git.onclick = () => window.open(p.githubUrl, "_blank");

  actions.append(live, git);
  bodyDiv.append(h3, desc, tags, actions);

  card.appendChild(bodyDiv);
  return card;
}

// ===============================
// 4) AJOUT DES CARTES DANS LA GRILLE
// ===============================
const sortedProjects = sortProjects([...projects]);
sortedProjects.forEach(p => {
  grid.appendChild(createCard(p));
});

// Initialiser les compteurs au chargement
updateCounters();