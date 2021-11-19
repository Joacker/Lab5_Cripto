const Note = require('../config/Note')

const usuarios = async (req,res) => {
    //res.header("Access-Control-Allow-Origin","*");
    const response = await Note.find();
    console.log("funcionando");
    res.json(response.rows);
    res.send("note add");
};

module.exports = {
    usuarios
};