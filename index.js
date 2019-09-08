const express = require('express')
const connectDB = require('./config/db')
const app = express()

//connect DB
connectDB()

app.use(express.json({extend: false}))

//routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const PORT = 5000

app.listen(PORT, () => {
    console.log('server running...')
})

