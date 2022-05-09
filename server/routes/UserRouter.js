const Router = require('express')
const router = new Router
const UserController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UserController.registration)

router.post('/login', UserController.login)

router.get('/check', authMiddleware, UserController.check)

router.post('/get-by-id', UserController.getUserById)

router.put('/update', UserController.update)

router.put('/update-cart', UserController.updateCart)

router.post('/get-by-filter', UserController.getUserByFilter)

router.post('/set-rating', UserController.setRating)

router.put('/put-rating', UserController.setRating)

module.exports = router