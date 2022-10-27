const express = require ('express');
const router = express.Router();
const {pool} = require ('../pg')


router.post('/', async (req, res) => {
    try {
        const info = req.body
        const {rows} = await pool.query(`select * from usuarios`)
        const findUser = rows.find(e => e.correo === info.correo)
        if(findUser && findUser.contrasenia === info.contrasenia){
            const resp = {
                id_usuario: findUser.id_usuario,
                documento:findUser.documento,
                nombre:findUser.nombre,
                apellido:findUser.apellido,
                correo:findUser.correo
            }
            return res.json(resp)
        }
        console.log(findUser)
        res.send({message: 'Usuario o clave invalida, intenta de nuevo'})
    } catch (error) {
        res.status(404).send({message: 'Error'})
    }
})

module.exports = router; 