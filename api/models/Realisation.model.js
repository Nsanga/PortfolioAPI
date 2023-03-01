module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Realisations', {
    id_Realisation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
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