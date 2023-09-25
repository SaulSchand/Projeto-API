const express = require('express');
const router = express.Router();
const dadosClientesController = require('./controllers/dadosClientesControllers')

router.get('/dadosCliente', dadosClientesController.getAll);
router.post('/dadosCliente', dadosClientesController.clienteNovo);

module.exports = router;