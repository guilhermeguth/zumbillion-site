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

A seção "Atualizações" mostra, por data, tudo o que o jogador percebe no jogo. **O `updates.js` é gerado pelo repositório do jogo; não edite à mão.** Cada entrega do jogo que o jogador perceba ganha uma novidade em `resources/changelog/` do jogo (a mesma lista da página Novidades do jogo e do `CHANGELOG.md`), com o texto em inglês nas traduções do jogo. Para atualizar o site, com os dois repositórios lado a lado:

```bash
python3 tools/build_docs.py --site=../zumbillion-site   # rodado na pasta do jogo
```

e o `updates.js` entra no PR do site que cita o mesmo cartão. A página mostra as duas datas mais recentes e o botão "Ver todas" abre o resto. Como o repositório do jogo é privado, não ponha links para os cartões.

## Relatos de bug

O botão **Relatar bug** do jogo copia um relato da partida e abre o formulário de issue deste repositório (`.github/ISSUE_TEMPLATE/bug.yml`), em português e inglês, com um campo para colar o relato. O rodapé do site tem o mesmo link. Quando o Discord da comunidade existir (roadmap), o jogo passa a apontar para lá.

## Regra da arte (importante)

O jogo usa o pacote **Zombie Apocalypse Tileset**, de Ittai Manero, cuja licença **proíbe redistribuir os sprites**. Por isso este repositório público só pode ter:

- **capturas de tela do jogo** (divulgação do jogo);
- **arte própria** do Zumbillion: os personagens e os ícones desenhados no script de assets do jogo;
- textos e código.

Nunca adicione aqui PNGs crus do pacote, folhas de sprites ou tiles. As capturas são geradas pelo próprio jogo, sem abrir janela.

## Fluxo de trabalho

O mesmo do jogo: cartão no Project "Zumbillion" do GitHub, branch `<N>-MAIN`, PR em Conventional Commits (em inglês) com descrição em português, revisão e mesclagem com rebase.
