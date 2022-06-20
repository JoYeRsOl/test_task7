require("dotenv").config();
const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const router = Router()
const db = require('../models');
router.post (
	'/register',
	[
		check('email', 'Uncorrect email').normalizeEmail().isEmail(),
		check('password', 'Uncorrect password').isLength({ min: 6 }),
		check('first_name', 'Uncorrect name').isLength({ min: 2 })
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: "Uncorrect registration data"
				})
			}

			const { email, password, first_name } = req.body
			const candidate = await db.User.findAll({
				where: {
					email: email
				}
			})
			console.log(candidate)
			if (candidate[0]) {
				return res.status(400).json({message: 'User already registered'})
			}

			const hashedPassword = await bcrypt.hash(password, 12)
			const user = await db.User.create({
				email: email,
				password: hashedPassword,
				first_name: first_name
			})
			res.status(201).json({ message: 'User created'})

		} catch (e) {
			console.log(e)
			res.status(500).json({message: 'Server Error'})
		}
	}
)

router.post(
	'/login', 
	[
		check('email', 'Enter correct email').normalizeEmail().isEmail(),
		check('password', "Enter correct password").exists()
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
	
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: "Uncorrect login data"
				})
			}
	
			const { email, password } = req.body
			const user = await db.User.findAll({
				where: {
					email: email
				}
			})
			if (!user[0]) {
				return res.status(400).json({message: 'User not found'})
			}
			const isMatch = await bcrypt.compare(password, user[0].dataValues.password)

			if (!isMatch) {
				return res.status(400).json({ message: "Uncorrect data"})
			}
			const token = jwt.sign(
				{ userId: user[0].dataValues.id },
				process.env.JWTSECRET,
				{ expiresIn: '1h' }
			)

			res.json({ token: token, userId: user[0].dataValues.id })
	
		} catch (e) {
			console.log(e)
			res.status(500).json({message: 'Server Error'})
		}
	}
)

module.exports = router