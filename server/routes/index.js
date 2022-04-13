const Router = require('express')
const router = new Router

const userRouter = require('./UserRouter')
const rolesRouter = require('./RolesRouter')

router.use('/user', userRouter)
router.use('/roles', rolesRouter)

module.exports = router