var DataTypes = require("sequelize").DataTypes;
var _apply = require("./apply");
var _board = require("./board");
var _board_manage = require("./board_manage");
var _consultant = require("./consultant");
var _cur_cardinal = require("./cur_cardinal");
var _curriculum = require("./curriculum");
var _faq = require("./faq");
var _form = require("./form");
var _group = require("./group");
var _mainvideo = require("./mainvideo");
var _popup = require("./popup");
var _recuruit = require("./recuruit");
var _user = require("./user");

function initModels(sequelize) {
  var apply = _apply(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes);
  var board_manage = _board_manage(sequelize, DataTypes);
  var consultant = _consultant(sequelize, DataTypes);
  var cur_cardinal = _cur_cardinal(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var faq = _faq(sequelize, DataTypes);
  var form = _form(sequelize, DataTypes);
  var group = _group(sequelize, DataTypes);
  var mainvideo = _mainvideo(sequelize, DataTypes);
  var popup = _popup(sequelize, DataTypes);
  var recuruit = _recuruit(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  board.belongsTo(board_manage, { as: "board_number_board_manage", foreignKey: "board_number"});
  board_manage.hasMany(board, { as: "boards", foreignKey: "board_number"});
  curriculum.belongsTo(consultant, { as: "professor1_consultant", foreignKey: "professor1"});
  consultant.hasMany(curriculum, { as: "curriculums", foreignKey: "professor1"});
  curriculum.belongsTo(consultant, { as: "professor2_consultant", foreignKey: "professor2"});
  consultant.hasMany(curriculum, { as: "professor2_curriculums", foreignKey: "professor2"});
  curriculum.belongsTo(faq, { as: "faq1_faq", foreignKey: "faq1"});
  faq.hasMany(curriculum, { as: "curriculums", foreignKey: "faq1"});
  curriculum.belongsTo(faq, { as: "faq2_faq", foreignKey: "faq2"});
  faq.hasMany(curriculum, { as: "faq2_curriculums", foreignKey: "faq2"});
  curriculum.belongsTo(faq, { as: "faq3_faq", foreignKey: "faq3"});
  faq.hasMany(curriculum, { as: "faq3_curriculums", foreignKey: "faq3"});
  board_manage.belongsTo(group, { as: "group_group", foreignKey: "group"});
  group.hasMany(board_manage, { as: "board_manages", foreignKey: "group"});

  return {
    apply,
    board,
    board_manage,
    consultant,
    cur_cardinal,
    curriculum,
    faq,
    form,
    group,
    mainvideo,
    popup,
    recuruit,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
