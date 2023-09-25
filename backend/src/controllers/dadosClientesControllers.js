const dadosClientes = require('../models/dadosClientes')

const getAll = async (_req, res) => {
    const dados = await dadosClientes.getAll();

    return res.status(200).json(dados)

}

const clienteNovo = async (req, res) => {
    //const cliente = await dadosClientes.clienteNovo();
    return res.status(201).json(req.body)
}

module.exports = {
    getAll,
    clienteNovo
}