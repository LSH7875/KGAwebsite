const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employment_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employedDate: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    major: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    companyName: {
        type: DataTypes.STRING(1000),
        allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employment_status',
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
