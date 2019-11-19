const express = require('express')
 
const { post, get, put, deleteCause } = require('../controller/user.controller')
 
const router = express.Router()
 
router.post('', post)

router.get('', get)

router.put('', put)

router.delete('/:userId', deleteCause)
 
module.exports = router