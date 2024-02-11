const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/random', (req, res) => {
    axios.get('https://random-d.uk/api/v2/random')
    .then(response => {
        return(res.json(response.data))
    })
    .catch(err => {
        console.log(res.status(500).json({ error: err.message }))
    })
})

app.listen(8081, () => {
    console.log("Server listening...")
})