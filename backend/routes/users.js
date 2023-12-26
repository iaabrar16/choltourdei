import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/userController.js'

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

//Update user
router.put('/:id', VerifyUser, updateUser)

//Delete user
router.delete('/:id', VerifyUser, deleteUser)

//Get single user
router.get('/:id', VerifyUser, getSingleUser)

//Get all user
router.get('/', VerifyAdmin, getAllUser)


export default router