const app = require('express')()
const cors = require('cors')
require('express-async-errors');

app.use(cors())

app.use((req, res, next) => {
    console.log(JSON.stringify(req.headers))
    console.log('here')
    next()
})

app.post('/', async (req, res) => {
    res.send('post ok')
})

app.get('/', (req, res) => {
    res.send('read ok')
})

app.get('/:id', (req, res) => {
    res.send('read ok'+ req.params.id)
})

app.put('/:id', (req, res) => {
    res.send('put ok' + req.params.id)
})

app.delete('/:id', (req, res) => {
    res.send('delete ok' + req.params.id)
})


app.use(require('../middlewares/error'))


module.exports = app

//  this.$axios.get()
//     .then( r => {
//     })
//     .catch(e => console.log(e.message))

// try {

// } catch (e) {

// }