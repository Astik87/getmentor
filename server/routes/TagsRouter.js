const Router = require('express')
const router = new Router

const TagsController = require('../controllers/TagsController')

router.get('/get-all', TagsController.getAll)

module.exports = router