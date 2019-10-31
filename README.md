# React Native - Desafio 4

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/react-native-desafio4/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/react-native-desafio4.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/react-native-desafio4.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/react-native-desafio4.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/react-native-desafio4.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/react-native-desafio4.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/react-native-desafio4.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação usando Redux, Redux-Saga, Redux Persist, Ducks, seamless-immutable, styled-components, react-currency-format, JSON Server e Reactotron.

## Desafio 4

Nesse desafio você irá construir uma aplicação com interface de e-commerce, o usuário poderá adicionar produtos ao carrinho e no final exibir o valor total do pedido.

Além disso, os dados de produtos e categorias virão de uma API com json-server (o arquivo da API está na pasta do desafio).

A interface da aplicação será como a seguinte:

![Telas](/assets/screens.png)

### Regras

- Os dados devem ser consumidos do JSON Server utilizando o arquivo server.json em anexo;
- O usuário deve poder adicionar produtos, alterar sua quantidade e removê-lo do carrinho;
- O valor do carrinho deve ser calculado pela soma dos preços x quantidades;
- A barra de categorias deve fornecer scroll horizontal para ver todas categorias;
- As requisições assíncronas devem utilizar Redux Saga;
- Você deve exibir sinais de loading enquanto a requisição está sendo feita na lista de produtos/categorias inicial;

### URL's

- http://localhost:3000/categories (Busca categorias)
- http://localhost:3000/category_products/1 (Busca produtos pelo ID da categoria)
- http://localhost:3000/products/1 (Busca detalhes do produto pelo ID)

## Índice

- [Capturas de Tela](#capturas-de-tela)

  - [Home](#home)

  - [Detalhe](#detalhe)

  - [Carrinho](#carrinho)

- [Desenvolvimento](#desenvolvimento)

  - [Configuração do Ambiente](#configuração-do-ambiente)

  - [Instalação do Projeto](#instalação-do-projeto)
  
  - [Execução do Projeto](#execução-do-projeto)

  - [Execução da API](#execução-da-api)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)

  - [APIs](#apis)

  - [Ferramentas](#ferramentas)

## Capturas de Tela

### Home

![Home](/assets/home.png)
Esta é a primeira tela, onde encontram-se todos os produtos vindos da API, podendo também escolher uma categoria de produtos.

### Detalhe

![Product](/assets/product.png)
Nesta tela, aparece os detalhes do produto escolhido, podendo adicionar o produto no carrinho ou voltar para a tela anterior.

### Carrinho

![Cart](/assets/cart.png)
Nesta tela, aparece todos os produtos que estão no carrinho e o subtotal, podendo alterar a quantidade do produto ou excluí-lo do carrinho, também é possível também voltar para a tela Home.

## Desenvolvimento

### Configuração do Ambiente

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga `Configuração de Ambiente`.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Instalação de Projeto`.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga `Execução de Projeto para Desenvolvimento`.

### Execução da API

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/json-server.md) e siga `Execução de API`.

## Utilizados no Projeto

### Bibliotecas

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [Babel Root Import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-plugin-root-import.md)

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

- [Ducks](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/ducks.md)

- [eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [ESLint plugin for React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react-native.md)

- [eslint-import-resolver-babel-plugin-root-import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-import-resolver-babel-plugin-root-import.md)

- [JSON Server](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/json-server.md)

- [prop-types](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/prop-types.md)

- [React Native Gesture Handler](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-gesture-handler.md)

- [React Native Vector Icons](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-vector-icons.md)

- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

- [React Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-redux.md)

- [react-currency-format](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-currency-format.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

- [reactotron-react-native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-react-native.md)

- [reactotron-redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux.md)

- [reactotron-redux-saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux-saga.md)

- [Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux.md)

- [Redux Persist](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux-persist.md)

- [Redux-Saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux-saga.md)

- [seamless-immutable](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/seamless-immutable.md)

### APIs

- **API do Json Server**

  - **Rotas**

    - Categorias

      - Busca todas as categorias

    - Produtos por Categoria

      - Busca dados de todos os produtos da categoria selecionada

    - Produtos

      - Busca todos os dados do produto selecionado

### Ferramentas

- [Reactotron](https://github.com/osvaldokalvaitir/projects-settings/blob/master/inspector/reactotron.md)
