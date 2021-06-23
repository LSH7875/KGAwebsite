const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    board_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'board_manage',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nickname2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    show_hide: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    file1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cur_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    file3: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'board',
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
        name: "manager",
        using: "BTREE",
        fields: [
          { name: "board_number" },
        ]
      },
    ]
  });
};
