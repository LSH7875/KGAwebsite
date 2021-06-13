var DataTypes = require("sequelize").DataTypes;
var _user = require("./user");
var _board = require("./board")
var _board_manage = require("./board_manage")
var _curriculum = require("./curriculum")
var _mainvideo = require("./mainvideo")
var _popup = require("./popup")
var _group = require("./group")
var _form = require("./form")

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes)
  var board_manage = _board_manage(sequelize, DataTypes)
  var curriculum = _curriculum(sequelize, DataTypes)
  var mainvideo = _mainvideo(sequelize, DataTypes)
  var popup = _popup(sequelize, DataTypes)
  var group = _group(sequelize, DataTypes)
  var form = form(sequelize, DataTypes)

  return {
    user,board,board_manage,curriculum,mainvideo,popup,group,form
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
