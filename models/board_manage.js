
const { DEFAULT_ENCODING } = require('crypto');
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board_manage', {
    group: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    board_uri: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    board_title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    preview: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue:0
    },
    read_authority: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      DefaultValue:-1
    },
    write_authority: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue:2
    },
    form: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue:1
    },
    file: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue:0
    },
    show_hide: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue:1
    }
  }, {
    sequelize,
    tableName: 'board_manage',
    timestamps: false
  });
};
