const ApiError = require('../error/ApiError')
const {User, Roles, Tags, UserTags, Rating} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const path = require('path')
const {Op} = require("sequelize");

const generateJWT = (id, email, roleId) => {
	return jwt.sign(
		{id, email, roleId},
		process.env.SECRET_KEY,
		{expiresIn: '24h'}
	)
}

class RatingController {

	async getUserRating(req, res) {
		const {mentorId} = req.body

		const userId = req.user.id

		console.log(mentorId)

		if(!mentorId)
			return res.json(false)

		const rating = await Rating.findOne({where: {user_id: userId, mentor_id: mentorId}})

		return res.json(rating)
	}

	async setRating(req, res) {
		const {mentorId, ratingVal} = req.body

		const userId = req.user.id

		if(!userId || !mentorId || mentorId === userId)
			return res.json(false)

		const user = await User.findOne({where: {id: userId}})

		const mentor = await User.findOne({where: {id: mentorId}})

		if(!user || !mentor)
			return res.json(false);

		const dbRating = await Rating.findOne({where: {user_id: user.id, mentor_id: mentor.id}})

		let rating = false

		if(dbRating)
			rating = await Rating.update({ratingVal}, {where: {id: dbRating.id}})
		else
			rating = await Rating.create({user_id: userId, mentor_id: mentorId, ratingVal})

		if(rating) {
			const mentorRatings = await Rating.findAndCountAll({where: {mentor_id: mentor.id}})

			let ratingSum = 0

			mentorRatings.rows.forEach(ratingItem => {
				ratingSum += ratingItem.ratingVal
			})

			User.update({ratingVal: Math.round(ratingSum / mentorRatings.count)}, {where: {id: mentorId}})
		}

		return res.json(rating)
	}

}

module.exports = new RatingController()