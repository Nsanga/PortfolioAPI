module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Educations', {
      id_Education: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: true
      },
      diplome: {
        type: DataTypes.STRING,
        allowNull: true
      },
      annee: {
        type: DataTypes.STRING,
        allowNull: true
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: true
    })
  };