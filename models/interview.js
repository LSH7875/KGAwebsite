const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0
    },
    contents: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    file :{
        type: DataTypes.STRING(1000),
        allowNull: true
    }
  }, {
    sequelize,
    tableName: 'interview',
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
