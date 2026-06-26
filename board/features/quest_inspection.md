
# Feature: Quest Inspection Modal

Status: Planned

---

# Objetivo

Permitir que o usuário visualize todos os detalhes de uma Quest Scroll sem perder o contexto do Quest Board.

A interação deve transmitir a sensação de retirar uma carta do tabuleiro e analisá-la nas mãos.

Não implementar um modal corporativo.

Não utilizar Dialogs genéricos.

A experiência deve parecer um videogame.

---

# Abertura

Ao clicar em uma Quest Scroll:

1. A Quest Scroll original permanece em seu lugar.
2. Uma cópia animada da Quest Scroll cresce até o centro da tela.
3. O background recebe um overlay escuro e levemente desfocado.
4. Todo o foco passa para a carta.

A animação deve ser extremamente suave.

---

# Estrutura

               Overlay

          ┌───────────────────┐
          │                   │
          │   Quest Scroll    │
          │                   │
          └───────────────────┘

 Elementos orbitam a Quest Scroll.

Nunca ficam dentro dela.

---

# Filosofia

A Quest Scroll continua sendo o protagonista.

Todas as demais informações existem para complementá-la.

A carta nunca deve desaparecer dentro de um painel cheio de texto.

---

# Layout

                Quest Name

        ┌─────────────────────┐
        │                     │
        │                     │
        │     Quest Scroll    │
        │                     │
        │                     │
        └─────────────────────┘

  Objectives      Rewards

  Party           History

  Comments        Activity

---

# Região Central

Ocupada apenas pela Quest Scroll.

Ela deve permanecer completamente visível.

Nunca esconder partes dela.

Nunca colocar componentes sobrepostos.

---

# Painéis Laterais

As informações adicionais ficam ao redor da carta.

Exemplos:

## Objectives

Checklist

Subquests

Critérios

---

## Rewards

XP

Loot

Achievements

Boss Damage

---

## Party

Responsáveis

QA

Reviewer

Guild

---

## Activity

Timeline

Eventos

Comentários

Histórico

---

# Movimento

Abrir

Quest Scroll cresce.

Leve rotação.

Sombra aumenta.

Background desfoca.

Painéis aparecem alguns milissegundos depois.

Primeiro a carta.

Depois a interface.

---

Fechar

Painéis desaparecem.

Quest Scroll retorna exatamente para sua posição original.

Nada teleporta.

---

# Componentes

QuestInspectionModal

QuestInspectionLayout

QuestPreview

QuestObjectivesPanel

QuestRewardsPanel

QuestPartyPanel

QuestHistoryPanel

QuestCommentsPanel

QuestMetadataPanel

---

# Quest Preview

A carta exibida no modal não é outra implementação.

É exatamente o mesmo componente QuestScroll.

Apenas recebe uma variante "inspection".

Não duplicar código.

---

# Informações extras

A Quest Scroll continua minimalista.

As informações avançadas pertencem ao modal.

Exemplos:

- descrição completa;
- critérios de aceite;
- histórico;
- comentários;
- anexos;
- links;
- dependências;
- métricas.

---

# Overlay

Utilizar:

- fundo escurecido;
- blur leve;
- vinheta discreta.

O Board deve continuar visível ao fundo.

O usuário nunca deve sentir que mudou de página.

---

# Responsividade

Desktop

Quest Scroll central.

Painéis distribuídos ao redor.

Tablet

Painéis tornam-se abas.

Mobile

A Quest Scroll ocupa quase toda a largura.

As informações ficam abaixo em seções recolhíveis (Accordion).

A carta permanece sempre visível no topo.

---

# Experiência

Abrir uma Quest Scroll deve parecer semelhante a abrir uma carta rara em um jogo de cartas.

O usuário deve sentir que está inspecionando um artefato importante.

Nunca um formulário.
