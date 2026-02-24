# Restaurant System API
API REST para gerenciamento de restaurantes, reservas e avaliações, utilizando PostgreSQL + MongoDB.

# Tecnologias

Node.js

Express

Prisma (PostgreSQL)

MongoDB

Mongoose

Nodemon

# Banco de Dados

## PostgreSQL

Responsável por:

Restaurants

Reservations

## MongoDB

Responsável por:

Reviews (avaliações)

# Como executar o projeto

## Clonar o repositório

```bash
git clone SEU_LINK_AQUI
cd restaurant-system
```

## Instalar dependências

```bash
npm install
```

## Configurar o arquivo .env

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/restaurantdb"
MONGO_URL="mongodb://localhost:27017/restaurantReviews"
PORT=3000
```

## Rodar as migrations (PostgreSQL)

```bash
npx prisma migrate dev
```

## Iniciar o servidor

```bash
npm run dev
```

## Servidor disponível em:

```bash
http://localhost:3000
```

# Endpoints 

## Restaurants

POST /restaurants

GET /restaurants

GET /restaurants/:id

DELETE /restaurants/:id

## Reviews

POST /reviews

GET /reviews/:restaurantId

PUT /reviews/:id

DELETE /reviews/:id

# Objetivo

Projeto desenvolvido para praticar:

Integração entre banco relacional e não relacional

Criação de API REST

Organização modular

Uso de Prisma e Mongoose