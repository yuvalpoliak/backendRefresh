const { sayHi, getHi } = require('../controllers/another')

const router= require('express').Router()

router.get('/', getHi)

router.post('/', sayHi)

module.exports = router