
require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_LOCALHOST,
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


const Teams = sequelize.define('Teams', {
  
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  team: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  }
});





const initDatabase = async () => {
  try {

    await sequelize.authenticate();
    console.log('Conexão com o banco de dados bem-sucedida.');
    await sequelize.sync();
    console.log('Modelos sincronizados com o banco de dados.');
  } catch (error) {
    console.error('Erro ao conectar e sincronizar com banco de dados:', error);
  }
};

module.exports = { Teams, initDatabase };

/*

docker run --name desafio-triagil-api -e POSTGRES_PASSWORD=pg12345 \
-e POSTGRES_USER=root -e POSTGRES_DB=pgTriagil -p 5432:5432 -d postgres
*/