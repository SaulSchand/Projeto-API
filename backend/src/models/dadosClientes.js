const connection = require('./connection')

const getAll = async () => {
    const [dadosCliente] = await connection.execute('SELECT * FROM  dadosCLiente as c')
    return dadosCliente;
};


const clienteNovo = async (cliente) => {
    const {nomeCliente, foneCliente,cpfCliente,endereçoCliente} = cliente;
    
    
    const clienteNovo = await connection.execute('INSERT INTO dadoscliente(nomeCliente, foneCliente, cpfCliente, endereçoCliente) VALUES (?,?,?,?)', [nomeCliente, foneCliente,cpfCliente,endereçoCliente])

    return clienteNovo; 
}


module.exports = {
   getAll,
   clienteNovo
}