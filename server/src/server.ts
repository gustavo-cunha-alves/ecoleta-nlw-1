import express, { response } from 'express'

const app = express()

app.get('/users', (req, res) => {
    console.log('listagem de usuarios')

    response.send('Hello world')
})

app.listen(3333, () => {
    console.log('running on port 3333')
})