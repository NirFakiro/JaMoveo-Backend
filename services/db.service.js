import { MongoClient } from 'mongodb'

export const dbService = { getCollection }

var dbConn = null

async function getCollection(collectionName) {
  try {
    const db = await _connect()
    const collection = await db.collection(collectionName)
    return collection
  } catch (err) {
    throw err
  }
}

async function _connect() {
  if (dbConn) return dbConn

  try {
    const client = await MongoClient.connect(
      'mongodb+srv://fakironir:Q1X8sZdlnsj45DVs@cluster0.so6wd.mongodb.net/',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )

    dbConn = client.db('JaMoveo')
    console.log('Connected to MongoDB')
    return dbConn
  } catch (err) {
    console.error('Cannot Connect to DB', err)
    throw err
  }
}
