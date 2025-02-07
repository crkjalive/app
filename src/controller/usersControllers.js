const connection = require('../connection')

const getUsers = (req, res) => {

    const message = {mensaje: 'mensaje agregado'}

    const sql = `select * from users`

    connection.query(sql, (err, results) => {
        if (err) { console.log('tenemos un error en la consulta de la tabla users') }
        else {
            results.push(message)
            res.send(results)
        }
    })
}

const getMessage = (req, res) => {
    res.send('<h1>Message programado</h1>')
}

module.exports = {
    getUsers,
    getMessage
}