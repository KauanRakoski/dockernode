const app = require('express')()

const PORT = 3000
const HOST = '0.0.0.0'

app.get('/', (req, res) => {
    res.send('🐳 Hello World! <a href="/docker">Docker</a>')
})

app.get('/docker', (req, res) => {
    res.send('🐳 This is a sample app build with Docker and Docker compose <a href="/">Home</a>')
})


app.listen(PORT, HOST)