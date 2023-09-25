const dadosClientes = require('../models/dadosClientes')

const getAll = async (_req, res) => {
    const dados = await dadosClientes.getAll();

    return res.status(200).json(dados)

}

const cadastrarCliente = async (request, res) => {
    const createdCliente = await dadosClientes.cadastrarCliente(request.body);
    return res.status(201).json(createdCliente);
}

module.exports = {
    getAll,
    cadastrarCliente
}