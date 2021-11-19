/* IMPORT */

const Pool = require('pg').Pool


/* ENVS */

const poolPDF = new Pool ({
    host: process.env.HOST_PDF,
    user: process.env.USER_PDF,
    password: process.env.PASS_PDF,
    database: process.env.DATABASE_PDF,
    port: process.env.PORT_PDF,
});



module.exports = {
    poolPDF,
};