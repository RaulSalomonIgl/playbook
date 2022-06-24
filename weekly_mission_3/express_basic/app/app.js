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

// Respondiendo un objeto
// localhost:3000/explorerInNode
app.get('/explorerInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

// Inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})