const express = require('express');
const morgan = require("morgan");
const app = express();
const rutas = require('./routes/routes')
const aut = require('./routes/autentication')
const cors = require("cors");
const { getVentas, getPublicaciones } = require('./controllers/queryControllers')


app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(cors());


app.listen(process.env.PORT || 3001, () => {
    console.log('Listening on port', process.env.PORT || 3001)
})

app.use('/users', rutas)
app.use('/aut', aut)

app.get('/publicaciones', async (req, res) => {
    try {
        const results = await getPublicaciones();
        res.send(results)
    } catch (error) {
        console.log(error)
    }
    
})
app.get('/ventas', async (req, res) => {
    try {
        const results = await getVentas(); 
        res.send(results)
    } catch (error) {
        console.log(error)
    }
    
})

app.get('*',(req, res) => {
    res.status(404).json('pagina no encontrada')
})