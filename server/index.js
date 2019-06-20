const express = require('express');
const app = express();
const port = process.env.PORT||3100;
const path = require('path');

const cors = require('cors')
var expressStaticGzip = require('express-static-gzip');
const CronJob = require('cron').CronJob;

//use middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve the client
app.use('/restaurants/menu_cart', expressStaticGzip(path.join(__dirname, '../public'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
 }));

//Raw Postgres
const dbPostgres = require('../database/postgres/indexPostgres.js');
app.get('/api/postgres/:id', (req, res) => {
    let { id } = req.params;
    dbPostgres.query(`SELECT * FROM testtable WHERE restaurant_id = ${id}`, (error, data) => {
      if (error) {
        res.status(404).send("PG error get ID!! ", error)
      } else {
        res.status(200).json(data.rows)
      }
    })
  });

app.get('/api/rand/postgres', (req, res) => {
  let id = Math.ceil(Math.random()*1000000) + 9000000;
    dbPostgres.query(`SELECT * FROM testtable WHERE restaurant_id = ${id}`, (error, data) => {
      if (error) {
        res.status(404).send("PG error get ID!! ", error)
      } else {
        res.status(200).json(data.rows)
      }
  })
});



app.listen(port, () => console.log(`App listening on port ${port}!`));