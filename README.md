
# Node NLW Journey

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green) ![TypeScript](https://img.shields.io/badge/TypeScript-v4.3.2-blue) ![Prisma](https://img.shields.io/badge/Prisma-v2.23.0-lightblue)

Projeto desenvolvido durante a última edição do [Next Level Week Journey](https://rocketseat.com.br/) da Rocketseat, ocorrida de 8 a 12 de julho de 2024.

## 📚 Sobre o Projeto

O **Node NLW Journey** é um servidor backend que gerencia um sistema de viagens. Este servidor possui rotas para:

- Gerenciamento das viagens
- Confirmação de presença nas viagens

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset de JavaScript
- **Fastify** - Framework web para Node.js
- **Prisma** - ORM para Node.js
- **Zod** - Validação de esquemas

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- Node.js
- NPM ou Yarn

### Passos para executar

1. Clone este repositório:

    ```bash
    git clone https://github.com/RafaelFigueiredo2203/node_nlw_journey.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd node_nlw_journey
    ```

3. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

4. Configure as variáveis de ambiente em um arquivo `.env` baseado no arquivo `.env.example`:

    ```env
    DATABASE_URL="sua_database_url"
    API_BASE_URL="sua_api_base_url"
    WEB_BASE_URL="sua_web_base_url"
    PORT=3333
    ```

5. Execute a aplicação:

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

6. O servidor iniciará na porta 3333 - acesse `http://localhost:3333`.

## 📁 Estrutura do Projeto

```bash
node_nlw_journey/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── schemas/
│   └── server.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
## 🛠️ Funcionalidades

-   **Organizador**
    
    -   Cadastrar um novo evento
    -   Visualizar dados de um evento
    -   Visualizar lista de participantes
-   **Participante**
    
    -   Inscrever-se em um evento
    -   Visualizar credencial de inscrição
    -   Realizar check-in no evento

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

----------

Feito com 💜 por [Rafael Figueiredo](https://github.com/RafaelFigueiredo2203)
