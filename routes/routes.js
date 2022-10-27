const express = require ('express');
const router = express.Router();
const {pool} = require ('../pg')


router.get('/', async (req, res) => {
    try {
        const resp = await pool.query(`select * from usuarios`)
        res.send(resp.rows)
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const resp = await pool.query(`select * from usuarios WHERE id_usuario = '${Number(id)}'`)
        res.send(resp.rows)
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const info = req.body;
        const resp = await pool.query(`INSERT INTO usuarios (documento, nombre, apellido, correo, contrasenia) VALUES ('${info.documento}','${info.nombre}','${info.apellido}','${info.correo}','${info.contrasenia}')`)
        res.send(resp) 
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const info = req.body;
        const resp = await pool.query(`UPDATE usuarios SET nombre = '${info.nombre}', apellido = '${info.apellido}', contrasenia = '${info.contrasenia}' WHERE id_usuario = '${Number(id)}'`)
    res.send(resp) 
    } catch (error) {
        console.log(error)
    }
})

router.post('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const resp = await pool.query(`DELETE FROM usuarios WHERE id_usuario = '${Number(id)}'`)
        res.send(resp) 
    } catch (error) {
        console.log(error)
    }
})


module.exports = router; 