const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board_manage', {
    group: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    board_title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    preview: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    read_authority: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    write_authority: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    file: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    show_hide: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'board_manage',
    timestamps: false
  });
};
