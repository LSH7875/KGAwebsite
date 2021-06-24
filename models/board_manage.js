const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board_manage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'group',
        key: 'id'
      }
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
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    read_authority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    write_authority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    form: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    file: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    show_hide: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    curr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'board_manage',
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
      {
        name: "board_manage_ibfk_1",
        using: "BTREE",
        fields: [
          { name: "group" },
        ]
      },
    ]
  });
};
