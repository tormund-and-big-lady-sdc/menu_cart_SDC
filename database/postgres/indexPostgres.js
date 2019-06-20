const Pool = require('pg').Pool
const pg = require('../../config.js')
const pool = new Pool({
  user: 'postgres',
  host: 'ec2-52-15-103-198.us-east-2.compute.amazonaws.com',
  database: 'postgres',
  password: pg,
  max: 50,
  port: 5432,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    return console.log("Postgres connection error : ", err )
  }
  console.log("***** connected to postgres on 5432 *****")
})


module.exports = pool;


// scp -i ~/Users/Victor/hrla29/fec-ns/menu-cart/PEM/SDC.pem ~/Users/Victor/hrla29/fec-ns/SDC_seeder/data.csv ubuntu@ec2-18-224-228-46.us-east-2.compute.amazonaws.com:~/seeder/SDC_seeder/
