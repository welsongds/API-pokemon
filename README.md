# API Pokémon  
___

Está API foi desenvolvida para a listamgem e pesquisa de pokémons, utilizamos duas rotas com métodos GET para fazermos essas pesquisas, irei detalhar abaixo, o uso e a URL de cada uma delas.

---
Rota para listagem de pokémons, nesta rota teremos duas possibilidades, uma sem uso de parâmetro nenhum que irá retornar a página 1 e a outra utilizará o parâmetro "pag" passado por query.

1. Está é a primeira rota sem uso de parâmetros:
![Alt text](</imagens/Capturas 03_10_2023 11_11_00.png>)
[URL](http://localhost:8000/)

2. Está é a primeira rota com uso do parâmetro "pag" passado por query:
 ![Alt text](</imagens/Insomnia 03_10_2023 11_09_48.png>)
 [URL](http://localhost:8000/?pag=2)

---

A segunda rota, também com o método GET, irá buscar o pokémon solicitado por nome ou ID, está informação será passada na URL por meio do "params", nesta solicitação o pokémon solicitado virá com algumas informações mais detalhadas sobre ele.

1. Aqui veremos a pesquisa do pokémon por meio do ID:
![Alt text](</imagens/Insomnia 03_10_2023 11_10_04.png>)
[URL](http://localhost:8000/4/)

2. Aqui veremos a pesquisa do pokémon por meio do nome:
![Alt text](</imagens/Insomnia 03_10_2023 11_10_17.png>)
[URL](http://localhost:8000/charmander/)

---
## Informações
Está API foi desenvolvida em JavaScript, usando o Node.js. Foi utilizado uma bilioteca denominada de "utils-playground" que deixairei o link abaixo.

[Utils-playground](https://www.npmjs.com/package/utils-playground)

As imagens foram feitas durante o uso do "Insomnia", aplicativo que usamos para testes de nossas APIs, devido ao fato dos navegadores só conseguimos ter acesso as rotas com o metódo GET. Deixarei o link do site para quaisquer dúvidas que surjam ou caso deseje fazer o download.

[Insomnia](https://insomnia.rest)