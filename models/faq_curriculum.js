const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faq_curriculum', {
    cur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'curriculum',
        key: 'id'
      }
    },
    faq_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'faq',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'faq_curriculum',
    timestamps: false,
    indexes: [
      {
        name: "join curid",
        using: "BTREE",
        fields: [
          { name: "cur_id" },
        ]
      },
      {
        name: "join faqid",
        using: "BTREE",
        fields: [
          { name: "faq_id" },
        ]
      },
    ]
  });
};
