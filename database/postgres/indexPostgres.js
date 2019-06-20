const Pool = require('pg').Pool
const pg = require('../../config.js')
const pool = new Pool({
  user: 'postgres',
  host: 'ec2-13-58-184-178.us-east-2.compute.amazonaws.com',
  database: 'postgres',
  password: pg,
  port: 5432
})

if(pool !== null) {
  console.log("***** connected to postgres *****")
} else {
  console.log("!!!!! error connecting to postgres !!!!!")
}

module.exports = pool;


// scp -i ~/Users/Victor/hrla29/fec-ns/menu-cart/PEM/SDC.pem ~/Users/Victor/hrla29/fec-ns/SDC_seeder/data.csv ubuntu@ec2-18-224-228-46.us-east-2.compute.amazonaws.com:~/seeder/SDC_seeder/
