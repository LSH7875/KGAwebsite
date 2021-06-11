const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_pw: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    user_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    user_phone: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: ""
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
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    ad_agree: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    social: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'local'
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false
  });
};
