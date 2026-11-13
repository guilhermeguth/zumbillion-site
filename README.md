# Zumbillion: site

Página oficial do **Zumbillion**, um jogo de sobrevivência contra hordas de zumbis (action roguelite, top-down 2D, combate automático) para PC.

Publicada pelo GitHub Pages a partir da branch `main`: https://guilhermeguth.github.io/zumbillion-site/

## Estrutura

- `index.html`: a página, com os textos em português.
- `script.js`: os textos em inglês, a troca de idioma (lembrada no navegador) e a lista de armas.
- `style.css`: o visual, na estética pixel art do jogo.
- `images/shots/`: capturas do jogo em português (`-pt`) e em inglês (`-en`).
- `images/characters/` e `images/weapons/`: arte própria do jogo, ampliada sem suavização.

Site estático, sem build: abra o `index.html` ou sirva a pasta (`python3 -m http.server`).

## Regra da arte (importante)

O jogo usa o pacote **Zombie Apocalypse Tileset**, de Ittai Manero, cuja licença **proíbe redistribuir os sprites**. Por isso este repositório público só pode ter:

- **capturas de tela do jogo** (divulgação do jogo);
- **arte própria** do Zumbillion: os personagens e os ícones desenhados no script de assets do jogo;
- textos e código.

Nunca adicione aqui PNGs crus do pacote, folhas de sprites ou tiles. As capturas são geradas pelo próprio jogo, sem abrir janela.

## Fluxo de trabalho

O mesmo do jogo: cartão no Project "Zumbillion" do GitHub, branch `<N>-MAIN`, PR em Conventional Commits (em inglês) com descrição em português, revisão e mesclagem com rebase.
