const dadosClientes = require('../models/dadosClientes')

const getAll = async (_req, res) => {
    const dados = await dadosClientes.getAll();

    return res.status(200).json(dados)

}

const clienteNovo = async (req, res) => {
    const {nomeCliente, foneCliente,cpfCliente,endereçoCliente} = req.body;

    const cliente = await dadosClientes.clienteNovo(nomeCliente, foneCliente,cpfCliente,endereçoCliente);
    
    return res.status(201).json(cliente)
}

module.exports = {
    getAll,
    clienteNovo
}