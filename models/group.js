const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group', {
    group_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    board_uri: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'group'
  });
};