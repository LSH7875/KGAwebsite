const Sequelize = require('sequelize');
const { group } = require('.');
module.exports = function(sequelize, DataTypes) {
  var group= sequelize.define('group', {
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
    timestamps: false,
    tableName: 'group'
  });
  group.associate = function (models){
    group.hasMany(models.board,{
      foreignKey: 'group',
      sourceKey:'id',
    })
  }
  return group;
};