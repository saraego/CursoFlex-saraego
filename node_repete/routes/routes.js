const express = require('express')
const router = express.Router()
const pessoasControler = require('../controller/pessoasControler')


router.get('/', pessoasControler.index)

router.get('/cadastro', pessoasControler.cadastro)

router.post('/cadastro', pessoasControler.salvar)

router.get('/buscarcep', pessoasControler.buscarcep)


module.exports = router