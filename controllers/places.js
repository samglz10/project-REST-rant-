const router = require('express').Router()

// More code here in a moment, Coming from index.js
router.get('/', (req,res) => {
    res.send('GET /places')
})
module.exports = router
