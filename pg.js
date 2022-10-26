const {Pool} = require('pg')

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgres://qhcsbvbnjnmlwv:47f1a95edeca7a6310e7e0e21af83bfbc962d4464f35cc6578e0464c3490da2b@ec2-44-209-24-62.compute-1.amazonaws.com:5432/ddphefrb3ccjuf',
    ssl:{
        rejectUnauthorized: false
    }
})

module.exports = {pool}