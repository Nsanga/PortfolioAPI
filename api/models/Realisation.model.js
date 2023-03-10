module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Realisations', {
    id_Realisation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING
    },
    metier: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
};