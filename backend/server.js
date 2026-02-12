import express from 'express';

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Server is ready")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Atom Trust Issues",
            "content": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "title": "Dancing Tissue",
            "content": "How do you make a tissue dance? You put a little boogey in it."
        },
        {
            "id": 3,
            "title": "Cast Party",
            "content": "Why do we tell actors to 'break a leg'? Because every play has a cast."
        },
        {
            "id": 4,
            "title": "Scared Pyramid",
            "content": "Why was the mummy so stressed? He had too much on his wrap."
        },
        {
            "id": 5,
            "title": "Keyboard Trouble",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})

