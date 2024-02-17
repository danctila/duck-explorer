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
    const url = req.body.url
    const response = await openai.chat.completions.create({
        model: 'gpt-4-vision-preview',
        max_tokens: 40,
        messages: [
            {
                role: 'user',
                content: [
                    {type: 'text', text: 'Describe the image as if it were in an animal encyclopedia. Keep your answer within 2 sentences'},
                    {type: 'image_url', image_url: url}
                ]
            }
        ]
    });
    console.log(response.choices[0].message.content)
    var newMessage = truncateIncompleteSentences(response.choices[0].message.content)
    console.log(newMessage)
    res.send(newMessage)
    // res.send(response.choices[0].message.content)
})

function truncateIncompleteSentences(message) {
    var sentences = message.split(/(?<=[.!?])/);
    var lastSentence = sentences[sentences.length - 1].trim();
    var lastChar = lastSentence.charAt(lastSentence.length - 1);
    if (lastChar !== '.' && lastChar !== '?' && lastChar !== '!') {
      sentences.pop();
    }
  
    return sentences.join('');
  }

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