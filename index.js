require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// EXPRESS Settings
app.set('views',__dirname +'/views')
app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
//Parser Tool -Remember, when we send data with the POST verb, that data gets encrypted for its trip across the internet. Because it is protected this way while in transit, that makes it extra safe for usernames, passwords, and other sensitive data. However, it also means we will need an extra tool to decrypt that data for us.
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req,res)=>{
    res.render('error404')
})

app.listen(process.env.PORT, () =>{
console.log(`Listening on http://localhost:${process.env.PORT}`)    
})


