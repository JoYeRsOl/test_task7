require("dotenv").config();
const { Router } = require('express')
const multer = require('multer')
const path = require('path');
const fs = require('fs')
const router = Router()
const db = require('../models/');
const auth = require('../middleware/auth.middleware')
const upload = multer({ dest: 'photos/', limits: {
    //Ограничение по размеру файла
    fileSize: 1048576,
    files: 1
}})

router.put (
	'/:id',
    auth,
    upload.single('photo'),
	async (req, res) => {
		try {
			const userChanges = { first_name, second_name, sex, email, photo} = req.body
			const candidate = await db.User.findAll({
				where: {
					id: req.params.id
				}
			})
			if (!candidate[0]) {
				return res.status(401).json({message: 'User not found'})
			}
            if (req.file != null) {
                const tempPath = req.file.path;
                const extension = path.extname(req.file.originalname).toLowerCase()
                const targetPath = `photos/${req.params.id}${extension}`
                if (
                    extension === ".png" ||
                    extension === ".jpg"
                   ) {
                    fs.rename(tempPath, targetPath, err => {
                        if (err) console.log(err)
                    })
                } else {
                    fs.unlink(tempPath, err => {
                        if (err) console.log(err)
                        res.status(403).json({ message: "Only .png and .jpg files are allowed"})
                    })
                }
                db.User.update({
                    photo: `${req.params.id}${extension}`
                }, {
                    where: {
                        id: req.params.id
                    }
                })
            }

            db.User.update({
                ...userChanges
            }, {
                where: {
                    id: req.params.id
                }
            })
			res.status(201).json({ message: 'User updated', user: {
                ...userChanges
            }})

		} catch (e) {
			console.log(e)
			res.status(500).json({message: 'Server Error'})
		}
	}
)

router.get(
	'/:id', 
    auth,
	async (req, res) => {
		try {
			const user = await db.User.findAll({
				where: {
					id: req.params.id
				}
			})
			if (!user[0]) {
				return res.status(401).json({message: 'User not found'})
			}
            const { id, first_name, second_name, email, sex, photo, createdAt } = user[0].dataValues
			res.json({ id, first_name, second_name, email, sex, photo, createdAt })
	
		} catch (e) {
			console.log(e)
			res.status(500).json({message: 'Server Error'})
		}
	}
)

router.get(
    '/:id/photo',
    auth,
    async (req, res) => {
        try {
            const user = await db.User.findAll({
				where: {
					id: req.params.id
				}
			})
			if (!user[0]) {
				return res.status(401).json({message: 'User not found'})
			} 

            const { photo_filename } = user[0].dataValues
            res.sendFile(path.join(process.env.PHOTOS || 'photos/', photo_filename))
            
        } catch (e) {
			console.log(e)
			res.status(500).json({message: 'Server Error'})
		}
    }
)
module.exports = router