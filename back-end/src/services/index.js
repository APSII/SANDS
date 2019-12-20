const usuario = require('./usuario/usuario.service.js');
const hemocentro = require('./hemocentro/hemocentro.service.js');
const doador = require('./doador/doador.service.js');
const doacao = require('./doacao/doacao.service.js');
const estado = require('./estado/estado.service.js');
const cidade = require('./cidade/cidade.service.js');
const endereco = require('./endereco/endereco.service.js');
const notificacao = require('./notificacao/notificacao.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(usuario);
  app.configure(hemocentro);
  app.configure(doador);
  app.configure(doacao);
  app.configure(estado);
  app.configure(cidade);
  app.configure(endereco);
  app.configure(notificacao);
};
