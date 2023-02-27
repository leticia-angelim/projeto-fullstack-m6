# E-commerce

A API é responsável por gerenciar usuários e anúncios em uma plataforma de compra e venda de automóveis online. Os anunciantes podem criar anúncios para seus produtos, preenchendo o formulário de registro de anúncio, e colocá-los à venda ou para leilão. Eles também podem editar e excluir os próprios anúncios. Os compradores têm acesso a todos os anúncios da plataforma e podem comprar os produtos anunciados.

Ao clicar em um anúncio, é possível ver o perfil do anunciador, as informações do automóvel e também comentários de outros usuários a respeito do produto.

</br>

## Funcionalidades

- Cadastro e login de usuários (comprador e anunciante)
- Criação, edição e exclusão de anúncios pelos anunciantes
- Compra de produtos pelos compradores
- Visualização de perfil de anunciante e informações do produto
- Adição de comentários pelos usuários

</br>

## Tecnologias utilizadas

- Node.js
- Express
- TypeORM
- TypeScript
- React.js
- Axios
- Styled-Components

</br>

## Como iniciar o projeto

Para iniciar o projeto, siga os passos abaixo:

### - Inicialização do Backend

O backend do projeto é construído utilizando Node.js e Express. Para iniciá-lo, siga os passos abaixo:

1. Abra o terminal na pasta raiz do projeto;
2. Navegue até a pasta backend utilizando o comando `cd backend`;
3. Execute o comando `yarn` para instalar todas as dependências do projeto;
4. Execute o comando `yarn dev` para iniciar o servidor backend;

### - Inicialização do Frontend

O frontend do projeto é construído utilizando React.js. Para iniciá-lo, siga os passos abaixo:

1. Abra um novo terminal na pasta raiz do projeto;
2. Navegue até a pasta frontend utilizando o comando `cd frontend`;
3. Execute o comando `yarn` para instalar todas as dependências do projeto;
4. Execute o comando `yarn dev` para iniciar o servidor de desenvolvimento frontend;

   </br>

Após a execução desses comandos, a aplicação fullstack estará rodando em <http://localhost:3000>. Qualquer alteração feita no código fonte será refletida automaticamente nos servidores de desenvolvimento frontend e backend.

## Documentação da API

### Endpoints de usuário

`POST -> /users - FORMATO DA REQUISIÇÃO - usuário anunciante`

```json
{
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com.br",
  "password": "1234",
  "cpf": "12345678911",
  "phone": "+55999345766",
  "birth_date": "25/05/2000",
  "description": "Descrição do Kenzinho",
  "account": "Anunciante",
  address{
  "cep": "11101999",
  "state": "ES",
  "city": "Vitória",
  "street": "Rua da Lama",
  "number": 1000,
  "complement": "apt.101"
  }
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com",
  "cpf": "12345678911",
  "phone": "+55999345766",
  "birth_date": "25/05/2000",
  "description": "Descrição do Kenzinho",
  "cep": "11101999",
  "state": "ES",
  "city": "Vitória",
  "street": "Rua da Lama",
  "number": 1000,
  "complement": "apt.101",
  "account": "Anunciante",
  "id": "77495b9b-5595-40e9-b5ac-2c458875d73b",
  "createdAt": "2023-02-25T21:50:09.131Z",
  "updatedAt": "2023-02-25T21:50:09.131Z"
}
```

<br/>

`POST -> /users - FORMATO DA REQUISIÇÃO - usuário comprador`

```json
{
  "name": "João",
  "email": "João@gmail.com",
  "password": "1234",
  "cpf": "12345678900",
  "phone": "55345678912300",
  "birth_date": "01/01/2000",
  "description": "Descrição do João",
  "cep": "11101900",
  "state": "RJ",
  "city": "Rio de Janeiro",
  "street": "Av. Portugal",
  "number": 480,
  "complement": "apt.445",
  "account": "Comprador"
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com",
  "cpf": "12345678900",
  "phone": "55345678912300",
  "birth_date": "01/01/2000",
  "description": "Descrição do Kenzinho",
  "cep": "11101900",
  "state": "ES",
  "city": "Vitória",
  "street": "Rua da Lama",
  "number": 229,
  "complement": "apt.1801",
  "account": "Comprador",
  "id": "8b8a9af4-8031-42bc-bacb-ee9cc1c64342",
  "createdAt": "2023-02-24T18:09:04.003Z",
  "updatedAt": "2023-02-24T18:09:04.003Z"
}
```

<br/>

`POST -> /login - FORMATO DA REQUISIÇÃO - login de usuário`

```json
{
  "email": "kenzinho@gmail.com",
  "password": "1234"
}
```

`FORMATO DA RESPOSTA - STATUS 200 - OK`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQGdtYWlsLmNvbSIsImlhdCI6MTY3NzM2MTkyMiwiZXhwIjoxNjc3NDQ4MzIyLCJzdWIiOiIzNTJmYjI4MS1iMDM4LTQ5NzMtYTJmMS1lMThlOWU2OTBkOGIifQ.-Xaa8fCTebxff3xFovgU88hKP8mo0cwZdD_Vz5ubLks"
}
```

<br/>

`GET -> /users/profile - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de usuário`

**\*Autenticação necessária**

```json
{
  "id": "352fb281-b038-4973-a2f1-e18e9e690d8b",
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com",
  "cpf": "12345678911",
  "phone": "55345678912312",
  "birth_date": "01/01/2000",
  "description": "Descrição do Kenzinho",
  "cep": "11101999",
  "state": "ES",
  "city": "Vitória",
  "street": "Rua da Lama",
  "number": 1000,
  "complement": "apt.101",
  "account": "Comprador",
  "createdAt": "2023-02-25T03:29:56.128Z",
  "updatedAt": "2023-02-25T03:48:39.280Z"
}
```

<br/>

`GET -> /users/:user_id - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de usuário por id `

**\*Autenticação necessária**

```json
{
  "id": "77495b9b-5595-40e9-b5ac-2c458875d73b",
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com",
  "cpf": "12345678911",
  "phone": "+55999345766",
  "birth_date": "25/05/2000",
  "description": "Descrição do Kenzinho",
  "cep": "11101999",
  "state": "ES",
  "city": "Vitória",
  "street": "Rua da Lama",
  "number": 1000,
  "complement": "apt.101",
  "account": "Anunciante",
  "createdAt": "2023-02-25T21:50:09.131Z",
  "updatedAt": "2023-02-25T21:50:09.131Z"
}
```

<br/>

### Endpoints de anúncio

`POST -> /announcement/:user_id - FORMATO DA REQUISIÇÃO - registro de um anúncio`

**\*Autenticação necessária**

```json
{
  "announcement_type": "Venda",
  "title": "Honda",
  "year": "2023",
  "mileage": 200,
  "price": 100000,
  "description": "Carro do Kenzinho",
  "vehicle_type": "Carro",
  "cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
  "gallery_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg"
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
 {
	"announcement_type": "Venda",
	"title": "Honda",
  "year": "2023",
  "mileage": 200,
  "price": 100000,
  "description": "Carro do Kenzinho",
  "vehicle_type": "Carro",
	"cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
	"user": {
	"id": "352fb281-b038-4973-a2f1-e18e9e690d8b",
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com",
  "cpf": "12345678911",
  "phone": "55345678912312",
  "birth_date": "01/01/2000",
  "description": "Descrição do Kenzinho",
  "account": "Anunciante",
  "createdAt": "2023-02-25T21:50:09.131Z",
  "updatedAt": "2023-02-25T21:50:09.131Z"
		"address": {
			"id": "f0e9ed5e-1fc9-4634-a883-f986c926028e",
			"cep": "11101999",
			"state": "ES",
			"city": "Vitória",
			"street": "Rua da Lama",
			"number": 1000,
			"complement": "apt.101"
		}
	},
	"id": "ce0d68c8-d6e3-4bfa-a04a-7ee414c173a3",
	"createdAt": "2023-02-26T18:20:37.584Z",
	"updatedAt": "2023-02-26T18:20:37.584Z"
   }
}
```

<br/>

`GET -> /announcement - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de todos os anúncios`

**\*Autenticação necessária**

```json
[
  {
    "id": "e7d6263d-24bd-4d95-a55e-e5e1402bc228",
    "announcement_type": "Venda",
    "title": "Honda",
    "year": 2023,
    "mileage": 200,
    "price": 100000,
    "description": "Carro do Kenzinho",
    "vehicle_type": "Carro",
    "cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
    "createdAt": "2023-02-25T21:59:44.638Z",
    "updatedAt": "2023-02-25T21:59:44.638Z",
    "user": {
      "id": "77495b9b-5595-40e9-b5ac-2c458875d73b",
      "name": "Kenzinho",
      "email": "kenzinho@gmail.com",
      "cpf": "12345678911",
      "phone": "+55999345766",
      "birth_date": "25/05/2000",
      "description": "Descrição do Kenzinho",
      "cep": "11101999",
      "state": "ES",
      "city": "Vitória",
      "street": "Rua da Lama",
      "number": 1000,
      "complement": "apt.101",
      "account": "Anunciante",
      "createdAt": "2023-02-25T21:50:09.131Z",
      "updatedAt": "2023-02-25T21:50:09.131Z"
    },
    "photos": []
  },
  {
    "id": "d88e7706-4f1f-4116-8865-f5c158ad77aa",
    "announcement_type": "Venda",
    "title": "Ferrari",
    "year": 2023,
    "mileage": 100,
    "price": 10000000,
    "description": "Ferrari vermelha",
    "vehicle_type": "Carro",
    "cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
    "createdAt": "2023-02-22T21:28:37.116Z",
    "updatedAt": "2023-02-22T21:28:37.116Z",
    "user": {
      "id": "38202530-afca-4dd7-b70b-517d2cde3569",
      "name": "João",
      "email": "joao@gmail.com",
      "cpf": "12345678900",
      "phone": "55345678912300",
      "birth_date": "01/01/2000",
      "description": "Descrição do João",
      "cep": "11101900",
      "state": "RJ",
      "city": "Rio de Janeiro",
      "street": "Av. Portugal",
      "number": 480,
      "complement": "apt.445",
      "account": "Comprador",
      "createdAt": "2023-02-22T21:22:15.336Z",
      "updatedAt": "2023-02-22T21:22:15.336Z"
    },
    "photos": []
  }
]
```

<br/>

`GET -> /announcement/announcement_id - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de anúncio por id`

```json
[
  {
    "id": "e7d6263d-24bd-4d95-a55e-e5e1402bc228",
    "announcement_type": "Venda",
    "title": "Honda",
    "year": 2023,
    "mileage": 200,
    "price": 100000,
    "description": "Carro do Kenzinho",
    "vehicle_type": "Carro",
    "cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
    "createdAt": "2023-02-25T21:59:44.638Z",
    "updatedAt": "2023-02-25T21:59:44.638Z",
    "user": {
      "id": "77495b9b-5595-40e9-b5ac-2c458875d73b",
      "name": "Kenzinho",
      "email": "kenzinho@gmail.com.br",
      "cpf": "12345678911",
      "phone": "+55999345766",
      "birth_date": "25/05/2000",
      "description": "Descrição do Kenzinho",
      "cep": "11101999",
      "state": "ES",
      "city": "Vitória",
      "street": "Rua da Lama",
      "number": 1000,
      "complement": "apt.101",
      "account": "Anunciante",
      "createdAt": "2023-02-25T21:50:09.131Z",
      "updatedAt": "2023-02-25T21:50:09.131Z"
    },
    "photos": []
  }
]
```

<br/>

`GET -> /announcement/user/user_id - FORMATO DA RESPOSTA - STATUS 200 - OK - listagem de todos os anúncios de um usuário`

```json
{
  "id": "77495b9b-5595-40e9-b5ac-2c458875d73b",
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com.br",
  "cpf": "12345678911",
  "phone": "+55999345766",
  "birth_date": "25/05/2000",
  "description": "Descrição do Kenzinho",
  "cep": "11101999",
  "state": "ES",
  "city": "Vitória",
  "street": "Rua da Lama",
  "number": 1000,
  "complement": "apt.101",
  "account": "Anunciante",
  "createdAt": "2023-02-25T21:50:09.131Z",
  "updatedAt": "2023-02-25T21:50:09.131Z",
  "announcements": [
    {
      "id": "e7d6263d-24bd-4d95-a55e-e5e1402bc228",
      "announcement_type": "Venda",
      "title": "Honda",
      "year": 2023,
      "mileage": 200,
      "price": 100000,
      "description": "Carro do Kenzinho",
      "vehicle_type": "Carro",
      "cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
      "createdAt": "2023-02-25T21:59:44.638Z",
      "updatedAt": "2023-02-25T21:59:44.638Z",
      "photos": []
    }
  ]
}
```

<br/>

`PATCH -> /announcement/announcement_id - FORMATO DA REQUISIÇÃO - Edição de um anúncio`

**\*Autenticação necessária**

```json
{
  "title": "Honda vermelho",
  "mileage": 2939485,
  "year": 1999
}
```

`FORMATO DA RESPOSTA - STATUS 201 - CREATED`

```json
{
  "id": "e7d6263d-24bd-4d95-a55e-e5e1402bc228",
  "announcement_type": "Venda",
  "title": "Honda vermelho",
  "year": 1999,
  "mileage": 2939485,
  "price": 100000,
  "description": "Carro do Kenzinho",
  "vehicle_type": "Carro",
  "cover_img": "https://motorshow.com.br/wp-content/uploads/sites/2/2020/12/ferrari-458-speciale-blindada-2.jpg",
  "createdAt": "2023-02-25T21:59:44.638Z",
  "updatedAt": "2023-02-25T22:13:38.732Z",
  "photos": []
}
```

<br/>

`DELETE -> /announcement/announcement_id - FORMATO DA RESPOSTA - STATUS 204 - NO CONTENT - deleção de anúncio`

**\*Autenticação necessária**

Sem corpo da requisição - Na requisição apenas é necessário um TOKEN, a aplicação ficará responsável em buscar o usuário que está no parâmetro da rota.
