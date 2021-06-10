const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('board', {
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    contents: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    main_image: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    hits: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    show_hide: {
      type: DataTypes.INTEGER,
      allowNull: false,
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