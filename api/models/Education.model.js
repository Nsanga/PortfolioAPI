module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Educations', {
      id_Education: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false
      },
      diplome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      annee: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  };