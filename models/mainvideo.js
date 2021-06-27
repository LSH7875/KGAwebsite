const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mainvideo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    main_image: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    video: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    show_hide: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "block"
    }
  }, {
    sequelize,
    tableName: 'mainvideo',
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
