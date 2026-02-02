



const wrapper = document.querySelector(".rope-wrapper");

/* paramètres mécaniques */
const REST_LENGTH = 140;
const MAX_STRETCH = 30;
const CLICK_THRESHOLD = 18;
const CLICK_EXTRA = 14;
const MAX_PULL_RATIO = 1.5; // 150 %
const BREAK_RATIO = 1.5;
const BREAK_LENGTH = REST_LENGTH * BREAK_RATIO;
const RETURN_FORCE = 0.18;
const DAMPING = 0.82;
const SEGMENT_LENGTH = 22;
const SEGMENTS = document.querySelectorAll(".link");
const END = document.querySelector(".rope-end");
const MAX_STRETCH_RATIO = 1.5;
const MAX_LENGTH = SEGMENTS.length * SEGMENT_LENGTH * MAX_STRETCH_RATIO;
const GRAVITY_RETURN = 0.08; // vitesse de retour
const BASE_SEGMENT_LENGTH = 22;
const MAX_SEGMENT_RATIO = 1.5;
const MAX_SEGMENT_LENGTH = BASE_SEGMENT_LENGTH * MAX_SEGMENT_RATIO;
const RELEASE_RATIO = 1.1; // 110 % = chaîne détendue

// Release/break tuning
const RELEASE_IMPULSE = -10; // px initial vertical impulse on release
const VELOCITY_DAMP = 0.92; // damping for release impulse
let targetVelY = 0; // vertical velocity applied to target after release

/* état */







let clicked = false;


let isDragging = false;
let isBroken = false;
let lampOn = false;


/* origine réelle */
const rect = wrapper.getBoundingClientRect();
const origin = { x: rect.left, y: rect.top };

/* interactions */
ropeEnd.addEventListener("mousedown", (e) => {
    e.preventDefault(); // BLOQUE LE DRAG NATIF
    isDragging = true;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

let target = {
    x: origin.x,
    y: origin.y + SEGMENTS.length * SEGMENT_LENGTH
};

const restTarget = {
    x: origin.x,
    y: origin.y + SEGMENTS.length * SEGMENT_LENGTH
};


document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    target.x = e.clientX;
    target.y = e.clientY;
});

function solveIK() {

    /* 1️⃣ points de la chaîne (jointures) */
    const points = [{ x: origin.x, y: origin.y }];

    for (let i = 0; i < SEGMENTS.length; i++) {
        const p = points[i];
        points.push({
            x: p.x,
            y: p.y + BASE_SEGMENT_LENGTH
        });
    }

    /* 2️⃣ distance réelle cible */
    let dx = target.x - origin.x;
    let dy = target.y - origin.y;
    let dist = Math.hypot(dx, dy);

    /* 3️⃣ longueur totale de base */
    const baseTotal = SEGMENTS.length * BASE_SEGMENT_LENGTH;

    /* 4️⃣ étirement nécessaire */
    let stretchNeeded = Math.max(0, dist - baseTotal);

    // BREAK: si on tire et qu'on atteint 150%, lâcher automatiquement (sans téléport)
    const totalMaxAllowed = baseTotal * MAX_STRETCH_RATIO;
    if (isDragging && dist >= totalMaxAllowed && !isBroken) {
        // relâchement automatique
        isDragging = false;
        isBroken = true;

        // basculer la lampe
        lampOn = !lampOn;
        light.style.opacity = lampOn ? '0.8' : '0';
        light2.style.opacity = lampOn ? '0.4' : '0';
        zone.style.opacity = lampOn ? '0.6' : '0';
        zone.style.display = lampOn ? 'block' : 'none';

        // petite impulsion vers le haut pour effet naturel (sera amortie dans la boucle)
        targetVelY = RELEASE_IMPULSE;
    }
    /* 5️⃣ longueur réelle de chaque segment */
    const segmentLengths = [];

    for (let i = 0; i < SEGMENTS.length; i++) {
        const extra = Math.min(
            stretchNeeded / SEGMENTS.length,
            BASE_SEGMENT_LENGTH * (MAX_SEGMENT_RATIO - 1)
        );

        segmentLengths.push(BASE_SEGMENT_LENGTH + extra);
    }

    /* 6️⃣ si TOUS les segments sont à 150 %, on switch la lampe */
    const allMaxed = segmentLengths.every(
        len => len >= MAX_SEGMENT_LENGTH - 0.1
    );

    const allRelaxed = segmentLengths.every(
        len => len <= BASE_SEGMENT_LENGTH * RELEASE_RATIO
    );



    // SWITCH ON / OFF quand TOUT est à 150 %
    if (allMaxed && !isBroken) {
        isBroken = true;

        lampOn = !lampOn;
        light.style.opacity = lampOn ? "0.8" : "0";
        light2.style.opacity = lampOn ? "0.4" : "0";
        zone.style.opacity = lampOn ? '0.6' : '0';
        zone.style.display = lampOn ? 'block' : 'none';
    }

    // RÉARMEMENT quand la chaîne se détend
    if (allRelaxed && isBroken && !isDragging) {
        isBroken = false;
    }


    /* 7️⃣ BACKWARD (de la boule vers la lampe) */
    points[points.length - 1] = { ...target };

    for (let i = points.length - 2; i >= 0; i--) {
        const next = points[i + 1];
        const curr = points[i];

        const dx = curr.x - next.x;
        const dy = curr.y - next.y;
        const d = Math.hypot(dx, dy) || 0.0001;

        points[i] = {
            x: next.x + (dx / d) * segmentLengths[i],
            y: next.y + (dy / d) * segmentLengths[i]
        };
    }

    /* 8️⃣ FORWARD (de la lampe vers la boule) */
    points[0] = { ...origin };

    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        const d = Math.hypot(dx, dy) || 0.0001;

        points[i] = {
            x: prev.x + (dx / d) * segmentLengths[i - 1],
            y: prev.y + (dy / d) * segmentLengths[i - 1]
        };
    }

    /* 9️⃣ appliquer visuellement les segments (décalage visuel de 20px vers la direction) */
    SEGMENTS.forEach((seg, i) => {
        const a = points[i];
        const b = points[i + 1];

        // norme et vecteur unitaire a->b
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.hypot(dx, dy) || 0.0001;
        const ux = dx / d;
        const uy = dy / d;

        // avance visuelle de 20px dans la direction du segment
        const ADVANCE = 20;
        const startX = a.x + ux * ADVANCE;
        const startY = a.y + uy * ADVANCE;

        const angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;

        seg.style.display = '';
        seg.style.height = `${segmentLengths[i]}px`;
        seg.style.transform = `translate(${startX - origin.x}px, ${startY - origin.y}px) rotate(${angle}deg)`;

    });

    /* 🔟 position de la boule */
    END.style.transform =
        `translate(${points.at(-1).x - origin.x - 9}px,
               ${points.at(-1).y - origin.y - 9}px)`;
}



function triggerBreak() {
    isBroken = true;
    isDragging = false;

    lampOn = !lampOn;
    light.style.opacity = lampOn ? "0.8" : "0";
    light2.style.opacity = lampOn ? "0.4" : "0";
    zone.style.opacity = lampOn ? '0.6' : '0';
    zone.style.display = lampOn ? 'block' : 'none';

    // impulsion de retour
    velocityLength = -10;
    velocityAngle = angle * 0.2;
}


/* boucle */
function loop() {

    if (isDragging) {
        solveIK();
    } else {
        // retour gravité
        target.x += (restTarget.x - target.x) * GRAVITY_RETURN;
        target.y += (restTarget.y - target.y) * GRAVITY_RETURN;

        // appliquer impulsion verticale si présente (effet rebond après lâcher)
        if (Math.abs(targetVelY) > 0.01) {
            target.y += targetVelY;
            targetVelY *= VELOCITY_DAMP;
            if (Math.abs(targetVelY) < 0.05) targetVelY = 0;
        }

        // micro oscillation naturelle (APRES le retour)
        target.x += Math.sin(Date.now() * 0.002) * 0.2;

        solveIK();
    }


    requestAnimationFrame(loop);
}

loop();



/* visuels */
function updateVisuals() {


    const links = rope.querySelectorAll(".link");
    const totalSegments = links.length;
    const maxVisible = Math.min(
        totalSegments,
        Math.ceil((length - REST_LENGTH) / 22) + totalSegments
    );
}


/* clic mécanique */
function triggerClick() {
    clicked = true;
    lampOn = !lampOn;

    light.style.opacity = lampOn ? "0.8" : "0";
    light2.style.opacity = lampOn ? "0.4" : "0";
    zone.style.opacity = lampOn ? '0.6' : '0';
    zone.style.display = lampOn ? 'block' : 'none';

    // simulation du lâcher
    isDragging = false;

    // impulsion vers le haut (retour naturel)
    velocity = -8;
}

