const {pool} = require ('../pg')

const getVentas = async () => {
    const results = await pool.query(`select nombre, sum(total_venta) as totalventas from ventas join usuarios on id_usuario = vendedor group by nombre order by totalventas desc;`)
    return results.rows;
}

const getPublicaciones = async () => {
    const results = await pool.query(`select nombre, count(nombre) as cantpublicaciones from publicaciones join usuarios on id_usuario = usuario group by nombre order by cantpublicaciones desc;`)
    return results.rows;
}



module.exports = {
    getVentas,
    getPublicaciones
}