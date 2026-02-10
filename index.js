require('dotenv').config()

// required modules syntax (import file)
const express = require('express')

const app = express()

// listen  server port ()
const port = 4000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('<h1>Twitter App</h1>')
})

app.get('/login', (req, res) => {
    res.send("<h1>Login Sections</h1>")
})

app.get('/appsile', (req, res) => {
    res.send("<h1>appsile.com</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})