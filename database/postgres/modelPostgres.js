const Sequelize = require('sequelize'); //require sequelize
const connection = require('./indexPostgres.js'); //require database

const menus = connection.define('testtable', {  //table name

  restaurant_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  photo_URL: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  item_name: {
    type: Sequelize.STRING(35),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(125),
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  popular: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  special_instruction: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  extras: {
    type: Sequelize.STRING(255),
    allowNull: false
  }

}, { timestamps: false }); //set timestamps field off

connection.sync({ force: false }); //makes sure your tables won't be overwritten

module.exports = menus; //export module as Menu



// CREATE TABLE testTable (
//    restaurant_id serial PRIMARY KEY,
//    photo_URL VARCHAR(40) NOT NULL,
//    item_name VARCHAR(50) NOT NULL,
//    description VARCHAR(150) NOT NULL,
//    price INT NOT NULL,
//    popular boolean NOT NULL,
//    special_instruction boolean NOT NULL,
//    extras VARCHAR(255) NOT NULL
// );

// COPY testtable
// FROM '/Users/Victor/HRLA29/FEC-NS/menu-cart/database/data.csv' DELIMITER '|' CSV HEADER;

// COPY testtable
// FROM '/home/ubuntu/seeder/SDC_seeder/data.csv' DELIMITER '|' CSV HEADER;
