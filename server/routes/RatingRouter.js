const Router = require('express')
const router = new Router
const RatingController = require('../controllers/RatingController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/get-user-rating', authMiddleware, RatingController.getUserRating)

router.post('/set-rating', authMiddleware, RatingController.setRating)

module.exports = router