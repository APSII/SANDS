/*const models = require('../models')

const create = async (req, res) => {
    try {
        const doador = await models.Doador.create(req.body)
        return res.status(201).json({
            doador
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const index = async (req, res) => {
    try {
        models.Doador.findAll().then(doadors => {
            res.status(200).json({ doadors })
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const findone = async (req, res) => {
    try {
        models.Doador.findByPk(req.params.id).then(doadors => {
            res.status(200).json({ doadors })
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const destroy = async (req, res) => {
    try {
        const result = await models.Doador.destroy({
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
        models.Doador.update(req.body, {
            where: {
                id: req.params.id
            },
        }).then(doador => {
            res.status(200).json(doador)
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { create, index, findone, destroy, update }*/