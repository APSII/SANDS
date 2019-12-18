const models = require('./models')
const usuario = models.Usuario
const hemocentro = models.Hemocentro

hemocentro.create({
    nome: "teste",
    ativo:true
}).then(new_hemocentro =>{
    console.log(new_hemocentro)
}).catch(err =>{
    console.log(err)
})

usuario.create({
    nome:"teste",
    identificador:"teste",
    hemocentroId:1
}).then(new_user =>{
    console.log(new_user)
}).catch(err =>{
    console.log(err);
    
})