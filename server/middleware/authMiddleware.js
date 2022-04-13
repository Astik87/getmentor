const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {

	if(req.method == 'OPTIONS')
		next() 

	try {
		const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

		if(!token)
			return res.status(401).json({message: 'Вы не авторизованы!'})
			
		const decoded = jwt.verify(token, process.env.SECRET_KEY)
		
		console.log('decoded');

		req.user = decoded
		next()
	} catch (error) {
		return res.status(401).json({message: 'Вы не авторизованы!'})
	}
}