require('dotenv').config()
const apiKey = process.env.OPENAI_API_KEY;

const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { OpenAI } = require('openai')

const openai = new OpenAI ({
    apiKey: apiKey 
})

const app = express()
app.use(cors())
app.use(express.json())

app.post("/chat", async (req, res) => {
    const { prompt } = req.body

    const response = await openai.chat.completions.create({
        model: 'gpt-4-vision-preview',
        messages: [
            {
                role: 'user',
                content: [
                    {type: 'text', text: 'What is this image?'},
                    {type: 'image_url', image_url: prompt}
                ]
            }
        ]
    });
    res.send(completion.data.choices[0].text)
})

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