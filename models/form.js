const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    form_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
<<<<<<< HEAD
    timestamps: false,
    tableName: 'form'
=======
    tableName: 'form',
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
>>>>>>> d00e59cde4b4e6bfd753d581a8d9eb6931bc3b59
  });
};
