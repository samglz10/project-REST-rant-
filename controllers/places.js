const router = require('express').Router()
const places =require('../models/places.js')

// More code here in a moment, Coming from index.js
// Part 5 step 2 - giving undefined in terminal
router.post('/', (req, res) => {
  
  if (!req.body.pic) {
    //Default image if one is not provided - not reading image?
    req.body.pic = "./public/images/defaultimage.png"
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state ='USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/new',(req,res)=>{
  res.render('places/new')
})

router.get('/', (req,res) => {
    //Part 6 step 4 -remove lines 22-34?

   res.render('places/index', {places}) 
})

module.exports = router
