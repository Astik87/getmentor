const ApiError = require('../error/ApiError')
const {Tags} = require("../models/models");
const {Op} = require("sequelize");

class TagsController {

    async getAll(req, res) {
        const tags = await Tags.findAll();
        return res.json(tags);
    }

}

module.exports = new TagsController()