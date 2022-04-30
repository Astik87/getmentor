const Router = require('express')
const router = new Router

const userRouter = require('./UserRouter')
const rolesRouter = require('./RolesRouter')
const tagsRouter = require('./TagsRouter')

router.use('/user', userRouter)
router.use('/roles', rolesRouter)
router.use('/tags', tagsRouter)

module.exports = router