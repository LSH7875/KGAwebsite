const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curriculum', {
    cur_title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    main_image: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cur_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cur_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cur_info: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 1
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
    tableName: 'curriculum',
    timestamps: false
  });
};
