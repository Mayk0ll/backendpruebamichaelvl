const express = require('express');
const morgan = require("morgan");
const app = express();
const rutas = require('./routes/routes')
const {pool} = require ('./pg')

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));


app.listen(process.env.PORT || 3001, () => {
    console.log('Listening on port', process.env.PORT || 3001)
})

app.use('/users', rutas)

app.get('/publicaciones', async (req, res) => {
    try {
        const results = await pool.query(`select * from usuarios`)
        res.send(results.rows)
    } catch (error) {
        console.log(error)
    }
    
})
app.get('/ventas', async (req, res) => {
    try {
        const results = await pool.query(`select * from usuarios`)
        res.send(results.rows)
    } catch (error) {
        console.log(error)
    }
    
})

app.get('*',(req, res) => {
    res.status(404).json('pagina no encontrada')
})