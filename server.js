const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
