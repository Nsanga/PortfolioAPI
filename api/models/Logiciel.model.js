module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Logiciels', {
      id_Logiciel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  };