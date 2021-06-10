const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('popup', {
    show_hide: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    popup_width: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    popup_height: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    popup_left: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    popup_top: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    popup_type: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    image_file: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    link_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    hide_term: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'popup',
    timestamps: false
  });
};
