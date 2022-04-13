const ApiError = require('../error/ApiError')
const {Roles} = require('../models/models')
const bcrypt = require('bcrypt')

class RolesController {

	async getAll(req, res, next) {
		
	}

	async getOne(req, res) {

	}

	async create(req, res, next) {
		
		const {name} = req.body

		if (!name) 
			return next(ApiError.badRequest('Имя роли не задано'))

		const role = await Roles.create({name})

		res.json({role})

	}
}

module.exports = new RolesController()