const express = require('express');
const path = require("path")
const app = express()

const PORT = process.env.PORT || 3030

app.listen(PORT, ()=> console.log('Servidor en servicio: http://localhost:3030/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))

})
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))

})

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))

})

app.use(express.static('public'))

