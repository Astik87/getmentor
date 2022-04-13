const sequelize = require('../db.js')
const {	DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING},
	email: {type: DataTypes.STRING, unique: true},
	password: {type: DataTypes.STRING},
	description: {type: DataTypes.TEXT},
	ava: {type: DataTypes.STRING},
	ratingVal: {type: DataTypes.FLOAT},
})

const Roles = sequelize.define('roles', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING},
})

const Tags = sequelize.define('tags', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	name: {type: DataTypes.STRING},
})

const UserTags = sequelize.define('user_tags', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rating = sequelize.define('rating', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	ratingVal: {type: DataTypes.FLOAT},
})

const VerifyEmail = sequelize.define('verify_email', {
	id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
	hash: {type: DataTypes.STRING},
})

Roles.hasOne(User)
User.belongsTo(Roles)

User.belongsToMany(Tags, {through: UserTags})
Tags.belongsToMany(User, {through: UserTags});

User.belongsToMany(User, {as: 'user_id', foreignKey: 'user_id', through: Rating})
User.belongsToMany(User, {as: 'mentor_id', foreignKey: 'mentor_id', through: Rating})

User.hasOne(VerifyEmail)
VerifyEmail.belongsTo(User)

module.exports = {
	User,
	Roles,
	Tags,
	UserTags,
	Rating,
	VerifyEmail
}