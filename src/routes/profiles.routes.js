require("dotenv").config();
const { Router } = require('express')
const router = Router()
const db = require('../models/');
const auth = require('../middleware/auth.middleware')

router.get(
	'/', 
    auth,
	async (req, res) => {
		try {
            let limit = 10
            let page = 0
            if (Number.isInteger(parseInt(req.query.page))) {
                page = (parseInt(req.query.page)-1) * limit
            }
            else {
                return res.status(400).json({message: 'Bad Request'})
            }
			const user = await db.User.findAll({
                limit,
                offset: page,
                //Сортировка по дате регистрации
                order: [
                    ['createdAt', 'ASC']
                ]
            })

			if (!user[0]) {
				return res.status(404).json({message: 'Users not found'})
			}
            let responseArray = []
            user.forEach(element => {
                delete element.dataValues.password
                responseArray.push(element.dataValues)
            });
			res.json(responseArray)
	
		} catch (e) {
			console.log(e)
			res.status(500).json({message: 'Server Error'})
		}
	}
)

module.exports = router