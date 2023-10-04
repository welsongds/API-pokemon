# API Pokémon  
___

Está API foi desenvolvida para a listamgem e pesquisa de pokémons, utilizamos duas rotas com métodos GET para fazermos essas pesquisas, irei detalhar abaixo, o uso e a URL de cada uma delas.

---


1. Para o uso dessa API, você deve primeiro clonar esse repositório na sua máquina, para isso você deve clicar no botão verde aqui nesta página "CODE" e escolher a opção que você utiliza. 
2. Após o clone, você deve partir para a instalação das bibliotecas utilizadas nesse projeto para isso deve usar o seguinte comando no seu terminal, dentro do diretório:
```
npm install
```
3. É importante para que você consiga executar esse projeto, ter o Node.js baixado em sua máquina e ter o Git para poder fazer o clone.
4. Após cumprir as etapas, você dará um novo comando dentro do seu terminal, para ele poder rodar a API:  
```
npm run dev
```
5. Como neste projeto temos apenas rotas do tipo GET, você pode usar seu navegador para fazer testes, mas no caso utilizei o Insomnia, mais informações sobre ele ao final desse arquivo.

---
Rota para listagem de pokémons, nesta rota teremos duas possibilidades, uma sem uso de parâmetro nenhum que irá retornar a página 1 e a outra utilizará o parâmetro "pag" passado por query.

1. Está é a primeira rota sem uso de parâmetros:
![Alt text](</imagens/Capturas 03_10_2023 11_11_00.png>)
[URL da Imagem](http://localhost:8000/)

2. Está é a primeira rota com uso do parâmetro "pag", você pode colocar o número da página que tiver interesse, passado por query:
 ![Alt text](</imagens/Insomnia 03_10_2023 11_09_48.png>)
 [URL da Imagem](http://localhost:8000/?pag=2)

---

A segunda rota, também com o método GET, irá buscar o pokémon solicitado por nome ou ID, está informação será passada na URL por meio do "params", nesta solicitação o pokémon solicitado virá com algumas informações mais detalhadas sobre ele.

1. Aqui veremos a pesquisa do pokémon por meio do ID:
![Alt text](</imagens/Insomnia 03_10_2023 11_10_04.png>)
[URL da Imagem](http://localhost:8000/4/)

2. Aqui veremos a pesquisa do pokémon por meio do nome:
![Alt text](</imagens/Insomnia 03_10_2023 11_10_17.png>)
[URL da Imagem](http://localhost:8000/charmander/)

---
## Informações
Está API foi desenvolvida em JavaScript, usando o Node.js. Foi utilizado uma bilioteca denominada de "utils-playground" que deixairei o link abaixo.

[Utils-playground](https://www.npmjs.com/package/utils-playground)

As imagens foram feitas durante o uso do "Insomnia", aplicativo que usamos para testes de nossas APIs, devido ao fato dos navegadores só conseguimos ter acesso as rotas com o metódo GET. Deixarei o link do site para quaisquer dúvidas que surjam ou caso deseje fazer o download.

[Insomnia](https://insomnia.rest)
