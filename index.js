const express = require('express')
const app = express()
const port = 3000

const cepRoutes = require('./src/routes/cepRoutes')

app.use(express.json())

app.use('/cep', cepRoutes)



app.get('/', (req, res) => {
    res.send("Hello World!")
})

// app.get('/cep/:cep', async (req, res) => {
//     const cep = req.params.cep

//     const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

//     const data = await response.json()

//     return res.json(data)


// })

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})