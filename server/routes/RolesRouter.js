const Router = require('express')
const router = new Router
const RolesController = require('../controllers/RolesController')

router.post('/create', RolesController.create)

module.exports = router