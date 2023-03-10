import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Cors from 'cors'
import Cards from './dbCards.js'

// App config 
const app = express()
dotenv.config()
const port = process.env.PORT || 8001
const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD
const connection_url = `mongodb+srv://${user}:${password}@cluster0.txjb5rq.mongodb.net/?retryWrites=true&w=majority`



// Middleware
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connection_url).then(() => console.log('Database Connected!')).catch((error) => console.log('DB error ', error))

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))






app.post('/dating/cards', async (req, res) => {
    const dbCard = req.body
  
    try {
      const data = await Cards.create(dbCard)
      res.status(201).send(data)
    } catch (err) {
      res.status(500).send(err)
    }
  })


  app.get('/dating/cards', async (req, res) => {
    try {
      const data = await Cards.find()
      res.status(200).send(data)
    } catch (err) {
      res.status(500).send(err)
    }
  })


//Listener 
app.listen(port, (req, res) => console.log(`Listening on localhost: ${port}`))

