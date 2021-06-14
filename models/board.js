const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board', {
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    board_number: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      allowNull: false,
    },
    main_image: {
      type: DataTypes.STRING(11),
      allowNull: true,
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
    },
    show_hide: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:0,
    },
    file1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file3: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'board',
    timestamps: false
  });
};