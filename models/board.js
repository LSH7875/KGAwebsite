const Sequelize = require('sequelize');
const { board } = require('.');
module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var board = sequelize.define('board', {
=======
  return sequelize.define('board', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
>>>>>>> d00e59cde4b4e6bfd753d581a8d9eb6931bc3b59
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
    main_image: {
      type: DataTypes.STRING(11),
      allowNull: true
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
    file2: {
      type: DataTypes.STRING(255),
      allowNull: true
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
<<<<<<< HEAD
  board.associtate = function(models){
    board.belongsTo(models.group,{
      foreignKey:"group",
      targetKey:'id'
    })
  }
  return board;
};
=======
};
>>>>>>> d00e59cde4b4e6bfd753d581a8d9eb6931bc3b59
