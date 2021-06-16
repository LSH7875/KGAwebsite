var DataTypes = require("sequelize").DataTypes;
var _board = require("./board");
var _board_manage = require("./board_manage");
var _curriculum = require("./curriculum");
var _form = require("./form");
var _group = require("./group");
var _mainvideo = require("./mainvideo");
var _popup = require("./popup");
var _user = require("./user");

function initModels(sequelize) {
  var board = _board(sequelize, DataTypes);
  var board_manage = _board_manage(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var form = _form(sequelize, DataTypes);
  var group = _group(sequelize, DataTypes);
  var mainvideo = _mainvideo(sequelize, DataTypes);
  var popup = _popup(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  board.belongsTo(board_manage, { as: "board_number_board_manage", foreignKey: "board_number"});
  board_manage.hasMany(board, { as: "boards", foreignKey: "board_number"});
  board_manage.belongsTo(group, { as: "group_group", foreignKey: "group"});
  group.hasMany(board_manage, { as: "board_manages", foreignKey: "group"});

  return {
    board,
    board_manage,
    curriculum,
    form,
    group,
    mainvideo,
    popup,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
