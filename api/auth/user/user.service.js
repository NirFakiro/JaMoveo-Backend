import { ObjectId } from 'mongodb'
import { dbService } from '../../../services/db.service.js'

export const userService = {
  add,
  getByUsername,
}

async function getByUsername(username) {
  try {
    const collection = await dbService.getCollection('users')
    const user = await collection.findOne({ username })
    return user
  } catch (err) {
    logger.error(`while finding user by username: ${username}`, err)
    throw err
  }
}

async function add(user) {
  try {
    const userToAdd = {
      username: user.username,
      password: user.password,
      role: user.role,
      instrument: user.instrument,
    }
    const collection = await dbService.getCollection('users')
    await collection.insertOne(userToAdd)
    return userToAdd
  } catch (err) {
    throw err
  }
}
