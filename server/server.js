const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.json())

app.get('/getuserid/:userId', (req, res) => {
  const { userId } = req.params
  console.log(userId,req.params)

  res.json(userId)
})
app.get('/', (req, res) => {
  console.log(req.params)
  res.json("estas pegando como un campeon")
})

app.post('/createuser', (req, res) => {
console.log(req.body)
})

app.listen(port, () => {
  console.log(`estamos escuchando el puerto ${port}`)
})
