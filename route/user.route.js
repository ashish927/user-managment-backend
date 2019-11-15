const express = require('express')
 
const { post, get, put } = require('../controller/user.controller')
 
const router = express.Router()
 
router.post('/user', post)

router.get('', get)

router.put('', put)
 
module.exports = router