const ProductosModel = require('../model/index')

class Productos {
    static async getAll(req, res) {
        const { data, error } = await ProductosModel.getAll()
        error ? res.status(400).json({ error: "No hay Productos" }) : res.status(200).json(data)


    }
}

module.exports = Productos
