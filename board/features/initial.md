
# Quest Board

> Implementação da tela principal do TaskeRPG.

## Objetivo

Esta feature implementa o **Quest Board**, a principal tela do TaskeRPG.

É o local onde a Guilda acompanha sua campanha atual, derrota Bosses e gerencia as Quest Scrolls durante o fluxo de desenvolvimento.

O Quest Board representa o **Salão de Missões da Guilda**, nunca um dashboard corporativo.

---

# Estrutura da Tela

A estrutura da tela é fixa.

A implementação **não pode alterar** sua organização.

```text
 _________________________________________________
| [menu] board name               (avatar)        |
|-------------------------------------------------|
| [badge do inimigo] Nome do Boss                 |
|------------| Barra de Vida do Boss |------------|
|                                                 |
| [Lane]   [Lane]   [Lane]   [Lane]   [Lane]      |
|                                                 |
| Quest     Quest    Quest    Quest    Quest      |
| Scroll    Scroll   Scroll   Scroll   Scroll     |
|                                                 |
|-------------------------------------------------|
```

Toda implementação deve respeitar exatamente esta composição.

A IA **não possui liberdade para reorganizar regiões da tela**.

---

# Hierarquia

## 1. Header

Contém:

* botão do menu
* nome do Board
* avatar do usuário

É a navegação principal da tela.

Não deve competir visualmente com o Boss.

---

## 2. Boss Section

Logo abaixo do Header.

Contém:

* Badge do Boss
* Nome
* Barra de HP

Representa o objetivo principal da campanha.

Caso não exista Boss ativo, a região permanece reservada para manter consistência visual.

---

## 3. Quest Board

Ocupa praticamente toda a tela.

Contém apenas as Lanes.

Cada Lane contém Quest Scrolls.

O board deve possuir scroll horizontal quando necessário.

---

# Lanes

Cada Lane representa um estágio da Quest.

Exemplo:

* Disponíveis
* Em Progresso
* Avaliação
* Concluídas

Cada Lane possui:

* Cabeçalho
* Contador
* Lista de Quest Scrolls

---

# Quest Scrolls

As tarefas são representadas por Quest Scrolls.

Nunca utilizar cards corporativos.

Cada Quest Scroll deve utilizar:

* Material Paper
* Moldura
* Profundidade
* Hover
* Drag & Drop
* Estados visuais

As Quest Scrolls representam monstros da campanha.

---

# Componentes Permitidos

Esta página deve ser construída exclusivamente utilizando componentes reutilizáveis.

Exemplos:

* MainLayout
* Header
* BossBanner
* BossHealthBar
* QuestBoard
* QuestLane
* QuestScroll
* Badge
* Avatar
* Tooltip
* Button

---

# Restrições Arquiteturais

Esta tela NÃO deve conter aparência própria.

Toda identidade visual deve emergir dos componentes reutilizáveis e dos Design Tokens.

A página deve apenas organizar componentes.

É proibido criar CSS específico desta tela para resolver problemas visuais.

Caso algum componente exija CSS exclusivo, o componente deve ser evoluído em vez da página receber estilos específicos.

Não criar variantes exclusivas de componentes para esta feature.

Toda aparência pertence ao componente, nunca à página.

---

# Responsabilidades da Feature

Esta feature é responsável apenas por:

* organizar a estrutura do Quest Board;
* posicionar os componentes;
* integrar drag & drop;
* integrar dados do board;
* integrar dados do Boss;
* integrar navegação.

Não é responsabilidade desta feature definir aparência visual dos componentes.

---

# Responsividade

## Desktop

Lanes ocupam toda largura disponível.

## Tablet

Scroll horizontal nas Lanes.

## Mobile

Quest Board continua horizontal.

Sidebar torna-se Drawer.

A estrutura geral permanece exatamente a mesma.

---

# Performance

* Preparar Quest Scrolls para virtualização.
* Evitar re-renderizações desnecessárias.
* Utilizar apenas animações baseadas em transform e opacity.
* Não gerar layout shifts durante Drag & Drop.

---

# Critérios de Aceite

A implementação será considerada concluída quando:

* a estrutura da tela corresponder exatamente ao wireframe definido;
* todos os componentes forem reutilizáveis;
* nenhum estilo visual estiver acoplado à página;
* a tela transmitir a sensação de um Salão de Missões de um JRPG antes de parecer um software de gerenciamento de tarefas.

Você está fazendo concept art para um videogame.

O objetivo NÃO é entregar uma interface pronta.

O objetivo é explorar possibilidades.

Cada imagem deve experimentar uma direção completamente diferente.

Não reutilize layouts.

Não reutilize materiais.

Não reutilize paletas.

Não tente agradar.

Arrisque.

Busque referências em jogos AAA lançados entre 2022 e 2026.

A interface deve parecer pertencer ao mesmo nível de qualidade visual de:

- Persona 5
- Honkai Star Rail
- Zenless Zone Zero
- Pokémon TCG Pocket
- Balatro
- Metaphor ReFantazio
- Infinity Nikki

A interface deve parecer moderna.

Nunca medieval.

Nunca um dashboard corporativo.

Nunca uma aplicação SaaS.

Nunca uma skin de Trello.

A interface deve ser altamente artística.

O resultado deve parecer concept art produzido por um estúdio de jogos antes do desenvolvimento.
