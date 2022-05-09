const ApiError = require('../error/ApiError')
const {User, Roles, Tags, UserTags} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const path = require('path')
const {Op} = require("sequelize");

const generateJWT = (id, name, email, roleId) => {
	return jwt.sign(
		{id, name, email, roleId},
		process.env.SECRET_KEY,
		{expiresIn: '24h'}
	)
}

class UserController {

	static async getUserTags(user) {
		const userTags = await UserTags.findAll({where: {userId: user.id}})

		if(userTags) {

			const tagIds = []

			userTags.forEach(e => {
				tagIds.push({id: e.tagId})
			})

			const res = await Tags.findAll({where: {[Op.or]: tagIds}});

			res.forEach((tag, i) => {

				res[i] = {id: tag.dataValues.id, name: tag.dataValues.name}

			})

			return res

		}

		return false
	}

	async registration(req, res, next) {
		const {name, email, password, role} = req.body

		if (!name || !role || !password || !email || name.langth < 3 || password.langth < 6 || !email) 
			return next(res.json({error: 'Невалидные данные'}))
		
		const condidate = await User.findOne({where: {email}})
		
		if (condidate) 
			return next(res.json({error: 'Невалидные данные'}))

		const passwordHash = await bcrypt.hash(password, 5)

		const userRole = await Roles.findOne({where: {id: role}})

		if (!userRole) 
			return next(res.json({error: 'Невалидные данные'}))

		const user = await User.create({name, email, password: passwordHash, roleId: role, ratingVal: 0})

		return res.json(user)
	}

	async login(req, res, next) {
		const {email, password} = req.body
		
		if (!email || !password)
			return next(ApiError.badRequest('Email или пароль не может быть пустым!'))

		const user = await User.findOne({where: {email}})

		if (!user)
			return next(ApiError.badRequest('Пользователь не найден!'))

		const comparePassword = bcrypt.compareSync(password, user.password)

		if (!comparePassword)
			return next(ApiError.badRequest('Неверный email или пароль!'))

		const token = generateJWT(user.id, user.name, email, user.roleId)
		
		return res.json({token})
	}

	async check(req, res) {
		const token = generateJWT(req.user.id, req.user.name, req.user.email, req.user.roleId)
		return res.json({token})
	}

	async getUserById(req, res) {
		const {id, getTags} = req.body

		const responce = {};

		const user = await User.findOne({where: id})

		if (user) {

			responce.user = user;
			if(getTags) {
				responce.tagsList = await UserController.getUserTags(user)
			}

			return res.json(responce)
		}

		else ApiError.badRequest({message: "Пользователь не найден"})
	}

	async update(req, res) {
		const user = req.body
		let ava = false

		if (req.files)
			ava = req.files.ava

		if (req.files && ava) {
			const fileType = ava.name.split('.')
			const fileName = uuid.v4() + '.' + fileType[fileType.length - 1]

			ava.mv(path.resolve(__dirname, '..', 'static', fileName))
			user.ava = fileName
		}

		if (user.password)
			user.password = await bcrypt.hash(user.password, 5)

		const resUser = await User.update(user, {where: {id: user.id}})

		return res.json(resUser)
	}

	async updateCart(req, res) {
		const user = req.body,
			userTags = []

		let newTags = []

		user.tagsList.forEach((tag) => {
			if(!tag.id)
				newTags.push(tag)
			else
				userTags.push({id: tag.id})
		});

		const dbUser = await User.findOne({where: {id: user.id}})

		UserTags.destroy({where: {userId: dbUser.id}});

		newTags = await Tags.bulkCreate(newTags)

		newTags.forEach(tag => {
			userTags.push({id: tag.dataValues.id})
		})

		const tags = await Tags.findAll({where: {[Op.or]: userTags}})

		const dbUserTags = await UserTags.findAll({where: {userId: user.id}})

		const tagIds = []

		dbUserTags.forEach(e => {
			tagIds.push(e.tagId)
		})


		tags.forEach(tag => {

			let data = {userId: dbUser.id}

			if(tag.dataValues) data.tagId = tag.dataValues.id
			else data.tagId = tag.id

			if(tagIds.indexOf(data.tagId) !== -1)
				return

			UserTags.create(data)
		})

		const userUpdateRes = await User.update(user, {where: {id: user.id}})

		return res.json(userUpdateRes)
	}

	async getUserByFilter(req, res) {
		const {filter, getTags} = req.body

		const users = await User.findAll({where: filter})

		if (users) {

			if (getTags) {
				for(let user in users) {
					users[user].dataValues.tags = await UserController.getUserTags(users[user]);
				}
			}

			return res.json(users)

		}

		return res.json(users)
	}

	async setRating(req, res) {
		const {userId, rating} = req.body
		const user = await User.findOne({where: {id: userId}})

		if(!user)
			return res.json({error: 'Пользователь не найден'})

		const userUpdated = await User.update({ratingVal: rating}, {where: {id: user.id}})

		return res.json(userUpdated)
	}
}

module.exports = new UserController()