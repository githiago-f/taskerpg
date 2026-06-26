
# Quest Scroll Visual Redesign

A Quest Scroll ainda lembra excessivamente um card corporativo (Jira, Atlassian, Trello, Linear).

O objetivo desta implementação é abandonar completamente essa linguagem visual.

A Quest Scroll deve parecer um objeto colecionável do universo do jogo.

## Não queremos

- Um retângulo com borda.
- Um card cinza.
- Um painel com padding.
- Um bloco de texto.
- Um container Bootstrap.
- Um card Atlassian com um ícone.

Se ao remover os textos o componente ainda parecer um card de software, ele falhou.

---

## Queremos

Uma Quest Scroll que pareça um item físico.

Ela deve transmitir imediatamente que possui valor.

O usuário deve sentir vontade de clicar nela.

Mesmo parada, ela precisa parecer um objeto pertencente ao universo do jogo.

---

## Hierarquia Visual

A informação mais importante não deve ser o texto.

A própria Quest Scroll precisa possuir identidade.

O componente deve comunicar:

- profundidade;
- material;
- peso;
- acabamento;
- raridade.

Antes mesmo de ler seu conteúdo.

---

## Estrutura

A Quest Scroll deve ser composta por múltiplas camadas.

Exemplo:

- Background
- Moldura
- Área da ilustração
- Área do conteúdo
- Área dos atributos
- Footer

Essas regiões devem ser claramente percebidas.

---

## Moldura

Evite uma simples borda CSS.

A moldura deve possuir identidade.

Ela pode utilizar:

- pequenos entalhes;
- cantos diferenciados;
- ornamentação discreta;
- detalhes metálicos;
- linhas internas.

Sem exageros.

---

## Área da Ilustração

Toda Quest Scroll possui uma região dedicada ao monstro.

Enquanto não existirem ilustrações:

Utilizar um placeholder consistente.

Exemplos:

- silhueta do monstro;
- cristal mágico;
- selo arcano;
- brasão da guilda.

Nunca utilizar iniciais.

Nunca utilizar um círculo vazio.

---

## Forma

Evitar um retângulo perfeito.

Explorar pequenas diferenças de silhueta.

Exemplos:

- cantos ornamentados;
- recortes discretos;
- molduras internas;
- divisórias inspiradas em cartas colecionáveis.

A silhueta deve ser memorável.

---

## Tipografia

O título deve dominar visualmente.

A descrição deve ser secundária.

Os atributos devem ser quase invisíveis até serem necessários.

---

## Ícones

Os atributos devem ser representados prioritariamente por ícones.

Reduzir texto.

Reduzir badges.

Reduzir labels.

A interface deve ficar mais limpa.

---

## Estados

Uma Quest Scroll deve mudar visualmente quando:

- estiver sendo arrastada;
- estiver selecionada;
- receber hover;
- for rara;
- representar um Boss.

Esses estados devem ser percebidos sem depender apenas da cor.

---

## Inspiração

A sensação deve estar muito mais próxima de:

- uma carta colecionável;
- uma página de grimório;
- um contrato mágico;
- uma carta de missão.

Do que de:

- um card de dashboard;
- um painel administrativo;
- um ticket de software.

---

## Resultado esperado

Ao olhar apenas uma Quest Scroll, sem contexto, o usuário deve pensar:

"Isso faz parte de um videogame."

e nunca

"Isso parece um card do Jira."

