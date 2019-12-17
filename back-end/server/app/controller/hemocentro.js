const models = require('../models')

const create = async (req, res) => {
    try {
        const hemocentro = await models.Hemocentro.create(req.body)
        return res.status(201).json({
            hemocentro
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const index = async (req, res) => {
    try {
        models.Hemocentro.findAll().then(hemocentros => {
            res.status(200).json({ hemocentros })
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const findone = async (req, res) => {
    try {
        models.Hemocentro.findByPk(req.params.id).then(hemocentros => {
            res.status(200).json({ hemocentros })
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const destroy = async (req, res) => {
    try {
        const result = await models.Hemocentro.destroy({
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
        models.Hemocentro.update(req.body, {
            where: {
                id: req.params.id
            },
        }).then(hemocentro => {
            res.status(200).json(hemocentro)
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = { create, index, findone, destroy, update }