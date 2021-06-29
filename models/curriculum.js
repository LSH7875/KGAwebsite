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
    detail_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cur_uri: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    main_image: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "KGApng.png"
    },
    character: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    syllabus: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    side_info1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    side_info2: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "'본 과정은 선발을 통해 이루어지는  훈련생 선발제 운영과정이며 훈련생에게 일체 수강료는 요구하지 않습니다.\/'"
    },
    period: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tuition: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    qualification: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: " 대학교 졸업 예정자(내년 9월 이전에 졸업 가능한 자)이상"
    },
    professor1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'consultant',
        key: 'id'
      }
    },
    professor2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'consultant',
        key: 'id'
      }
    },
    faq1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faq',
        key: 'id'
      }
    },
    faq2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faq',
        key: 'id'
      }
    },
    faq3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'faq',
        key: 'id'
      }
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
      {
        name: "FK_curriculum_consultant",
        using: "BTREE",
        fields: [
          { name: "professor1" },
        ]
      },
      {
        name: "FK_curriculum_consultant_2",
        using: "BTREE",
        fields: [
          { name: "professor2" },
        ]
      },
      {
        name: "FK_curriculum_faq",
        using: "BTREE",
        fields: [
          { name: "faq1" },
        ]
      },
      {
        name: "FK_curriculum_faq_2",
        using: "BTREE",
        fields: [
          { name: "faq2" },
        ]
      },
      {
        name: "FK_curriculum_faq_3",
        using: "BTREE",
        fields: [
          { name: "faq3" },
        ]
      },
    ]
  });
};
