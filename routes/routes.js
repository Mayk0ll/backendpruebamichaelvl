const express = require ('express');
const router = express.Router();
const {pool} = require ('../pg')


router.get('/', async (req, res) => {
    // const results = await pool.query(`select * from usuarios`)
    res.send('esperando')
})


module.exports = router;