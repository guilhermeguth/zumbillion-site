// Idiomas da página (português e inglês) e a lista de armas.
// O português está no próprio HTML; aqui ficam as traduções em inglês e o
// texto em português de volta, para trocar sem recarregar.

const EN = {
  "nav.features": "Features",
  "nav.gallery": "Gallery",
  "nav.characters": "Characters",
  "nav.arsenal": "Arsenal",
  "nav.credits": "Credits",
  "hero.tagline": "Survive the horde",
  "hero.pitch": "Hundreds of zombies on screen, weapons that fire on their own and thirty minutes to last. Choose every upgrade well, evolve your arsenal and face the Colossus at the end.",
  "hero.steam": "Steam: coming soon",
  "hero.see": "See the game",
  "hero.platform": "PC · single player · offline · 8 languages",
  "features.title": "What awaits you",
  "features.horde.title": "A real horde",
  "features.horde.text": "Up to 400 zombies at once, closing in from the sides instead of just trailing behind. Runners, exploders, rammers that charge in a straight line, bloaters that split and armored ones that call for fire.",
  "features.weapons.title": "24 weapons, all with evolutions",
  "features.weapons.text": "From the pistol to the bazooka, from saw blades to tear gas. Take a weapon to level 8 with the right knowledge and it evolves into a legendary version.",
  "features.choices.title": "Choices that matter",
  "features.choices.text": "Every level, pick 1 of 3 upgrades with a rarity, from Common to Legendary. Reroll, banish or skip. Knowledges, survival gear and power-ups shape your build.",
  "features.map.title": "A map to explore",
  "features.map.text": "Towns, farms, graveyards, lakes and mud that slow you down. Cars to loot, military airdrops, camps, cursed tombs, merchants and sirens.",
  "features.characters.title": "Six survivors",
  "features.characters.text": "Each with an exclusive weapon, an ability of their own and three skins to unlock through challenges: Veteran, Infected and Golden.",
  "features.progress.title": "Progress that sticks",
  "features.progress.text": "Coins even when you die, a shop with permanent upgrades, three stages, five Threat levels, endless mode, skins, rankings, run history and 17 achievements.",
  "gallery.title": "Gallery",
  "gallery.horde": "The horde all around and the flamethrower at work.",
  "gallery.evolution": "Leveling up: a legendary evolution among the options.",
  "gallery.supplies": "Airdrop supplies: upgrades for your weapons.",
  "gallery.map": "The map: towns, lakes and camps to discover.",
  "gallery.characters": "Character select, with records and abilities.",
  "gallery.result": "At the end, the damage of each weapon and the coins earned.",
  "characters.title": "Characters",
  "characters.text": "Every character has three skins to unlock: Veteran (10 runs), Infected (win normal mode) and Golden (win at Threat 5).",
  "skin.veteran": "Veteran",
  "skin.infected": "Infected",
  "skin.golden": "Golden",
  "char.survivor.name": "Survivor",
  "char.survivor.text": "An ordinary guy who refused to become food. Balanced in everything.",
  "char.survivor.ability": "Scavenger",
  "char.survivor.effect": "+25% coins earned.",
  "char.soldier.name": "Soldier",
  "char.soldier.text": "Trained for this: tougher and hits harder, but carries weight.",
  "char.soldier.ability": "Military Training",
  "char.soldier.effect": "+15% damage.",
  "char.firefighter.name": "Firefighter",
  "char.firefighter.text": "Runs in where everyone runs out. Lots of health, and it comes back on its own.",
  "char.firefighter.ability": "Thick Skin",
  "char.firefighter.effect": "Regenerates health and takes half damage from explosions.",
  "char.scientist.name": "Scientist",
  "char.scientist.text": "Fragile, but sees opportunity in everything: picks up from afar and is luckier.",
  "char.scientist.ability": "Analysis",
  "char.scientist.effect": "Picks up from farther away and starts with 2 Luck.",
  "char.rocker.name": "Rocker",
  "char.rocker.text": "Fast on his feet and on the trigger. He just can't take a beating.",
  "char.rocker.ability": "Rhythm",
  "char.rocker.effect": "+15% attack speed.",
  "char.granny.name": "Granny",
  "char.granny.text": "Slow and fragile, but her luck is out of this world.",
  "char.granny.ability": "Granny's Luck",
  "char.granny.effect": "Starts with 8 Luck.",
  "arsenal.title": "Arsenal",
  "arsenal.text": "Weapons that fire on their own: melee, projectiles, cones of fire, sound waves, boomerangs, mines and gas clouds. Hover or tap to see the evolved version.",
  "nav.roadmap": "Roadmap",
  "roadmap.title": "Roadmap",
  "roadmap.text": "The game is playable from start to finish and is in the polish phase. From here on:",
  "roadmap.done": "Done",
  "roadmap.done1": "A horde of hundreds of zombies that surrounds the player",
  "roadmap.done2": "24 weapons with evolutions and 6 characters",
  "roadmap.done3": "3 stages with lakes, mud, towns and structures",
  "roadmap.done4": "Shop, Threat, endless mode, rankings and 17 achievements",
  "roadmap.done5": "8 languages and controller support",
  "roadmap.done6": "Character skins unlocked by challenges",
  "roadmap.done7": "Tips for first-time players",
  "roadmap.done8": "Rebindable keys and buttons",
  "roadmap.done9": "Boss and final-stretch music",
  "roadmap.now": "Now",
  "roadmap.now1": "Balancing the 30-minute run",
  "roadmap.next": "Next",
  "roadmap.next1": "Steam page and wishlist",
  "roadmap.next2": "Steam achievements and leaderboards",
  "roadmap.next3": "Community Discord with bug reporting",
  "roadmap.future": "Future",
  "roadmap.future1": "2-player co-op",
  "roadmap.future2": "New stages, zombies and bosses",
  "roadmap.future3": "New characters",
  "credits.title": "Credits",
  "credits.art": "Environment, zombie and item art:",
  "credits.music": "Music:",
  "credits.and": "and",
  "credits.own_music": "The boss and final-stretch music were composed for the game.",
  "credits.fonts": "Fonts:",
  "credits.engine": "Made with Godot Engine.",
  "lightbox.close": "Close",
  "lightbox.prev": "Previous",
  "lightbox.next": "Next",
  "stats.horde": "zombies on screen",
  "stats.weapons": "weapons, all with evolutions",
  "stats.zombies": "zombie types and 3 bosses",
  "stats.characters": "survivors, 18 skins",
  "stats.achievements": "achievements",
  "gallery.open": "Click a screenshot to see it larger.",
  "nav.guide": "Guide",
  "guide.title": "Game guide",
  "guide.text": "Everything you need to know to survive your first runs.",
  "guide.play": "How to play",
  "guide.play.0": "Pick a character and a stage and drop into a map full of zombies. Your weapons attack the nearest zombie on their own: your job is to move, position yourself, grab what drops and decide how to get stronger.",
  "guide.play.1": "<strong>Normal mode:</strong> 30 minutes, with bosses along the way and the Colossus at the end. Defeat it to win.",
  "guide.play.2": "<strong>Endless mode:</strong> unlocked by winning normal mode. The horde never stops growing.",
  "guide.play.3": "<strong>Keyboard:</strong> WASD or arrows to move, E to interact, hold Tab for the map, R, B and P to reroll, banish and skip, Esc to pause.",
  "guide.play.4": "<strong>Controller:</strong> stick to move, X to interact, Select for the map, Y, LB and RB on choices, Start to pause. Everything can be rebound in Settings.",
  "guide.level": "Leveling up",
  "guide.level.0": "Zombies drop experience crystals. When you level up, the game pauses and offers 1 of 3 upgrades:",
  "guide.level.1": "<strong>Knowledges:</strong> raise an attribute (damage, health, speed, crits, luck...).",
  "guide.level.2": "<strong>Weapons:</strong> a new weapon or another level for one you have, with random bonus attributes.",
  "guide.level.3": "<strong>Rarity:</strong> Common, Uncommon, Rare, Epic or Legendary; the rarer, the stronger. Luck improves the odds of rare ones.",
  "guide.level.4": "<strong>Slots:</strong> 3 weapon and 3 knowledge slots per run (the 4th of each is sold in the shop).",
  "guide.level.5": "<strong>Reroll, banish and skip:</strong> swap the options, remove one from the run or move on without picking.",
  "guide.weapons": "Weapons and evolutions",
  "guide.weapons.0": "There are 24 weapons with different behaviors: shooting, melee, cones of fire, sound waves, a boomerang, grenades, mines, spinning blades and gas clouds.",
  "guide.weapons.1": "<strong>Evolution:</strong> take a weapon to level 8 with the right knowledge and it becomes a legendary version, always stronger.",
  "guide.weapons.2": "<strong>Examples:</strong> Pistol + Sniper's Dossier = Elite Pistol; Flamethrower + Medical Report = Napalm Flamethrower; Katana + Autopsy Report = Master's Katana.",
  "guide.weapons.3": "<strong>Airdrops:</strong> crates bring upgrades for your weapons only, including explosive, freezing and burning effects.",
  "guide.map": "The map",
  "guide.map.0": "Three stages, each with randomized towns, farms, graveyards and junkyards. Explore to find:",
  "guide.map.1": "<strong>Abandoned cars:</strong> pay gold to loot a piece of survival gear.",
  "guide.map.2": "<strong>Camps:</strong> stay in the circle until the fire lights up to get an attribute bonus.",
  "guide.map.3": "<strong>Cursed tombs:</strong> awakening one makes the horde bigger until the end: more danger and more experience.",
  "guide.map.4": "<strong>Structures:</strong> a merchant, a workbench that duplicates gear, a radio tower that pulls everything in and a siren that calls an elite carrying supplies.",
  "guide.map.5": "<strong>Military airdrops:</strong> every 3 minutes; follow the arrow and stand by the crate to open it.",
  "guide.map.6": "<strong>Lakes and mud:</strong> slow down both you and the zombies.",
  "guide.zombies": "Zombies",
  "guide.zombies.0": "<strong>Common:</strong> slow and weak, but comes in absurd numbers.",
  "guide.zombies.1": "<strong>Runner:</strong> small and fast.",
  "guide.zombies.2": "<strong>Exploder:</strong> runs at you and explodes, even when it dies.",
  "guide.zombies.3": "<strong>Mutant:</strong> barely moves, but spits from afar.",
  "guide.zombies.4": "<strong>Brute:</strong> lots of health and damage.",
  "guide.zombies.5": "<strong>Rammer:</strong> stops, shakes in red and charges in a straight line: get out of the way.",
  "guide.zombies.6": "<strong>Bloater:</strong> releases three Crawlers when it dies.",
  "guide.zombies.7": "<strong>Armored:</strong> blocks 60% of every hit, but not fire, acid or explosions.",
  "guide.zombies.8": "<strong>Bosses:</strong> the Butcher, the Spitter and the Colossus, the final boss.",
  "guide.powerups": "Power-ups",
  "guide.powerups.0": "Every now and then the horde drops a temporary power-up. Picking it up again refreshes the timer.",
  "guide.powerups.1": "<strong>Fury:</strong> +50% attack speed for 10 s.",
  "guide.powerups.2": "<strong>Adrenaline:</strong> +40% speed for 10 s.",
  "guide.powerups.3": "<strong>Shield:</strong> no damage for 6 s.",
  "guide.powerups.4": "<strong>Heart:</strong> restores 30% of your health.",
  "guide.powerups.5": "<strong>Magnet:</strong> pulls in everything on the ground.",
  "guide.powerups.6": "<strong>Time stop:</strong> freezes the horde for 5 s.",
  "guide.powerups.7": "<strong>Cash:</strong> kills drop coins for 12 s.",
  "guide.progress": "Progress",
  "guide.progress.0": "<strong>Coins:</strong> you keep them even when you die.",
  "guide.progress.1": "<strong>Shop:</strong> extra slots, reroll, banish and skip charges, and permanent attribute upgrades.",
  "guide.progress.2": "<strong>Threat:</strong> five difficulty levels per stage, with more coins and score; win one to unlock the next.",
  "guide.progress.3": "<strong>Unlocks:</strong> characters, weapons, stages and skins unlocked through challenges.",
  "guide.progress.4": "<strong>Achievements and rankings:</strong> 17 achievements, local leaderboards and a history of your recent runs.",
  "footer.rights": "Images are in-game screenshots; the art belongs to its authors.",
};

// Ícones das armas desenhadas para o jogo (arte própria) e o nome de cada uma.
const WEAPONS = [
  ["slingshot", "Estilingue", "Slingshot"],
  ["flamethrower", "Lança-chamas", "Flamethrower"],
  ["extinguisher", "Extintor", "Extinguisher"],
  ["guitar", "Guitarra", "Guitar"],
  ["slipper", "Chinelo", "Slipper"],
  ["acid_flask", "Frasco de ácido", "Acid Flask"],
  ["rifle", "Fuzil", "Rifle"],
  ["machine_gun", "Metralhadora", "Machine Gun"],
  ["bat", "Taco de beisebol", "Baseball Bat"],
  ["chainsaw", "Motosserra", "Chainsaw"],
  ["katana", "Katana", "Katana"],
  ["crossbow", "Besta", "Crossbow"],
  ["revolver", "Revólver", "Revolver"],
  ["throwing_knife", "Facas de arremesso", "Throwing Knives"],
  ["flare_gun", "Sinalizador", "Flare Gun"],
  ["bazooka", "Bazuca", "Bazooka"],
  ["molotov", "Coquetel molotov", "Molotov Cocktail"],
  ["landmine", "Minas terrestres", "Landmines"],
  ["saw_blade", "Lâminas de serra", "Saw Blades"],
  ["tear_gas", "Gás lacrimogêneo", "Tear Gas"],
];

const PT = {};
// Textos com formatação (negrito) do guia: trocados como HTML, vindos só
// deste arquivo e do próprio index.html.
const PT_HTML = {};
const PT_TITLES = {};
const PT_ARIA = {};
document.querySelectorAll("[data-i18n]").forEach((node) => {
  PT[node.dataset.i18n] = node.textContent;
});

function buildWeapons() {
  const list = document.getElementById("weapons");
  for (const [id] of WEAPONS) {
    const item = document.createElement("li");
    item.tabIndex = 0;
    item.dataset.weapon = id;
    const base = document.createElement("img");
    base.src = `images/weapons/${id}.png`;
    base.alt = "";
    base.loading = "lazy";
    const evolved = document.createElement("img");
    evolved.src = `images/weapons/${id}-evolved.png`;
    evolved.alt = "";
    evolved.loading = "lazy";
    evolved.className = "evolved";
    item.append(base, evolved);
    list.append(item);
  }
}

function setLanguage(lang) {
  const english = lang === "en";
  document.documentElement.lang = english ? "en" : "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = english ? (EN[key] ?? PT[key]) : PT[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (!(key in PT_HTML)) PT_HTML[key] = node.innerHTML;
    node.innerHTML = english ? (EN[key] ?? PT_HTML[key]) : PT_HTML[key];
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    const key = node.dataset.i18nTitle;
    if (!(key in PT_TITLES)) PT_TITLES[key] = node.title;
    node.title = english ? (EN[key] ?? PT_TITLES[key]) : PT_TITLES[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const key = node.dataset.i18nAria;
    if (!(key in PT_ARIA)) PT_ARIA[key] = node.getAttribute("aria-label");
    node.setAttribute("aria-label", english ? (EN[key] ?? PT_ARIA[key]) : PT_ARIA[key]);
  });
  document.querySelectorAll("img[data-shot]").forEach((img) => {
    img.src = `images/shots/${img.dataset.shot}-${english ? "en" : "pt"}.png`;
  });
  document.querySelectorAll("#weapons li").forEach((item) => {
    const weapon = WEAPONS.find(([id]) => id === item.dataset.weapon);
    item.title = english ? weapon[2] : weapon[1];
    item.setAttribute("aria-label", item.title);
  });
  document.querySelectorAll(".lang button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  try {
    localStorage.setItem("zumbillion-lang", lang);
  } catch (error) {
    // Sem armazenamento (aba anônima): o idioma só não fica lembrado.
  }
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem("zumbillion-lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch (error) {
    // Ignorado: cai no idioma do navegador.
  }
  return (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
}

// Galeria ampliada: clicar numa captura abre ela grande; dá para passar e
// voltar pelos botões, pelas setas do teclado ou deslizando o dedo.
function buildLightbox() {
  const figures = [...document.querySelectorAll("#galeria figure")];
  const dialog = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");
  const caption = document.getElementById("lightbox-caption");
  const count = document.getElementById("lightbox-count");
  let current = 0;
  let opener = null;

  const show = (index) => {
    current = (index + figures.length) % figures.length;
    const figure = figures[current];
    image.src = figure.querySelector("img").src;
    caption.textContent = figure.querySelector("figcaption").textContent;
    count.textContent = `${current + 1} / ${figures.length}`;
  };
  const open = (index) => {
    opener = figures[index];
    show(index);
    dialog.showModal();
  };

  figures.forEach((figure, index) => {
    figure.tabIndex = 0;
    figure.setAttribute("role", "button");
    figure.addEventListener("click", () => open(index));
    figure.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(index);
      }
    });
  });
  dialog.querySelector(".lightbox-prev").addEventListener("click", () => show(current - 1));
  dialog.querySelector(".lightbox-next").addEventListener("click", () => show(current + 1));
  dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") show(current - 1);
    if (event.key === "ArrowRight") show(current + 1);
  });
  // Clicar fora da imagem e dos botões fecha.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.tagName === "FIGURE") dialog.close();
  });
  dialog.addEventListener("close", () => opener && opener.focus());
  let touchX = null;
  dialog.addEventListener("touchstart", (event) => {
    touchX = event.changedTouches[0].clientX;
  }, { passive: true });
  dialog.addEventListener("touchend", (event) => {
    if (touchX === null) return;
    const distance = event.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(distance) > 40) show(current + (distance < 0 ? 1 : -1));
  });
  // Ao trocar o idioma com a galeria aberta, a imagem e a legenda acompanham.
  document.querySelectorAll(".lang button").forEach((button) => {
    button.addEventListener("click", () => {
      if (dialog.open) show(current);
    });
  });
}

// --- Animações -------------------------------------------------------------
// Tudo respeita "reduzir movimento" do sistema: sem ele, nada se mexe.
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Capturas do topo se alternando.
function buildSlideshow() {
  const slides = [...document.querySelectorAll("#hero-shot .slide")];
  if (REDUCED || slides.length < 2) return;
  let current = 0;
  setInterval(() => {
    if (document.hidden) return;
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4200);
}

// Brasas subindo atrás do topo: poucos quadradinhos, como pixels de fogo.
function buildEmbers() {
  const canvas = document.getElementById("embers");
  if (REDUCED || !canvas) return;
  const context = canvas.getContext("2d");
  const colors = ["#f5cf55", "#e8833a", "#c8432f"];
  let embers = [];
  let visible = true;
  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const count = Math.min(48, Math.round(canvas.width / 28));
    embers = Array.from({ length: count }, () => spawn(true));
  };
  const spawn = (anywhere) => ({
    x: Math.random() * canvas.width,
    y: anywhere ? Math.random() * canvas.height : canvas.height + 4,
    speed: 0.25 + Math.random() * 0.6,
    drift: (Math.random() - 0.5) * 0.3,
    size: Math.random() < 0.7 ? 2 : 3,
    life: 0.4 + Math.random() * 0.6,
    color: colors[Math.floor(Math.random() * colors.length)],
  });
  const frame = () => {
    if (visible && !document.hidden) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (let index = 0; index < embers.length; index += 1) {
        const ember = embers[index];
        ember.y -= ember.speed;
        ember.x += ember.drift + Math.sin(ember.y / 30) * 0.15;
        if (ember.y < -4) embers[index] = spawn(false);
        context.globalAlpha = ember.life * Math.min(1, ember.y / (canvas.height * 0.6)) * (0.6 + Math.random() * 0.4);
        context.fillStyle = ember.color;
        context.fillRect(Math.round(ember.x), Math.round(ember.y), ember.size, ember.size);
      }
    }
    requestAnimationFrame(frame);
  };
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(canvas);
  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(frame);
}

// Números que contam até o valor quando a faixa aparece.
function buildCounters() {
  const numbers = [...document.querySelectorAll("[data-count]")];
  if (REDUCED) return;
  numbers.forEach((node) => { node.textContent = "0"; });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      const target = Number(entry.target.dataset.count);
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / 1100);
        entry.target.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  numbers.forEach((node) => observer.observe(node));
}

// Seções e cartões aparecem ao rolar, em sequência.
function buildReveal() {
  const targets = [...document.querySelectorAll("main > section:not(.hero) > h2, main > section:not(.hero) > .lead, .card:not(.guide-panel), .guide, #galeria figure, .weapons li, .stat")];
  if (REDUCED) return;
  targets.forEach((node) => {
    node.classList.add("reveal");
    const siblings = [...node.parentElement.children].filter((child) => child.classList.contains("reveal"));
    node.style.setProperty("--delay", `${Math.min(siblings.indexOf(node), 8) * 70}ms`);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const node = entry.target;
        node.classList.add("visible");
        observer.unobserve(node);
        // Depois de aparecer, volta às transições próprias (o hover dos
        // cartões não pode herdar a demora da entrada).
        const delay = parseInt(node.style.getPropertyValue("--delay"), 10) || 0;
        setTimeout(() => node.classList.remove("reveal", "visible"), 700 + delay);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((node) => observer.observe(node));
}

// Abas do guia: clique, toque ou setas do teclado.
function buildGuideTabs() {
  const tabs = [...document.querySelectorAll(".guide-tabs [role=tab]")];
  const select = (tab) => {
    tabs.forEach((other) => {
      const active = other === tab;
      other.setAttribute("aria-selected", String(active));
      other.tabIndex = active ? 0 : -1;
      document.getElementById(other.getAttribute("aria-controls")).hidden = !active;
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => select(tab));
    tab.addEventListener("keydown", (event) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (!step) return;
      event.preventDefault();
      const next = tabs[(index + step + tabs.length) % tabs.length];
      select(next);
      next.focus();
    });
  });
}

buildWeapons();
buildLightbox();
buildGuideTabs();
buildSlideshow();
buildEmbers();
buildCounters();
buildReveal();
document.querySelectorAll(".lang button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
setLanguage(initialLanguage());
