# Restaurant System API

API REST para gerenciamento de restaurantes, reservas e avaliações, utilizando PostgreSQL e MongoDB, com containerização Docker, testes automatizados, integração contínua e deploy em ambiente cloud.

## Tecnologias

### Backend

* Node.js
* Express.js

### Banco de Dados

* PostgreSQL
* Prisma ORM
* MongoDB
* Mongoose

### DevOps

* Docker
* Docker Compose
* GitHub Actions
* AWS EC2

### Testes

* Testes automatizados da aplicação

## Arquitetura

A aplicação utiliza uma arquitetura híbrida com dois bancos de dados:

### PostgreSQL

Responsável por armazenar:

* Restaurants
* Reservations

### MongoDB

Responsável por armazenar:

* Reviews

## Funcionalidades

### Restaurantes

* Criar restaurante
* Listar restaurantes
* Buscar restaurante por ID
* Remover restaurante

### Reservas

* Criar reserva
* Listar reservas

### Avaliações

* Criar avaliação
* Listar avaliações por restaurante
* Atualizar avaliação
* Remover avaliação

## Como executar com Docker

### Clonar o repositório

```bash
git clone <SEU_REPOSITORIO>
cd restaurant-system
```

### Executar a aplicação

```bash
docker-compose up -d --build
```

### Verificar containers

```bash
docker ps
```

## Executando localmente

### Instalar dependências

```bash
npm install
```

### Configurar variáveis de ambiente

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/restaurant
MONGO_URL=mongodb://localhost:27017/reviews
PORT=3000
```

### Aplicar schema do Prisma

```bash
npx prisma db push
```

### Executar aplicação

```bash
npm run dev
```

## Endpoints

### Restaurants

| Método | Endpoint         |
| ------ | ---------------- |
| POST   | /restaurants     |
| GET    | /restaurants     |
| GET    | /restaurants/:id |
| DELETE | /restaurants/:id |

### Reservations

| Método | Endpoint      |
| ------ | ------------- |
| POST   | /reservations |
| GET    | /reservations |

### Reviews

| Método | Endpoint               |
| ------ | ---------------------- |
| POST   | /reviews               |
| GET    | /reviews/:restaurantId |
| PUT    | /reviews/:id           |
| DELETE | /reviews/:id           |

## Integração Contínua

O projeto possui pipeline automatizada utilizando GitHub Actions para validação da aplicação e execução das verificações definidas no fluxo de CI.

## Deploy

A aplicação foi publicada em uma instância AWS EC2 utilizando Docker, permitindo a execução isolada dos serviços:

* API Node.js
* PostgreSQL
* MongoDB

## Objetivo

Este projeto foi desenvolvido para praticar:

* Desenvolvimento de APIs REST
* Integração entre banco relacional e não relacional
* Arquitetura modular
* Utilização de Prisma ORM e Mongoose
* Containerização com Docker
* Testes automatizados
* Integração Contínua (CI)
* Deploy em ambiente cloud (AWS)
* Boas práticas de desenvolvimento backend
