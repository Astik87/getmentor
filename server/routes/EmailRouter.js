const Router = require('express')
const router = new Router
const EmailController = require('../controllers/EmailController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/send', authMiddleware, EmailController.send)

router.post('/send-questions', EmailController.sendQuestions)

module.exports = router