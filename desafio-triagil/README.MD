## Desafio Triágil
Olá! Nesse repositório você vai encontrar a minha resolução para o desafio Triágil. 


**O objetivo aqui é testar os seus conhecimentos de programação.**
O desafio: Desenvolver uma API, pra montar times de Pokémons, pra isso, você vai usar a  [pokeapi.co](https://pokeapi.co/). O usuário que utilizar sua API deve conseguir gerar um novo time, passando como parâmetro uma lista de pokémons e um nome de usuário. Você deve então ler essa lista, buscar pelos pokémons na pokeAPI e caso não encontre nenhum erro, salvar esse time da maneira que preferir (pode ser em memória, banco de dados, arquivo de texto...). Com o time salvo, você retorna ao usuário uma mensagem de validação e uma id unica, para identificar aquele time. Além disso, você deve disponibilizar duas rotas para leitura dos dados, uma que busque todos os times registrados e outra que busque um time pela ID unica.

Daí com sua API pronta, você só precisa gerar um Dockerfile e um compose! A ideia aqui é que qualquer pessoa com acesso ao seu código, consiga instanciar a sua API e realizar testes (e pode ter certeza que vamos testar).


### Instalação
Siga estas etapas para configurar e rodar o projeto:
1. Clone o repositório:
```bash
git clone https://github.com/LucasRe1s/kids-api
```
2. Acesse o diretório do projeto:
```bash
cd nome-do-repositorio
```
3.  Instale as dependências:
```bash
npm install
```
4. Crie um cantainer com o banco de dados postgres:
Obs.: altere para seus dados.
```bash
docker container run -d -p 5432:5432 -e POSTGRES_PASSWORD=coloqueSuaSenha -e POSTGRES_USER=coloqueSeuUsuario -e POSTGRES_DB=coloqueOnomeDoSeuBanco postgres
```
5. Configure a conexão com o banco de dados com sequelize:
* Caminho da pasta a ser motificada.
```file
src/infrastrutures/database.js
```
```js
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'DB_LOCALHOST',
  port: 'DB_PORT',
  username: 'DB_USERNAME',
  password: 'DB_PASSWORD',
  database: 'DB_DATABASE',
});
```
Ou crie uma pasta .env
```.env
DB_HOST = 'host'
DB_PORT = 5432
DB_USERNAME = 'username'
DB_PASSWORD = 'password'
DB_DATABASE = 'nameDatabase'
```
6. Se o banco já tiver criado e rodando inicie o servidor Inicie o servidor
```bash
npm start
```


### Requisitos
* Rotas

  * GET /api/teams - Deverá listar todos os times registrados
  * GET /api/teams/{user} - Busca um time registrado por usuário
  * POST /api/teams - Rota para criação de um time, que recebe um JSON nesse formato aqui
  * GET /api/teams/id/:id - Busca um time registrado por id

* As rotas devem retornar erro quando o input contém algum erro (nome de pokémon inválido, etc...). A mensagem de erro fica a seu critério, desde que esteja claro para o usuário onde está o problema.

* Ao registrar o time, você deve guardar além do nome do Pokémon, alguns de seus dados disponíveis na PokeAPI. São eles: o ID do Pokémon (de acordo com a pokédex), sua altura e seu peso. Esses dados devem ser retornados junto do time quando buscado no sistema. Exemplo aqui

### Exemplos
#### **Output /api/teams/{user}**
```json
{
  "owner": "sleao",
  "pokemons": [
    {
      "id": 9,
      "name": "blastoise",
      "weight": 855,
      "height": 16
    },
    {
      "id": 25,
      "name": "pikachu",
      "weight": 60,
      "height": 4
    }
  ]
}
```
**Output /api/teams**
```json
{
  "1": {
    "owner": "sleao",
    "pokemons": [
      {
        "id": 9,
        "name": "blastoise",
        "weight": 855,
        "height": 16
      },
      {
        "id": 25,
        "name": "pikachu",
        "weight": 60,
        "height": 4
      }
    ]
  },
  "2": {
    "owner": "sleao",
    "pokemons": [
      {
        "id": 9,
        "name": "blastoise",
        "weight": 855,
        "height": 16
      },
      {
        "id": 25,
        "name": "pikachu",
        "weight": 60,
        "height": 4
      },
      {
        "id": 3,
        "name": "venusaur",
        "weight": 1000,
        "height": 20
      },
      {
        "id": 6,
        "name": "charizard",
        "weight": 905,
        "height": 17
      },
      {
        "id": 131,
        "name": "lapras",
        "weight": 2200,
        "height": 25
      },
      {
        "id": 54,
        "name": "psyduck",
        "weight": 196,
        "height": 8
      }
    ]
  }
}
```

**Input**
```json
{
  "user": "sleao",
  "team": [
    "blastoise",
    "pikachu",
    "charizard",
    "venusaur",
    "lapras",
    "dragonite"
  ]
}
```

#### **Output /api/teams/id/:id**
```json
{
  "owner": "sleao",
  "pokemons": [
    {
      "id": 9,
      "name": "blastoise",
      "weight": 855,
      "height": 16
    },
    {
      "id": 25,
      "name": "pikachu",
      "weight": 60,
      "height": 4
    }
  ]
}
```