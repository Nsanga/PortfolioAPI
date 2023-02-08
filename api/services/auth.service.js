const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
var {User} = require("../../config/database");
var {Service} = require("../../config/database")

const register = async (username, password) => {
  try {

    const userExists = await User.findOne({ where : {username : username} });
    if (userExists) {
      return { message: 'Cet utilisateur existe déjà' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const Users = await User.create({
      username: username,
      password: hashedPassword
    });

    const token = jwt.sign({ Users }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });

    return {mesage:'Utilisateur créé avec succès',token};
  } catch (error) {
    console.log(error);
  }
};

const login = async (username, password) => {
    try {
      const Users = await User.findOne({ where: { username: username } })
  
      if (!Users) {
        const message = `L'utilisateur demandé n'existe pas.`
        return message;
      }
      const isMatch = await bcrypt.compare(password, Users.password);
      if (!isMatch) {
        const message = 'Invalid credential'
        return message;
      }
  
      const token = jwt.sign({ id: Users.id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '24h'
      });
      return token;
  
    } catch (error) {
      console.log(error);
    }
  };

  const profile = async (id_User) => {
    try {
      const Users = await User.findOne({ where: { id_User: id_User }, include: [{ model: Service}]});
      console.log("datas Users",Users)
      return Users;
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async (body, id_User) => {
    try {
      const Users = await User.update(body, {where : {id_User:id_User}})
      return Users;
    } catch (error) {
      console.log(error);
    }
  };

  module.exports = { register, login, profile, updateProfile };
  