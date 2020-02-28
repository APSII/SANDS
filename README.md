# back-end

> back-end SANDS

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/back-end
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Parâmetros na QUERY
Os parâmetros de query devem ser passados por STRING 

**INCLUDE**

Um include é a chamada de um arquivo para que ele seja executado junto à outro. Dessa forma, caso precise os dados de subniveis de relacionamentos deve ser passado juntamente na query o seguinte padrão:
```
$include model.submodel.submodel|model2

```
Exemplo: na query de Endereco é necessário trazer os dados de cidade e estado, entao usa-se :
```
/rota?$include='cidade.estado'
```

**SORT**

O sort é usada para classificar os dados em ordem crescente ou decrescente, com base em uma ou mais colunas passado juntamente na query em formato de objeto em string (json.stringfy) o seguinte padrão:
```
$sort {"coluna":"ASC"} ou {"coluna":"DESC"}

```
Exemplo: na query de Doador é necessário trazer os dados de ordenados pelas colunas nome e cpf, entao usa-se :
```
/rota?$sort='{"nome"="ASC","cpf":"DESC"}'
```

**LIKE**

LIKE é um operador lógico que determina se uma sequência de caracteres corresponde a um padrão especificado. Um padrão pode incluir caracteres regulares e caracteres curinga, com base em uma ou mais colunas passado juntamente na query em formato de objeto em string (json.stringfy) o seguinte padrão:
```
$like {"coluna":"key"} 

```
Exemplo: na query de Doador é necessário trazer os dados de um nome começado com Pe e cpf com 0, entao usa-se :
```
/rota?$like='{"nome"="Pe","cpf":"0"}'
```

**NORMAL FILTER**

Normal filter é um operador lógico que busca igualdade na busca, caso não encontre o atributo com a determinada key de busca não será retornado nada. O Normal é passado juntamente na query em formato de string o seguinte padrão:
```
coluna "key"

```
Exemplo: na query de Doador é necessário trazer os dados de um nome Pedro, entao usa-se :
```
/rota?nome="Pedro"
```
## ROTAS
Todas as rotas para CRUDS 

**USUARIO**
```
create
POST url/usuario
Authorization: "not required"
{
    "nome": "Joao",
    "email": "joao@teste.com",
    "hemocentroId": 2,
    "identificador": "H(id da unidade)U(id do usuario)",
    "ativo": true
  }

update
PATCH url/usuario/id
Authorization: "Bearer {{token}}"
{
    "nome": "Joao",
    "email": "joao@teste.com",
    "hemocentroId": 2,
    "identificador": "H(id da unidade)U(id do usuario)",
    "ativo": true
  }

getAll
GET url/usuario
Authorization: "Bearer {{token}}"

find
GET url/usuario/id
Authorization: "Bearer {{token}}"

delete
DEL url/usuario/id
Authorization: "Bearer {{token}}"
```

**ESTADO**
```
create
POST url/estado
Authorization: "Bearer {{token}}"
{
  "ativo": true,
  "nome": "Cuiaba",
  "acronimo": "MT"
}

update
PATCH url/estado/id
Authorization: "Bearer {{token}}"
{
  "ativo": true,
  "nome": "Cuiaba",
  "acronimo": "MT"
}

getAll
GET url/estado
Authorization: "Bearer {{token}}"

find
GET url/estado/id
Authorization: "Bearer {{token}}"

delete
DEL url/estado/id
Authorization: "Bearer {{token}}"
```

**CIDADE**
```
create
POST url/cidade
Authorization: "Bearer {{token}}"
{
    "nome": "Cuiaba",
    "estadoId": 1,
    "ativo": true
  }

update
PATCH url/cidade/id
Authorization: "Bearer {{token}}"
{
    "nome": "Cuiaba",
    "estadoId": 1,
    "ativo": true
  }

getAll
GET url/cidade
Authorization: "Bearer {{token}}"

find
GET url/cidade/id
Authorization: "Bearer {{token}}"

delete
DEL url/cidade/id
Authorization: "Bearer {{token}}"
```

**ENDERECO**
```
create
POST url/endereco
Authorization: "Bearer {{token}}"
{
    "endereco": "rua sao jao",
    "cidadeId": 2,
    "ativo": true   
  }

update
PATCH url/endereco/id
Authorization: "Bearer {{token}}"
{
    "endereco": "rua sao jao",
    "cidadeId": 2,
    "ativo": true
  }

getAll
GET url/endereco
Authorization: "Bearer {{token}}"

find
GET url/endereco/id
Authorization: "Bearer {{token}}"

delete
DEL url/endereco/id
Authorization: "Bearer {{token}}"
```
**HEMOCENTRO**
```
create
POST url/hemocentro
Authorization: "Bearer {{token}}"
{
  "nome": "Central",
  "enderecoId": 3,
  "ativo": true
}

update
PATCH url/hemocentro/id
Authorization: "Bearer {{token}}"
{
  "nome": "Central",
  "enderecoId": 3,
  "ativo": true
}

getAll
GET url/hemocentro
Authorization: "Bearer {{token}}"

find
GET url/hemocentro/id
Authorization: "Bearer {{token}}"

delete
DEL url/hemocentro/id
Authorization: "Bearer {{token}}"
```

**DOACAO**
```
create
POST url/doacao
Authorization: "Bearer {{token}}"
{
    "ativo": true,
    "identificacao": 'teste',
    "dataUso": "10/10/2010",
    "usado": true,
    "doadorId": 1
  }

update
PATCH url/doacao/id
Authorization: "Bearer {{token}}"
{
    "ativo": true,
    "identificacao": 'teste',
    "dataUso": "10/10/2010",
    "usado": true,
    "doadorId": 1
  }

getAll
GET url/doacao
Authorization: "Bearer {{token}}"

find
GET url/doacao/id
Authorization: "Bearer {{token}}"

delete
DEL url/doacao/id
Authorization: "Bearer {{token}}"
```

**DOADOR**
```
create
POST url/doador
Authorization: "Bearer {{token}}"
{
  "ativo": true,
  "nome": "Central",
  "cpf": "cpf",
  "dataNascimento": "10/10/2010",
  "telefone": "1232131312",
  "email": "teste@teste"
}

update
PATCH url/doador/id
Authorization: "Bearer {{token}}"
{
  "ativo": true,
  "nome": "Central",
  "cpf": "cpf",
  "dataNascimento": "10/10/2010,
  "telefone": "1232131312",
  "email": "teste@teste"
}

getAll
GET url/doador
Authorization: "Bearer {{token}}"

find
GET url/doador/id
Authorization: "Bearer {{token}}"

delete
DEL url/doador/id
Authorization: "Bearer {{token}}"
```

**NOTIFICACAO**
```
create
POST url/notificacao
Authorization: "Bearer {{token}}"
{
  "mensagem": "mensagem",
  "anexoUrl": "url",
  "enviado": true,
  "ativo": true,
  "doacaoId": 1
}

update
PATCH url/notificacao/id
Authorization: "Bearer {{token}}"
{
  "updatedAt": "2020-02-28T16:05:49.331Z",
  "createdAt": "2020-02-28T16:05:49.331Z",
  "mensagem": "mensagem",
  "anexoUrl": "url",
  "enviado": true,
  "ativo": true,
  "doacaoId": 1
}

getAll
GET url/notificacao
Authorization: "Bearer {{token}}"

find
GET url/notificacao/id
Authorization: "Bearer {{token}}"

delete
DEL url/notificacao/id
Authorization: "Bearer {{token}}"
```

**AUTENTICACAO**
```
POST url/auth
Authorization: "not required"
{
 "identificador":"JO-1",
"password":"12342",
"strategy":"local"
}
```
