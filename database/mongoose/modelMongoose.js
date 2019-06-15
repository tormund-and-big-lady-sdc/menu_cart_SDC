var mongoose = require("mongoose");
var db = require("./indexMongoose");

var menuSchema = new mongoose.Schema({
  item_name: String,
  description: String,
  price: Number,
  popular: Boolean,
  special_instruction: Boolean,
  extras: {
    type: [
      {
        name: String,
        price: Number
      }
    ],
    default: undefined
  },
  restaurant_id: Number,
  photo_URL: String
});

var menus = mongoose.model("menus", menuSchema);

module.exports = menus;