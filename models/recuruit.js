const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('recuruit', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    '취업일자': {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('curdate')
    },
    '학과': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    '기수': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    '이름': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    '회사명': {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'recuruit',
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
