const {Sequelize, DataTypes} = require('sequelize')
const UserModel = require('../api/models/user.model')
const ServiceModel = require('../api/models/Service.model')
const ProjetModel = require('../api/models/Projet.model')
const ExperienceModel = require('../api/models/Experience.model')
const EducationModel = require('../api/models/Education.model')
const CompetenceModel = require('../api/models/Competence.model')
const RealisationModel = require('../api/models/Realisation.model')
const LogicielModel = require('../api/models/Logiciel.model')



const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT+1',
    },
  logging: false
})

const User = UserModel(sequelize, DataTypes)
const Service = ServiceModel(sequelize, DataTypes);
const Projet = ProjetModel(sequelize, DataTypes);
const Experience = ExperienceModel(sequelize, DataTypes)
const Education = EducationModel(sequelize, DataTypes)
const Competence = CompetenceModel(sequelize, DataTypes)
const Realisation = RealisationModel(sequelize, DataTypes)
const Logiciel = LogicielModel(sequelize, DataTypes)


Service.belongsTo(User, { foreignKey: 'id_User'});
User.hasMany(Service, {foreignKey: 'id_User'})

Projet.belongsTo(User, { foreignKey: 'id_User'});
User.hasMany(Projet, {foreignKey: 'id_User'})

Realisation.belongsTo(User, { foreignKey: 'id_User'});
User.hasMany(Realisation, {foreignKey: 'id_User'})


  
const initDb = () => {
  return sequelize.sync({force: false}).then(_ => { 
    console.log('La base de donnée a bien été initialisée.. !')
  })
}
  
module.exports = {initDb, User, Service, Projet, Education, Experience, Competence, Realisation, Logiciel};