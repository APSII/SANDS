const models = require('../models')

const createUser = async (req, res) =>{
    try{
        const usuario = await models.Usuario.create(req.body)
        return res.status(201).json({
            usuario
        })
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
const index = async (req, res)=>{
    try{
        models.Usuario.findAll().then(usuarios =>{
         res.status(200).json({usuarios})
        })
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
module.exports = {createUser, index}