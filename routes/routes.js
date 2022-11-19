const express = require('express')
const PessoasController = require('../controllers/PessoasController')

const routes = express.Router()

routes.get('/', PessoasController.index)

routes.get('/pessoa', PessoasController.create)

routes.get('/cadastro', PessoasController.cadastro)

routes.post('/cadastro', PessoasController.salvar)

routes.get('/buscarCep', PessoasController.buscacep)

routes.get('/show/:id', PessoasController.show)

routes.get('/atualizar/:id',PessoasController.update)

routes.get('/deletar/:id', PessoasController.deletar)

module.exports = routes