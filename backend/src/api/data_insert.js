/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { DataInserted } = require('../controllers/data_insert.controller')
const { ObtainValue } = require('../controllers/data_insert.controller')

/* APIS */
router.post('/insert',DataInserted)
router.get('/ObtainValues/:os/:key',ObtainValue)

module.exports = router