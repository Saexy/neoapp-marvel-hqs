# Projeto NeoApp x Marvel

O projeto NeoApp x Marvel consiste-se em um site que lista HQs da Marvel, sendo consumidas através da API da [Marvel](https://developer.marvel.com/).
No site não é listada todas as HQs, pois a Marvel limita o uso da API.
O design do site foi pensado baseado nos quadrinhos e da paleta de cores da marvel, tendo um logo fundido, da NeoApp e da Marvel.
A plataforma possui um sistema de carrinho de compras, e nele, poderá adicionar ou remover itens. Podendo também finalizar a compra, tendo a possibilidade de inserir um cupom de desconto, ou continuar comprando na página inicial.

## Construção do site

O site inteiro foi feito com a biblioteca React Js, feita pelo Facebook, e na parte do design do site usei o Bootstrap, React-Bootstrap e o css puro.
Implementei o sistema de rotas do próprio React Js, para redirecionar o usuário ao clicar no carrinho, para uma página separada, e ao clicar na logo ou voltar para a página inicial, para outra página separada.
Para consumir a API da Marvel, optei por não usar o Axios, e sim usar o fetch do próprio JavaScript, pois não iria usar muito ela no projeto.