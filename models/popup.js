const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('popup', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    show_hide: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    popup_width: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    popup_height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    popup_left: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    popup_top: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    popup_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hide_term: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'popup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
