const models = require('../models')

const create = async (req, res) => {
    try {
        const usuario = await models.Usuario.create(req.body)
        return res.status(201).json({
            usuario
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const index = async (req, res) => {
    try {
        models.Usuario.findAll().then(usuarios => {
            res.status(200).json({ usuarios })
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const findone = async (req, res) => {
    try {
        models.Usuario.findByPk(req.params.id).then(usuarios => {
            res.status(200).json({ usuarios })
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const destroy = async (req, res) => {
    try {
        const result = await models.Usuario.destroy({
            where: {
                id: req.params.id
            },
        });
        return res.status(200).json({ result })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const update = async (req, res) => {
    try {
        models.Usuario.update(req.body, {
            where: {
                id: req.params.id
            },
        }).then(usuario => {
            res.status(200).json(usuario)
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { create, index, findone, destroy, update }