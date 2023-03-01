module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Comptences', {
      id_comptence: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  };