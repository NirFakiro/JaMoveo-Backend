import Cryptr from 'cryptr'

import { userService } from '../user/user.service.js'
export const authService = {
  signup,
  login,
}

async function login(username, password) {
  const user = await userService.getByUsername(username)

  if (!user) return Promise.reject('Invalid username or password')
  delete user.password
  user._id = user._id.toString()
  return user
}

async function signup({ username, password, role, instrument }) {
  const saltRounds = 10

  const userExist = await userService.getByUsername(username)
  if (userExist) return Promis.reject('Username already taken')

  const hash = await bcrypt.hash(password, saltRounds)
  return userService.add({ username, password: hash, role, instrument })
}
