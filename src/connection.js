const mysql = require('mysql')
const { mySQLConnect } = require('./configuration.js')

const connection = mysql.createConnection(mySQLConnect)

connection.connect( (err, conn) => {
    if(err){console.log('Validar usuario y contraseña: ' + err)}
    else{
        console.log('Conexion exitosa')
        return conn
    }

})

module.exports = connection