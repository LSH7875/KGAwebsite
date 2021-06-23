const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('consultant', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    professor_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    professor_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "'basic_profile.jpg'"
    }
  }, {
    sequelize,
    tableName: 'consultant',
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
