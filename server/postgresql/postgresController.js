const menus = require('../../database/postgres/modelPostgres.js')
const db = require('../../database/postgres/indexPostgres.js')

module.exports = {
  getOne: (req, res) => {
    const { id } = req.params
    menus.query(`SELECT * FROM testtable WHERE restaurant_id = ${id}`, (err, data) => {
      if (err) { res.status(404).send("error getOne: ", err) }
        else { res.status(200).send(data) }
    })
  },

  post: (req, res) => {
    // const { restaurant_id, photo_URL, item_name, description, price, popular, special_instruction, extras } = req.body;
    // menus.create({
    //   restaurant_id, photo_URL, item_name, description, price, popular, special_instruction, extras
    // })
    //   .then(() => res.status(201).send("post ok"))
    //   .catch(err => res.status(404).send('error posting: ', err))
  },

  get: (req, res) => {
    menus.query('SELECT * FROM testtable ORDER BY restaurant_id ASC'), (err, data) => {
      if (err) { res.status(404).send("error getAll: ", err) }
        else { res.status(200).send(data) }
    }
  },

  patch: (req, res) => {

  },

  delete: (req, res) => {

  }

}