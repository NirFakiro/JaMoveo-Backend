import cors from 'cors'
import express from 'express'

import { authRoutes } from './api/auth/auth/auth.routes.js'

const app = express()
const server = app.listen(5000, () => {
  console.log('Server is running on port 5000')
})

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
// app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to the JaMoveo app!!!')
})
