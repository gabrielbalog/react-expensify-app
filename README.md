
# Repositório

Este repositório é destinado a um website feito utilizando, principalmente, o framework React. Seu objetivo é prover um dashboard, aonde o usuário possa adicionar novas despesas e ver um sumário de despesas e o total destas. Além disso, a base para o desenvolvimento deste website foi o curso https://www.udemy.com/react-2nd-edition/.

Sua utilização é feita por intermédio de scripts que rodam webpack e babel para compilação de código em Javascript.

É utilizado em seu armazenamento o Firebase Real Time. E para autenticação, é utilizado o Firebase Authentication.

O website pode ser acessado em: [https://balog-expensify-app.herokuapp.com](https://balog-expensify-app.herokuapp.com).



## Funcionalidades

Abaixo se encontra a lista de funcionalidades do App:

- [x] Login com integração com o Google
- [x] Armazenamento dos dados no Firebase Real Time
- [x] Single Page App
- [x] Criação, edição e remoção de despesas
- [x] Permite o usuário somente ver suas despesas 
- [x] Configuração para deploy no Heroku
- [ ] Autenticação com outros provedores de login
- [ ] Suporte a idioma
- [ ] Categoria de Despesas
- [ ] Gráficos de despesas



## Modo de usar

Para utilizar deste repositório, basta clona-lo e rodar os seguintes comandos dentro da pasta:

```bash
$ yarn install
$ yarn run dev-server
```

Rodados os comandos abaixo basta acessar a url http://localhost:8080/ para que possa ser visualizado o website.

**A porta pode variar caso ja esteja alocado a 8080**

A configuração de integração com o Firebase deve ser feita antes de acessar, pois o website depende diretamente do Firebase da seu total funcionamento. Um tutorial básico pode ser encontrado aqui: [https://firebase.google.com/docs/web/setup?authuser=0](https://firebase.google.com/docs/web/setup?authuser=0).

Após a criação do App no Firebase é necessário criar as credênciais, e configurar o arquivo `.env.development`, com os dados obtidos:

    FIREBASE_API_KEY=
    FIREBASE_AUTH_DOMAIN=
    FIREBASE_DATABASE_URL=
    FIREBASE_PROJECT_ID=
    FIREBASE_STORAGE_BUCKET=
    FIREBASE_MESSAGING_SENDER_ID=


## Desenvolvimento

Os arquivos feitos para este website foram escritos em JS, HTML e CSS.

O arquivo HTML pode ser encontrado em public/index.html.

O arquivo CSS em public/styles/styles.css.

E os arquivos não compilados podem ser encontrados na pasta src/.


## Testes

Este projeto possui testes, e para executá-los da forma correta, é necessário criar um App no Firebase e configura-lo localmente.
O arquivo `.env.test` deve ser configurado com as credenciais obtidas:

    FIREBASE_API_KEY=
    FIREBASE_AUTH_DOMAIN=
    FIREBASE_DATABASE_URL=
    FIREBASE_PROJECT_ID=
    FIREBASE_STORAGE_BUCKET=
    FIREBASE_MESSAGING_SENDER_ID=


## Publicação

Para efetivação do App em um Javascript compilado, basta rodar o comando abaixo:

```bash
$ yarn run build:prod
```

Feito isso, basta utilizar algum programa para direcionar para o arquivo index.html dentro da pasta public.

### Heroku

Para publicação no heroku basta associar o repositório ao deploy, e rodar um novo deploy. O projeto já é configurado para o deploy no heroku, como pode ser visto nos scripts em `package.json`.