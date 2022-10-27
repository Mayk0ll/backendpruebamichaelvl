const {pool} = require ('../pg')

const getVentas = async () => {
    const results = await pool.query(`select * from ventas`)
    return results.rows;
}

const getPublicaciones = async () => {
    const results = await pool.query(`select * from publicaciones`)
    return results.rows;
}



module.exports = {
    getVentas,
    getPublicaciones
}