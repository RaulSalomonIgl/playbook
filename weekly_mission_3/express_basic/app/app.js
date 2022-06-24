// Usando objeto Express
const express = require('express')
// App de Express
const app = express()
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Path incial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenido a launchx')
})

// Inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})