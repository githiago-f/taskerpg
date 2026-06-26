
# Feature: Board Redesign
Version: 2.0
Status: Design Specification

---

# Objetivo

Redesenhar completamente a tela principal do TaskeRPG.

O resultado NÃO deve lembrar Trello, Jira, Linear, Asana ou qualquer outro Kanban tradicional.

A tela deve transmitir imediatamente a sensação de estar dentro de uma Guild Hall de um JRPG moderno.

O usuário deve enxergar primeiro um jogo.
Somente depois perceber que está utilizando um gerenciador de tarefas.

---

# Tecnologias

Frontend

- React
- TanStack
- TailwindCSS
- Framer Motion
- dnd-kit (@dnd-kit/core)

NÃO implementar drag & drop manualmente.

Todo movimento das Quest Scrolls deve utilizar dnd-kit.

---

# Estrutura da Tela

A tela será composta por quatro regiões.

──────────────────────────────────────

1. Header

Altura pequena.

Contém:

- Menu Button
- Nome da Guild
- Nome do Board
- Breadcrumb
- Avatar do usuário
- Configurações

O Header permanece fixo.

Não utilizar barras enormes.

---

2. Boss Area

Logo abaixo do Header.

É o elemento mais importante da tela.

Contém:

- Boss Avatar (placeholder)
- Boss Name
- Boss Subtitle
- HP Bar
- HP atual
- Campanha atual
- Recompensa do Boss (placeholder)

Toda Sprint gira em torno deste Boss.

Visualmente deve parecer um HUD de batalha.

---

3. Quest Board

Maior região da tela.

Contém apenas:

Quest Lanes

Cada lane representa um estágio do fluxo.

Exemplo:

Available

In Progress

Review

Completed

As lanes ocupam toda largura disponível.

Cada lane possui scroll vertical independente.

A área do board possui scroll horizontal.

---

4. Floating HUD

No canto inferior direito.

Reservado para:

Party Combo

XP ganho recentemente

Loot

Notificações

Não implementar agora.

Apenas reservar espaço.

---

# Quest Lanes

Cada lane contém:

Título

Quantidade

Drop Area

Quest Scrolls

Não utilizar grandes cabeçalhos.

O foco deve permanecer nas Quests.

---

# Quest Scroll

Este é o componente mais importante do sistema.

Não é um card corporativo.

É um objeto físico.

Inspirado em:

- Cartas de JRPG
- Hearthstone
- Yu-Gi-Oh (hierarquia visual, não estética)

Não utilizar:

- Badge enorme
- Barra colorida lateral
- Labels redundantes

---

## Estrutura

┌───────────────────────────────┐

Monster Portrait

Quest Name

Descrição curta

Mini atributos

Footer

└───────────────────────────────┘

---

# Cabeçalho

Contém:

Portrait Placeholder

Título

Status Icons

Não utilizar badge dizendo:

"In Progress"

"Review"

etc.

A própria Lane já comunica isso.

---

# Portrait

Placeholder circular.

No futuro receberá:

Monster Portrait

Enquanto não existir arte utilizar:

silhouette

ou

crystal placeholder

Nunca iniciais.

---

# Título

Maior elemento textual.

Máximo:

2 linhas

Overflow elegante.

---

# Descrição

Opcional.

Até três linhas.

Fade ao final.

---

# Mini Atributos

Pequena linha horizontal contendo apenas ícones.

Exemplo

⚔ XP

❤ HP restante

⏱ Estimativa

💎 Loot

🔥 Combo

Sem textos.

Apenas tooltip.

---

# Footer

Avatar(s)

Quest Points

Prioridade

Nunca utilizar grandes badges.

---

# Drag & Drop

Utilizar exclusivamente dnd-kit.

Durante drag:

Quest Scroll levanta.

Recebe sombra.

Pequena rotação.

Leve aumento de escala.

Lane destino recebe highlight.

Ao soltar:

Compressão suave.

Retorno.

Nenhuma animação brusca.

---

# Componentes

Criar apenas estes componentes.

BoardLayout

BoardHeader

BossBanner

QuestBoard

QuestLane

QuestScroll

QuestScrollFooter

QuestAttributes

QuestPortrait

LaneHeader

FloatingHUD

---

# Placeholders

Todos os elementos gráficos devem possuir placeholders consistentes.

Boss

Imagem circular.

Monster

Imagem circular.

Loot

Ícone de baú.

Avatar

Silhouette.

Banner

Gradiente.

Nunca utilizar imagens aleatórias.

---

# Paleta

Seguir os Design Tokens do projeto.

Utilizar:

Background

Night Blue

Surface

Stone

Accent

Magic Blue

Danger

Boss Red

Reward

Gold

Success

Forest Green

Nunca utilizar cores hardcoded.

---

# Materiais

Quest Scroll

Paper + Steel Frame

Boss Banner

Stone + Gold

Header

Dark Wood

HUD

Stone

Botões

Steel

Elementos mágicos

Crystal

---

# Iconografia

Preferir Lucide apenas como placeholder técnico.

Todos os ícones finais serão substituídos.

Posições:

Quest

Atributos

Botões

HUD

Menu

Avatar

Nunca utilizar ícones grandes.

---

# Motion

Hover

Lift

Drag

Tilt

Glow discreto

Press

Scale 0.98

Spawn

Fade + Scale

Destroy

Fade

Boss

Respiração lenta

HP

Transição suave

---

# Responsividade

Desktop

5 lanes visíveis.

Notebook

4 lanes.

Tablet

Horizontal scroll.

Mobile

Uma lane por vez.

Troca por swipe.

Jamais tentar comprimir cinco colunas.

---

# Restrições

Não criar UI corporativa.

Não utilizar badges redundantes.

Não utilizar grandes blocos coloridos.

Não repetir informações.

Não utilizar gradientes exagerados.

Não utilizar glassmorphism.

Não utilizar cards planos.

Não utilizar Material Design.

Não utilizar componentes que pareçam Bootstrap.

Não utilizar barras laterais gigantes.

Não esconder o conteúdo atrás de ornamentos.

A produtividade continua sendo prioridade.

---

# Resultado Esperado

A tela deve transmitir imediatamente:

"Estou organizando uma campanha de RPG."

e não

"Estou usando um Kanban com tema medieval."

Toda decisão visual deve favorecer:

- imersão
- clareza
- movimento
- profundidade
- sensação de objeto físico

O Board deve parecer um produto premium, moderno, lúdico e altamente utilizável.
