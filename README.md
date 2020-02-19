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
Exemplo: na query de Endereco é necessário trazer os dados de cidade e estado, entao usa-se 
```
/rota?$include='cidade.estado'
```
