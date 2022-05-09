const nodemailer = require('nodemailer')
// require('dotenv').config()

class EmailController {
    async send(req, res) {

        try {
            const {to} = req.body
            const {user} = req;

            let transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            })

            let result = await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: to,
                subject: 'Новая заявка на сайте SkillUp!',
                // text: 'Test',
                // html: 'test'
                text: 'Пользователь ' + user.name + " оставил Вам заявку:\nEmail: " + user.email,
                html:
                    'Пользователь ' + user.name + " оставил Вам заявку:<br/>Email: " + user.email,
            })

            return res.json(result)
        } catch (e) {
            return res.json({error: e})
        }
    }

    async sendQuestions(req, res) {

        try {
            const {name, email} = req.body

            let transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: process.env.EMAIL_PORT,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD,
                },
            })

            let result = await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Новая заявка на сайте SkillUp!',
                text: 'Пользователь ' + name + " оставил Вам вопрос:\nEmail: " + email,
                html:
                    'Пользователь ' + name + " оставил Вам заявку:<br/>Email: " + email,
            })

            return res.json(result)
        } catch (e) {
            return res.json({error: e})
        }
    }
}

module.exports = new EmailController()