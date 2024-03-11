const express = require('express')
const dotenv = require('dotenv')
const Routes = require('./routes/index')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Routes
const URL = '/api/v1'
app.use(URL, Routes)

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(URL, (req, res) => {
  res.send('API v1 active!')
})

// Start server
app.listen(PORT, () => {
  console.log(`App run on port ${PORT}`)
})