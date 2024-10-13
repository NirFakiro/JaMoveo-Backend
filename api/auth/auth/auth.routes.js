import express from 'express'
import { login, signup } from '../auth/auth.controller.js'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)

export const authRoutes = router
