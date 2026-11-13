# Zumbillion: site

Página oficial do **Zumbillion**, um jogo de sobrevivência contra hordas de zumbis (action roguelite, top-down 2D, combate automático) para PC.

Publicada pelo GitHub Pages a partir da branch `main`: https://guilhermeguth.github.io/zumbillion-site/

## Estrutura

- `index.html`: a página, com os textos em português.
- `script.js`: os textos em inglês, a troca de idioma (lembrada no navegador), a lista de armas e a montagem da linha do tempo.
- `updates.js`: as entradas da linha do tempo de atualizações.
- `style.css`: o visual, na estética pixel art do jogo.
- `images/shots/`: capturas do jogo em português (`-pt`) e em inglês (`-en`).
- `images/characters/` e `images/weapons/`: arte própria do jogo, ampliada sem suavização.

Site estático, sem build: abra o `index.html` ou sirva a pasta (`python3 -m http.server`).

**Cache:** o GitHub Pages deixa o navegador guardar CSS e JavaScript por 10 minutos. Ao mudar o `style.css`, o `script.js` ou o `updates.js`, troque a versão no fim do endereço deles no `index.html` (`?v=AAAAMMDD` mais uma letra), para quem já visitou receber a versão nova na hora.

## Linha do tempo de atualizações

A seção "Atualizações" mostra, por data, tudo o que o jogador percebe no jogo. **Cada entrega do jogo que o jogador perceba acrescenta uma entrada no topo de `updates.js`**, no mesmo PR do site que cita o cartão:

```js
{
  tag: "weapons", // weapons, horde, map, progress, combat, interface, audio ou site
  pt: ["Título curto", "Uma ou duas frases do que mudou para quem joga."],
  en: ["Short title", "One or two sentences on what changed for players."],
},
```

Se a data ainda não existe, crie um bloco `{ date: "AAAA-MM-DD", items: [...] }` no início da lista. A página mostra as duas datas mais recentes e o botão "Ver todas" abre o resto. Como o repositório do jogo é privado, não ponha links para os cartões.

## Regra da arte (importante)

O jogo usa o pacote **Zombie Apocalypse Tileset**, de Ittai Manero, cuja licença **proíbe redistribuir os sprites**. Por isso este repositório público só pode ter:

- **capturas de tela do jogo** (divulgação do jogo);
- **arte própria** do Zumbillion: os personagens e os ícones desenhados no script de assets do jogo;
- textos e código.

Nunca adicione aqui PNGs crus do pacote, folhas de sprites ou tiles. As capturas são geradas pelo próprio jogo, sem abrir janela.

## Fluxo de trabalho

O mesmo do jogo: cartão no Project "Zumbillion" do GitHub, branch `<N>-MAIN`, PR em Conventional Commits (em inglês) com descrição em português, revisão e mesclagem com rebase.
