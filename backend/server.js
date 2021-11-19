/* IMPORTS */
const express = require('express')
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

//server.get('/', (req,res) => res.send('<h1>Server Operando</h1>'))

/* PORTS */

server.use('/api/insert', require('./src/api/data_insert'))
server.use('/api/users', require('./src/api/users'))

server.get('/api/users', function(request,response){
    response.sendFile('/home/joaquin/Documentos/criptografia/lab5/Lab5_Cripto/frontend/views/users.html');
});

server.listen(port,()=>{
    console.log(`Servidor de pdf-reader-app corriendo en: http://${ip}:${port}.`)
})