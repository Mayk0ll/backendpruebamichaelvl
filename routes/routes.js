const express = require ('express');
const router = express.Router();
const {pool} = require ('../pg')


router.get('/', async (req, res) => {
    try {
        const resp = await pool.query(`select * from usuarios`)
        res.send(resp.rows)
    } catch (error) {
        res.status(404).send({message: 'Error'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const resp = await pool.query(`select documento, nombre, apellido, correo from usuarios WHERE id_usuario = '${Number(id)}'`)
        res.send(resp.rows)
    } catch (error) {
        res.status(404).send({message: 'Error'})
    }
})

router.post('/', async (req, res) => {
    try {
        const info = req.body;
        console.log(info)
        const {rows} = await pool.query(`select * from usuarios`)
        if(rows.find( e => e.documento == info.documento)) return res.send({message: 'este documento ya esta registrado'}) 
        if(rows.find( e => e.correo == info.correo)) return res.send({message: 'este correo ya esta registrado'}) 
        const resp = await pool.query(`INSERT INTO usuarios (documento, nombre, apellido, correo, contrasenia) VALUES ('${info.documento}','${info.nombre}','${info.apellido}','${info.correo}','${info.contrasenia}')`)
        res.send(resp) 
    } catch (error) {
        res.status(404).send({message: 'Error'})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const info = req.body;
        const resp = await pool.query(`UPDATE usuarios SET nombre = '${info.nombre}', apellido = '${info.apellido}', contrasenia = '${info.contrasenia}' WHERE id_usuario = '${Number(id)}'`)
    res.send(resp) 
    } catch (error) {
        res.status(404).send({message: 'Error'})
    }
})

router.post('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const resp = await pool.query(`DELETE FROM usuarios WHERE id_usuario = '${Number(id)}'`)
        res.send(resp) 
    } catch (error) {
        res.status(404).send({message: 'Error'})
    }
})


module.exports = router; 