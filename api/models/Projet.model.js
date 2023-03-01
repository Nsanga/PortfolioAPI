module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Projets', {
      id_Projet: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  };