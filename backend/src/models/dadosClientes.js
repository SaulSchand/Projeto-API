const connection = require('./connection')

const getAll = async () => {
    const dadosCliente = await connection.execute('SELECT * FROM pedido as p, dadosCLiente as c, dadosFuncionario as f, produto as s')
    return dadosCliente[0];
};

const cadastrarCliente = async (params) => {

const {nomeCliente, foneCliente, cpfCliente, endereçoCliente} = params;

const query = 

const createdCliente = await connection.execute( "INSERT INTO dadoscliente(nomeCliente, foneCliente, cpfCliente, endereçoCliente) VALUES (?,?,?,?)", [nomeCliente, foneCliente, cpfCliente, endereçoCliente])

return createdCliente;

}

module.exports = {
   getAll,
   cadastrarCliente
}