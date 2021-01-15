# Desafio de Backend

<img src="./img/logo-clubpetro.png" style="margin-left: 100px"
     alt="Clubpetro" width="300">

- [Descrição](#descrição)
  - [O Desafio](#o-desafio)
  - [Requisitos Obrigatórios](#requisitos-obrigatórios)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Configurando o Banco](#configurando-o-banco)
  - [Iniciando o Projeto](#iniciando-o-projeto)
  - [Executando testes](#executando-testes)
  - [Deploy no Google Cloud](#deploy-no-google-cloud)
  
  
 <p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gnf22/backend-challenge.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gnf22/backend-challenge.svg">


  <img alt="Repository size" src="https://img.shields.io/github/languages/code-size/gnf22/backend-challenge.svg">
  
  <a href="https://github.com/gnf22/dsdeliver-sds2/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gnf22/backend-challenge.svg">
  </a>

  <a href="https://github.com/gnf22/dsdeliver-sds2/commits/master">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gnf22/backend-challenge.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/gnf22/backend-challenge.svg">
</p>


## Descrição

Este desafio tem como objetivo avaliar as habilidades técnicas do candidato a vaga de desenvolvedor backend no Clubpetro.

#### O Desafio

O desafio consiste em desenvolver uma API rest que permita o CRUD de lugares para se conhecer ao redor do mundo para alimentar o frontend que pode ser visto na imagem a seguir:

#### Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias:

-  [NodeJS](https://github.com/nodejs/node)
-  [Express](https://github.com/expressjs/express)
-  [TypeORM](https://github.com/typeorm/typeorm)
-  [SwaggerUI](https://github.com/swagger-api/swagger-ui)
-  [Jest](https://github.com/facebook/jest)
-  [Tsyringe](https://github.com/microsoft/tsyringe)
-  [Typescript](https://github.com/microsoft/TypeScript)
-  [Eslint](https://github.com/eslint/eslint)
-  [Prettier](https://github.com/prettier/prettier)

#### Configurando o Banco
1. Na pasta raíz do projeto, você deve criar um arquivo .env com as seguintes variáveis como no exemplo abaixo, realizando a configuração de acordo com suas credenciais. (Necessário ser um banco postgres)

<img src="./img/env-example.png" style="margin-left: 100px"
     alt="Clubpetro" width="300">

     
#### Iniciando o Projeto

1. Para conseguir executar o projeto em ambiente de desenvolvimento, siga os seguintes passos:
```bash
# Instale as dependências
yarn
# Rode as migrations
yarn typeorm migration:run
# Execute o projeto
yarn dev:server
```

2. O projeto estará disponível em http://localhost:8080

3. Para visualizar as rotas disponíveis na aplicação, há uma documentação desenvolvida com o Swagger, acesse http://localhost:8080/api


#### Executando testes
1. Para executar os testes no projeto, siga os seguintes passos:
```bash
# Execute o script de testes
yarn test
```

2. Você pode visualizar uma interface amigável com os resultados dos testes acessando coverage/lcov-report/index.html

#### Deploy no Google Cloud
1. O link para acesso ao deploy é: https://last-test-301801.rj.r.appspot.com

2. Para visualizar as rotas disponíveis na aplicação, acesse https://last-test-301801.rj.r.appspot.com/api
