const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apply', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cur_title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: ""
    },
    motive: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    file: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'apply',
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
