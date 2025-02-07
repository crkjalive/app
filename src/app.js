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


app.get('/', (req, res) => res.render('index', { app: 'Hello World App JSON'}))

app.get('/app', (req, res) => {
    
    const sql = `SELECT * FROM users`

    connection.query(sql, (err, result) => {
        if (err) { console.log('Error en la consulta: ' + err )}
        else {
            res.send(result)
            // console.log(result)
        }
    } )
})

app.use('/users', usersRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}`))