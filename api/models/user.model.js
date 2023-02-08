module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
      id_User: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        required: true,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        required: true
      },
      nom: {
        type: DataTypes.STRING,
      },
      metier: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      desc_realisation: {
        type: DataTypes.STRING,
      },
      desc_realisation_image: {
        type: DataTypes.STRING,
      },
      about_image: {
        type: DataTypes.STRING,
      },
      about_description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  };