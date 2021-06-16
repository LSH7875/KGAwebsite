const Sequelize = require('sequelize');
const { group } = require('.');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    group_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    board_uri: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
<<<<<<< HEAD
    timestamps: false,
    tableName: 'group'
  });
  group.associate = function (models){
    group.hasMany(models.board,{
      foreignKey: 'group',
      sourceKey:'id',
    })
  }
  return group;
};
=======
    tableName: 'group',
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
>>>>>>> d00e59cde4b4e6bfd753d581a8d9eb6931bc3b59
