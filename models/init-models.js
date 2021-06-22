var DataTypes = require("sequelize").DataTypes;
var _answer = require("./answer");
var _board = require("./board");
var _board_manage = require("./board_manage");
var _curriculum = require("./curriculum");
var _faq = require("./faq");
var _faq_curriculum = require("./faq_curriculum");
var _form = require("./form");
var _group = require("./group");
var _mainvideo = require("./mainvideo");
var _popup = require("./popup");
var _recuruit = require("./recuruit");
var _user = require("./user");
var _employment_status = require("./employment_status")
var _interview = require("./interview")

function initModels(sequelize) {
  var answer = _answer(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes);
  var board_manage = _board_manage(sequelize, DataTypes);
  var curriculum = _curriculum(sequelize, DataTypes);
  var faq = _faq(sequelize, DataTypes);
  var faq_curriculum = _faq_curriculum(sequelize, DataTypes);
  var form = _form(sequelize, DataTypes);
  var group = _group(sequelize, DataTypes);
  var mainvideo = _mainvideo(sequelize, DataTypes);
  var popup = _popup(sequelize, DataTypes);
  var recuruit = _recuruit(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var employment_status = _employment_status(sequelize, DataTypes);
  var interview = _interview(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  board.belongsTo(board_manage, { as: "board_number_board_manage", foreignKey: "board_number"});
  board_manage.hasMany(board, { as: "boards", foreignKey: "board_number"});
  faq_curriculum.belongsTo(curriculum, { as: "cur", foreignKey: "cur_id"});
  curriculum.hasMany(faq_curriculum, { as: "faq_curriculums", foreignKey: "cur_id"});
  faq_curriculum.belongsTo(faq, { as: "faq", foreignKey: "faq_id"});
  faq.hasMany(faq_curriculum, { as: "faq_curriculums", foreignKey: "faq_id"});
  board_manage.belongsTo(group, { as: "group_group", foreignKey: "group"});
  group.hasMany(board_manage, { as: "board_manages", foreignKey: "group"});

  return {
    answer,
    board,
    board_manage,
    curriculum,
    faq,
    faq_curriculum,
    form,
    group,
    mainvideo,
    popup,
    recuruit,
    user,
    employment_status,
    interview
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
