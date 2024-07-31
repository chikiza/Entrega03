const express = require('express')
const {vistaPrincipal, vistaTables, vistaNotificstions} = require('../controllers/PageControllers')
const router = express.Router()

router.get('/', vistaPrincipal)
router.get('/tables', vistaTables)
router.get('/notifications', vistaNotificstions)

module.exports = {routes: router}
