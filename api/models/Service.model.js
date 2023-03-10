module.exports = (sequelize, DataTypes) => {
    const Service= sequelize.define('Services', {
      id_Service: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING,
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
    return Service;
  };