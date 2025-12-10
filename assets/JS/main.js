// Portfolio/assets/JS/main.js
// ===============================
// 1) DONNÉES DES PROJETS
// ===============================
const projects = [
  {
    name: "Age",
    vercelUrl: "https://js-3ato5rjy3-michtigris-projects.vercel.app/",
    githubUrl: "https://github.com/Michtigris/Js-Age",
    image: "./assets/img/Age.png",
    video: "./assets/video/Age.mp4",
    start: "4500",
    description: "Verificateur d'âge en JavaScript.",
    tags: { "HTML": 283, "CSS": 447, "JavaScript": 337 },
    date: "2025"
  },
  {
    name: "Club Lecture",
    vercelUrl: "https://club-lecture-three.vercel.app",
    githubUrl: "https://github.com/Michtigris/Club-Lecture",
    image: "./assets/img/Club Lecture.png",
    video: "./assets/video/Club Lecture.mp4",
    start: "2500",
    description: "Site pour un club de lecture.",
    tags: { "HTML": 4218, "CSS": 1304 },
    date: "2025"
  },
  {
    name: "Rainbow Photo",
    vercelUrl: "https://rainbow-photo.vercel.app",
    githubUrl: "https://github.com/Michtigris/RAINBOW-PHOTO",
    image: "./assets/img/Rainbow Photo.png",
    video: "./assets/video/Rainbow Photo.mp4",
    start: "10500",
    description: "Galerie photo style rainbow.",
    tags: { "HTML": 8950, "CSS": 12027 },
    date: "2025"
  },
  {
    name: "Star Wars",
    vercelUrl: "https://star-wars-rosy-mu.vercel.app",
    githubUrl: "https://github.com/Michtigris/Star-wars",
    image: "./assets/img/Star Wars.png",
    video: "./assets/video/Star Wars.mp4",
    start: "7000",
    description: "Projet thématique Star Wars.",
    tags: { "HTML": 8895, "CSS": 17557, "JavaScript": 1192 },
    date: "2025"
  },
  {
    name: "Pantone",
    vercelUrl: "https://pantone-ljn8-kq7zqooag-michtigris-projects.vercel.app/",
    githubUrl: "https://github.com/Michtigris/PANTONE",
    image: "./assets/img/Pantone.png",
    video: "./assets/video/Pantone.mp4",
    start: "9000",
    description: "Projet Pantone / couleurs.",
    tags: { "HTML": 2926, "CSS": 3600 },
    date: "2025"
  },
  {
    name: "Catalogue de Livres",
    vercelUrl: "https://catalogue-de-livres-q507kjf28-michtigris-projects.vercel.app/",
    githubUrl: "https://github.com/Michtigris/Catalogue-de-Livres",
    image: "./assets/img/Catalogue de Livres.png",
    video: "./assets/video/Catalogue de Livres.mp4",
    start: "6000",
    description: "Ma BIBLIOTHÈQUE de livres en ligne.",
    tags: { "HTML": 442, "JavaScript": 13242 },
    date: "2025"
  }
];

// ===============================
// 2) STYLES GLOBAUX + STRUCTURE
// ===============================
const body = document.body;
body.style.margin = "0";
body.style.background = "linear-gradient(180deg, #0b1220, #07101a)";
body.style.minHeight = "100vh";
body.style.fontFamily = "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial";
body.style.color = "#e6eef8";

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

// couleurs pour les parts du camembert
const sliceColors = ["#60a5fa", "#facc15", "#f97316", "#22c55e", "#a855f7", "#ec4899", "#2dd4bf"];

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

  entries.forEach(([lang, value], index) => {
    const ratio = value / totalChars;
    const sliceAngle = ratio * Math.PI * 2;
    const color = sliceColors[index % sliceColors.length];

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
projects.forEach(p => {
  grid.appendChild(createCard(p));
});