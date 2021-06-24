const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curriculum', {
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
      allowNull: false
    },
    cur_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cur_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    character: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    consultant: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    syllabus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    faq: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cur_intro: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'curriculum',
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
