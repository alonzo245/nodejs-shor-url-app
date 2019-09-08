const express = require('express')
const router = express.Router()
const Url = require('../models/url')

//@route GET /:code
router.get('/:code', async (req, res) => {
    try{
        const url = await Url.findOne({ urlCode: req.params.code})

        console.log(url,req.params.code)
        if(url){        
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json('No Found...')
        }
    } catch (err){
        console.log(err.message)
        res.status(500).json('server failure...')        
    }
})

module.exports = router