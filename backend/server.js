require('dotenv').config()
const apiKey = process.env.OPENAI_API_KEY;

const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { OpenAI } = require('openai')

const openai = new OpenAI ({
    apiKey: apiKey 
})

async function gptTest() {
    const response = await openai.chat.completions.create({
        model: 'gpt-4-vision-preview',
        messages: [
            {
                role: 'user',
                content: [
                    {type: 'text', text: 'What is this image?'},
                    {type: 'image_url', image_url: 'https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg'}
                ]
            }
        ]
    });
    console.log(response.choices[0].message)
}
gptTest();


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