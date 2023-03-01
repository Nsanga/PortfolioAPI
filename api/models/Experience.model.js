module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Experiences', {
      id_Experience: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: true
      },
      poste: {
        type: DataTypes.STRING,
        allowNull: true
      },
      annee: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tache: {
        type: DataTypes.STRING,
        allowNull: true
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: true
    })
  };