/* IMPORTS */
const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { usuarios } = require('../controllers/data_insert.controller')


/* APIS */
router.post('/insert',usuarios)

module.exports = router