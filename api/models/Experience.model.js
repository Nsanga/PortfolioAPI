module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Experiences', {
      id_Experience: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      poste: {
        type: DataTypes.STRING,
        allowNull: false
      },
      annee: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tache: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  };