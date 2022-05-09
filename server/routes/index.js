const Router = require('express')
const router = new Router

const userRouter = require('./UserRouter')
const rolesRouter = require('./RolesRouter')
const tagsRouter = require('./TagsRouter')
const ratingRouter = require('./RatingRouter')
const emailRouter = require('./EmailRouter')

router.use('/user', userRouter)
router.use('/roles', rolesRouter)
router.use('/tags', tagsRouter)
router.use('/rating', ratingRouter)
router.use('/email', emailRouter)

module.exports = router