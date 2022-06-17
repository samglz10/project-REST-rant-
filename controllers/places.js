const router = require('express').Router()

// More code here in a moment, Coming from index.js

router.get('/new',(req,res)=>{
  res.render('places/new')
} )

router.get('/', (req,res) => {
     let places = [{
        name: 'Night Life',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/latenight.png'
      }, {
        name: 'Bar',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/bar.png'
      }]
    //res.send('GET /places')
   res.render('places/index', {places}) 
})

module.exports = router
