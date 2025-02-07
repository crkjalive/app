const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const connection = require('./connection')
const {usersRouter} = require('./routes/users')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => res.send('Hello World'))

app.get('/app', (req, res) => {
    
    const sql = `SELECT * FROM users`

    connection.query(sql, (err, result) => {
        if (err) { console.log('Error en la consulta: ' + err )}
        else {
            // console.log(result)
            res.send(result)
        }
    } )
})

app.use('/users', usersRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}`))