const { poolPDF } = require('../config/database')

const DataInserted = async (req,res) => {
    console.log('Data Inseted in db')
    res.header("Access-Control-Allow-Origin","*");
    const { password, ip, SO } = req.body;
    const sqlQuery = `insert into encontrados(password,ip,SO) values ($1,$2,$3) RETURNING *`;
    const values = [password, ip, SO];
    const response = await poolPDF.query(sqlQuery,values);
    console.log("Element captured: \n",response.rows);
    res.json(1);
    //console.log(response.rows[0].ip);
};

const ObtainValue = async (req,res) => {
    console.log('Data Collected')
    const OS = req.params.os;
    console.log(OS)
    res.send('Sistema Operativo encontrado')
    //res.json(OS)
    //console.log(response.rows[0].ip);
};



module.exports = {
    DataInserted,
    ObtainValue,
};