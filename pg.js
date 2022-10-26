const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://hkhltbnqmstbtv:9b6bb197a0d322fe5e3c1717ae294849143865c14f6569f92c822319f1dd76c2@ec2-44-210-228-110.compute-1.amazonaws.com:5432/ds42pmvgk0f1v',
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = {pool}