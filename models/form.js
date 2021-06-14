const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form', {
    form_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true,
    tableName: 'form'
  });
};