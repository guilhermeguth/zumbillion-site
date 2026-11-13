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
  "roadmap.now": "Now",
  "roadmap.now1": "Balancing the 30-minute run",
  "roadmap.now3": "Tips for first-time players",
  "roadmap.now4": "Rebindable keys and buttons",
  "roadmap.now5": "Boss and final-stretch music",
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
  "credits.fonts": "Fonts:",
  "credits.engine": "Made with Godot Engine.",
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
const PT_TITLES = {};
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
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    const key = node.dataset.i18nTitle;
    if (!(key in PT_TITLES)) PT_TITLES[key] = node.title;
    node.title = english ? (EN[key] ?? PT_TITLES[key]) : PT_TITLES[key];
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

buildWeapons();
document.querySelectorAll(".lang button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
setLanguage(initialLanguage());
