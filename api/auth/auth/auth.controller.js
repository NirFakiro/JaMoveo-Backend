import { authService } from '../auth/auth.service.js'

export async function login(req, res) {
  const { username, password } = req.body
  try {
    const user = await authService.login(username, password)

    res.json(user)
  } catch (err) {
    res.status(401).send({ err: 'Failed to Login' })
  }
}

export async function signup(req, res) {
  try {
    const { username, password, role, instrument } = req.body

    const existingUser = await authService.getByUsername(username)
    if (existingUser) {
      return res.status(400).send({ err: 'Username already exists' })
    }
    const credentials = {
      username,
      password,
      role,
      instrument,
    }
    const account = await authService.signup(credentials)
    const user = await authService.login(
      credentials.username,
      credentials.password
    )
    res.json(user)
  } catch (err) {
    res.status(400).send({ err: 'Failed to signup' })
  }
}
