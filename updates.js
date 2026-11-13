// Linha do tempo das atualizações do jogo, da mais recente para a mais antiga.
// Gerado por tools/build_docs.py no repositório do jogo, a partir de
// resources/changelog/ e das traduções; não edite à mão (veja o README).

const UPDATE_TAGS = {
  weapons: ["Armas", "Weapons"],
  horde: ["Horda", "Horde"],
  map: ["Mapa", "Map"],
  progress: ["Progressão", "Progression"],
  combat: ["Combate", "Combat"],
  interface: ["Interface", "Interface"],
  audio: ["Áudio", "Audio"],
  site: ["Site", "Website"],
};

const UPDATES = [
  {
    date: "2026-11-13",
    items: [
      {
        tag: "progress",
        pt: ["Sinergias", "Certos pares de equipamento e arma ganham um efeito extra, como o Napalm caseiro (galão de gasolina + lança-chamas). As opções que completam uma sinergia vêm marcadas com ★."],
        en: ["Synergies", "Some gear and weapon pairs gain an extra effect, like Homemade Napalm (gas can + flamethrower). Options that complete a synergy are marked with ★."],
      },
      {
        tag: "combat",
        pt: ["Mais impacto em cada golpe", "Ondas de choque nas explosões, uma pausa curtinha nos golpes grandes, críticos com faísca e estalo e um estrondo quando o chefe cai."],
        en: ["Punchier hits", "Shockwaves on explosions, a tiny pause on big hits, crits with a spark and a crack, and a boom when a boss goes down."],
      },
      {
        tag: "audio",
        pt: ["Música de chefe e da reta final", "Faixas próprias que entram quando um chefe aparece e nos minutos finais da partida."],
        en: ["Boss and final-stretch music", "Original tracks that kick in when a boss shows up and in the last minutes of a run."],
      },
      {
        tag: "interface",
        pt: ["Controles configuráveis", "Troque qualquer tecla ou botão do controle nas Configurações."],
        en: ["Rebindable controls", "Change any key or gamepad button in the Settings."],
      },
      {
        tag: "interface",
        pt: ["Dicas da primeira vez", "Avisos curtos explicam carros, túmulos, acampamentos, airdrops e chefes na primeira vez que aparecem."],
        en: ["First-time hints", "Short tips explain cars, tombs, camps, airdrops and bosses the first time you meet them."],
      },
      {
        tag: "interface",
        pt: ["Novidades e relato de bugs", "A versão aparece no menu e na pausa, a página Novidades lista as atualizações dentro do jogo e o botão Relatar bug copia os dados da partida e abre o formulário de relato."],
        en: ["What's new and bug reports", "The version shows in the menu and the pause screen, the What's New page lists updates inside the game, and the Report a bug button copies the run's details and opens the report form."],
      },
    ],
  },
  {
    date: "2026-11-12",
    items: [
      {
        tag: "progress",
        pt: ["Skins de personagem", "Três skins para cada personagem (Veterano, Infectado e Dourado), liberadas por desafios."],
        en: ["Character skins", "Three skins for each character (Veteran, Infected and Golden), unlocked by challenges."],
      },
      {
        tag: "map",
        pt: ["Lagos e lama", "Água e lama deixam o jogador e os zumbis mais lentos, e os mapas ganharam mais lugares e detalhes."],
        en: ["Lakes and mud", "Water and mud slow down both you and the zombies, and the maps got more places and details."],
      },
      {
        tag: "map",
        pt: ["Cidade em Ruínas", "Terceira fase: asfalto, cidades e ferros-velhos, com uma horda mais dura."],
        en: ["Ruined City", "Third stage: asphalt, towns and junkyards, with a tougher horde."],
      },
      {
        tag: "horde",
        pt: ["Zumbis novos e horda que cerca", "Aríete, Inchado e Blindado entram nas ondas, e a horda passa a cercar o jogador em vez de andar em fila."],
        en: ["New zombies and a surrounding horde", "The Rammer, the Bloater and the Armored join the waves, and the horde now surrounds you instead of trailing behind."],
      },
      {
        tag: "weapons",
        pt: ["12 armas novas e evolução para todas", "Motosserra, katana, bazuca, lâminas de serra, gás lacrimogêneo e outras. As 24 armas agora evoluem."],
        en: ["12 new weapons, evolutions for all", "Chainsaw, katana, bazooka, saw blades, tear gas and more. All 24 weapons now evolve."],
      },
      {
        tag: "progress",
        pt: ["Conhecimentos, equipamentos, power-ups e estruturas", "20 conhecimentos, 38 equipamentos de sobrevivência, 7 power-ups e estruturas no mapa: negociante, bancada, torre de rádio e sirene."],
        en: ["Knowledges, gear, power-ups and structures", "20 knowledges, 38 pieces of survival gear, 7 power-ups and map structures: trader, workbench, radio tower and siren."],
      },
      {
        tag: "progress",
        pt: ["Ameaça, loja permanente e conquistas", "Cinco níveis de Ameaça por fase, melhorias permanentes na loja, 17 conquistas e histórico das partidas."],
        en: ["Threat, permanent shop and achievements", "Five Threat levels per stage, permanent upgrades in the shop, 17 achievements and a run history."],
      },
      {
        tag: "interface",
        pt: ["8 idiomas", "Português, inglês, espanhol, francês, alemão, japonês, russo e chinês, com troca ao vivo."],
        en: ["8 languages", "Portuguese, English, Spanish, French, German, Japanese, Russian and Chinese, switchable on the fly."],
      },
      {
        tag: "site",
        pt: ["Site oficial no ar", "O site do jogo, com galeria, personagens, arsenal, guia e roadmap."],
        en: ["Official website", "The game's website, with a gallery, characters, arsenal, guide and roadmap."],
      },
    ],
  },
  {
    date: "2026-11-11",
    items: [
      {
        tag: "horde",
        pt: ["Primeira versão jogável", "Centenas de zumbis, combate automático, seis personagens, melhorias com raridade a cada nível e os modos normal e infinito."],
        en: ["First playable version", "Hundreds of zombies, automatic combat, six characters, rarity upgrades on every level and the normal and endless modes."],
      },
      {
        tag: "weapons",
        pt: ["Armas exclusivas", "Cada personagem com a sua: faca, extintor, guitarra, chinelo bumerangue, frasco de ácido e estilingue. Também chegaram escopeta, granada, fuzil, metralhadora e lança-chamas."],
        en: ["Signature weapons", "Each character gets their own: knife, extinguisher, guitar, boomerang slipper, acid flask and slingshot. The shotgun, grenade, rifle, machine gun and flamethrower arrived too."],
      },
      {
        tag: "map",
        pt: ["Mapa, minimapa e airdrops", "Mapa com bordas, neblina de guerra, minimapa e airdrops militares com melhorias para as armas."],
        en: ["Map, minimap and airdrops", "A bounded map with fog of war, a minimap and military airdrops with weapon upgrades."],
      },
      {
        tag: "map",
        pt: ["Cenário e segunda fase", "Cidades, fazendas, cemitérios e ferros-velhos espalhados pelo mapa, e a fase Campo Abandonado."],
        en: ["Scenery and a second stage", "Towns, farms, graveyards and junkyards across the map, and the Abandoned Field stage."],
      },
      {
        tag: "progress",
        pt: ["Moedas, loja, carros e acampamentos", "Moedas que ficam entre partidas, carros para saquear, túmulos amaldiçoados, acampamentos de sobreviventes e as cargas de re-rolar, banir e pular."],
        en: ["Coins, shop, cars and camps", "Coins that carry over between runs, cars to loot, cursed tombs, survivor camps and reroll, banish and skip charges."],
      },
      {
        tag: "audio",
        pt: ["Som e música", "Efeitos para tiros, acertos, coleta e menus, e música no menu e na partida."],
        en: ["Sound and music", "Effects for shots, hits, pickups and menus, plus menu and in-game music."],
      },
    ],
  },
];
