// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insert("burgers", name, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.update("burgers", devoured, id, function(res) {
      cb(res);
    });
  },
//   delete: function(condition, cb) {
//     orm.delete("burger", condition, function(res) {
//       cb(res);
//     });
//   }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
