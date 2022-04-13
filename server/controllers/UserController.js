const ApiError = require('../error/ApiError')
const {User, Roles} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJWT = (id, email, roleId) => {
	return jwt.sign(
		{id, email, roleId},
		process.env.SECRET_KEY,
		{expiresIn: '24h'}
	)
}

class UserController {

	async registration(req, res, next) {
		const {name, email, password, role} = req.body

		if (!name || !role || !password || !email || name.langth < 3 || password.langth < 6 || !email) 
			return next(ApiError.badRequest('Невалидные данные'))
		
		const condidate = await User.findOne({where: {email}})
		
		if (condidate) 
			return next(ApiError.badRequest('Пользователь с таким email уже существует!'))

		const passwordHash = await bcrypt.hash(password, 5)

		const userRole = await Roles.findOne({where: {id: role}})

		if (!userRole) 
			return next(ApiError.badRequest('Такой роли пользователя не существует!'))

		const user = await User.create({name, email, password: passwordHash, roleId: role, ratingVal: 0})

		return res.json(user)
	}

	async login(req, res, next) {
		const {email, password} = req.body
		
		if (!email || !password)
			return next(ApiError.badRequest('Email или пароль не может быть пустым!'))

		const user = await User.findOne({where: {email}})
		
		const comparePassword = bcrypt.compareSync(password, user.password)

		if (!comparePassword)
			return next(ApiError.badRequest('Неверный email или пароль!'))

		const token = generateJWT(user.id, email, user.roleId)
		
		return res.json({token})
	}

	async check(req, res) {
		const token = generateJWT(req.user.id, req.user.email, req.user.roleId)
		return res.json({token})
	}
}

module.exports = new UserController()