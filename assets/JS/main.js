// Portfolio/assets/JS/main.js

// set up lamp scene

const body = document.body;
body.style.margin = '0';
body.style.padding = '0';
body.style.height = '100vh';
//body.style.background = 'radial-gradient(circle, #0b0b0b, #000)';
body.style.background = '#020202';
body.style.fontFamily = 'Arial, sans-serif';
body.style.overflow = 'hidden';

const scene = document.createElement('div');
scene.style.position = 'relative';
scene.style.width = '100%';
scene.style.height = '100%';
document.body.appendChild(scene);

const lamp = document.createElement('div');
lamp.className = 'lamp';
lamp.style.position = 'absolute';
lamp.style.top = '0';
lamp.style.left = '80%';
lamp.style.zIndex = '2000';
lamp.style.transform = 'translateX(-50%)';
scene.appendChild(lamp);

const lampHead = document.createElement('div');
lampHead.className = 'lamp-head';
lampHead.style.width = '80px';
lampHead.style.height = '40px';
lampHead.style.background = '#676767';
lampHead.style.borderRadius = '0 0 12px 12px';
lampHead.style.margin = 'auto';
lampHead.style.pointerEvents = 'none';
lamp.appendChild(lampHead);

const ropeWrapper = document.createElement('div');
ropeWrapper.className = 'rope-wrapper';
ropeWrapper.style.position = 'absolute';
ropeWrapper.style.top = '40px';
ropeWrapper.style.left = '50%';
ropeWrapper.style.width = '0';
ropeWrapper.style.height = '0';
lamp.appendChild(ropeWrapper);

const rope = document.createElement('div');
rope.className = 'rope';
rope.style.position = 'absolute';
rope.style.top = '0';
rope.style.left = '0';
ropeWrapper.appendChild(rope);

for (let i = 0; i < 6; i++) {
    const link = document.createElement('div');
    link.className = 'link';
    link.style.position = 'absolute';
    link.style.width = '4px';
    link.style.background = '#666';
    link.style.borderRadius = '2px';
    link.style.transformOrigin = 'top center';
    link.style.left = '0';
    link.style.top = '0';
    rope.appendChild(link);
}

const ropeEnd = document.createElement('div');
ropeEnd.className = 'rope-end';

ropeEnd.style.position = 'absolute';
ropeEnd.style.width = '18px';
ropeEnd.style.height = '18px';
ropeEnd.style.background = '#8e8e8e';
ropeEnd.style.borderRadius = '50%';
ropeEnd.style.cursor = 'grab';
ropeWrapper.appendChild(ropeEnd);

ropeEnd.addEventListener('mousedown', () => {
    ropeEnd.style.cursor = 'grabbing';
});

// set up title

const title = document.createElement('h1');
title.textContent = 'PORTFOLIO';
title.style.color = '#FFFFFF';
title.style.fontFamily = 'fantasy, monospace';
title.style.fontSize = '90px';
title.style.position = 'absolute';
title.style.top = '20px';
title.style.left = '30%';
title.style.transform = 'translateX(-50%)';
title.style.zIndex = '2000';
document.body.appendChild(title);

const nom = document.createElement('h2');
nom.textContent = 'Ange BEQUET';
nom.style.color = '#FFFFFF';
nom.style.textAlign = 'center';
nom.style.fontSize = '45px';
nom.style.fontFamily = 'fantasy, monospace';
nom.style.position = 'absolute';
nom.style.top = '130px';
nom.style.left = '30%';
nom.style.transform = 'translateX(-50%)';
nom.style.zIndex = '2000';
document.body.appendChild(nom);

// set up lampe

const projecteurtout = document.createElement('img');
projecteurtout.src = './assets/IMG/projecteur 1.png';
projecteurtout.style.width = '400px';
projecteurtout.style.position = 'absolute';
projecteurtout.style.top = '-60px';
projecteurtout.style.left = '93%';
projecteurtout.style.transform = 'translateX(-50%)';
projecteurtout.style.zIndex = '1000';
projecteurtout.style.pointerEvents = 'none';
document.body.appendChild(projecteurtout);

const projecteur = document.createElement('img');
projecteur.src = './assets/IMG/projecteur 2.png';
projecteur.style.width = '400px';
projecteur.style.position = 'absolute';
projecteur.style.top = '-60px';
projecteur.style.left = '93%';
projecteur.style.transform = 'translateX(-50%)';
projecteur.style.zIndex = '1010';
projecteur.style.pointerEvents = 'none';
document.body.appendChild(projecteur);

// light

const light = document.createElement('div');
light.className = 'light';
light.style.position = 'absolute';
light.style.bottom = '0';
light.style.right = '124px';
light.style.left = '0';
light.style.top = '165px';
light.style.background = 'url(./assets/IMG/SHODOW.png)';
light.style.backgroundRepeat = 'no-repeat';
light.style.backgroundPosition = 'center center';
light.style.backgroundSize = '100% 100%';
light.style.opacity = '0';
light.style.zIndex = '500';
light.style.transition = 'opacity 0.8s ease';
light.style.zIndex = '1004';
light.style.pointerEvents = 'none';
scene.appendChild(light);

const light2 = document.createElement('div');
light2.className = 'light';
light2.style.position = 'absolute';
light2.style.bottom = '0';
light2.style.right = '124px';
light2.style.left = '0';
light2.style.top = '165px';
light2.style.background = 'radial-gradient(circle at 95% 0%, rgba(255, 255, 150, 0.6), rgba(255, 255, 150, 0) 70%)';
light2.style.opacity = '0';
light2.style.zIndex = '500';
light2.style.clipPath = 'polygon(95% 0, 100% 0, 100% 12%, 85% 100%, 0 100%, 0 20%)';
light2.style.transition = 'opacity 0.8s ease';
light2.style.zIndex = '1005';
light2.style.pointerEvents = 'none';
scene.appendChild(light2);

//degradé sur les bord
const vinaigre = document.createElement('div');
vinaigre.style.position = 'absolute';
vinaigre.style.bottom = '0';
vinaigre.style.left = '0';
vinaigre.style.width = '100%';
vinaigre.style.height = '100%';
vinaigre.style.background = 'radial-gradient(circle, transparent, #000000ce 80%)';
vinaigre.style.pointerEvents = 'none';
vinaigre.style.zIndex = '100000';
scene.appendChild(vinaigre);

//option et chois de mode

const zone = document.createElement('div');
zone.style.position = 'absolute';
zone.style.display = 'none';
zone.style.bottom = '0';
zone.style.right = '124px';
zone.style.left = '0';
zone.style.top = '400px';
zone.style.opacity = '0';
zone.style.transition = 'opacity 0.8s ease';
zone.style.zIndex = '3000';
body.appendChild(zone);

const classic = document.createElement('a');
classic.href = './assets classic/index.html';
classic.style.position = 'absolute';
classic.style.left = '69%';
classic.style.bottom = '45px';
classic.style.height = '550px';
classic.style.width = '250px';
classic.style.fontSize = '30px';
classic.style.transform = 'translateX(-50%)';
classic.style.zIndex = '3001';
classic.style.textDecoration = 'none';
zone.appendChild(classic);

const classictitle = document.createElement('h3');
classictitle.textContent = 'Mode Classic';
classictitle.style.position = 'relative';
classictitle.style.top = '50%';
classictitle.style.color = '#000000';
classictitle.style.height = '60px';
classictitle.style.width = '95%';
classictitle.style.borderRadius = '10px';
classictitle.style.alignContent = 'center';
classictitle.style.textAlign = 'center';
classictitle.style.justifySelf = 'center';
classictitle.style.fontSize = '30px';
classictitle.style.transition = 'transform 0.3s ease';
classictitle.style.backgroundColor = '#ffffff50';
classictitle.style.boxShadow = '0 0 10px #00000050';
classictitle.style.textShadow = '0 0 5px #ffffff';
classictitle.style.zIndex = '3001';
classic.appendChild(classictitle);

classic.addEventListener('mouseover', () => {
    classictitle.style.transform = 'scale(1.1)';
    classictitle.style.boxShadow = '0 0 30px #ffffff';
});

classic.addEventListener('mouseout', () => {
    classictitle.style.transform = 'scale(1)';
    classictitle.style.boxShadow = '0 0 10px #00000050';
}); 


const experimental = document.createElement('a');
experimental.href = './assets alternative page/index.html';
experimental.style.position = 'absolute';
experimental.style.left = '32%';
experimental.style.bottom = '60px';
experimental.style.height = '550px';
experimental.style.width = '300px';
experimental.style.fontSize = '30px';
experimental.style.transform = 'translateX(-50%)';
experimental.style.zIndex = '3001';
experimental.style.textDecoration = 'none';
zone.appendChild(experimental);

const experimentaltitle = document.createElement('h3');
experimentaltitle.textContent = 'Mode Experimental';
experimentaltitle.style.position = 'relative';
experimentaltitle.style.top = '50%';
experimentaltitle.style.color = '#000000';
experimentaltitle.style.fontFamily = '';
experimentaltitle.style.height = '60px';
experimentaltitle.style.width = '95%';  
experimentaltitle.style.borderRadius = '10px';
experimentaltitle.style.alignContent = 'center';
experimentaltitle.style.textAlign = 'center';
experimentaltitle.style.justifySelf = 'center';
experimentaltitle.style.fontSize = '30px';
experimentaltitle.style.transition = 'transform 0.3s ease';
experimentaltitle.style.zIndex = '3001';
experimentaltitle.style.backgroundColor = '#ffffff50';
experimentaltitle.style.boxShadow = '0 0 10px #00000050';
experimentaltitle.style.textShadow = '0 0 5px #ffffff';
experimental.appendChild(experimentaltitle);

experimental.addEventListener('mouseover', () => {
    experimentaltitle.style.transform = 'scale(1.1)';
    experimentaltitle.style.boxShadow = '0 0 30px #ffffff';
});

experimental.addEventListener('mouseout', () => {
    experimentaltitle.style.transform = 'scale(1)';
    experimentaltitle.style.boxShadow = '0 0 10px #00000050';
}); 
