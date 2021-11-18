/* IMPORTS */
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')


//-------------------------------------------

/* CONFIGS */

const server = express()
dotenv.config()
server.use(bodyParser.urlencoded({
    extended: true
}));
server.use(bodyParser.json())
server.use(cors())

/* VARIABLES */

var port = process.env.PORT || 3000
var ip = process.env.PORT || 'localhost'

server.get('/', (req,res) => res.send('<h1>Server Operando</h1>'))

/* PORTS */


console.log('hola mundo')