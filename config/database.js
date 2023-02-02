const {Sequelize, DataTypes} = require('sequelize')
const TodoModel = require('../api/models/Todo.model')

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT+1',
    },
  logging: false
})

const Todo = TodoModel(sequelize, DataTypes);
  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    console.log('La base de donnée a bien été initialisée.. !')
  })
}
  
module.exports = {initDb,Todo};