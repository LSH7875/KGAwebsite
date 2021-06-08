const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_pw: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_day: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    user_grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    user_sex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_birth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ad_agree: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false
  });
};
