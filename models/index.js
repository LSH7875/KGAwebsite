'use strict';
//npx sequelize-auto -o "./models" -d teampro -h localhost -u root -p 3306 -x root -e mysql

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
// const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const initModels = require('./init-models');


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = initModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = models.user;
db.board = models.board;
db.board_manage = models.board_manage;
db.curriculum = models.curriculum;
db.mainvideo = models.mainvideo;
db.popup = models.popup;
db.group = models.group; 
db.form = models.form;

module.exports = db;
