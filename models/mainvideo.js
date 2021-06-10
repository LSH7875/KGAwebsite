const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mainvideo', {
    main_image: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    video: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    show_hide: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mainvideo',
    timestamps: false
  });
};
