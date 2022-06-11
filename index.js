const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('res rant!')
})

app.listen(3000)
