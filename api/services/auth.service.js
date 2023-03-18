const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken')
var { User, Projet, Realisation } = require("../../config/database");
var { Service } = require("../../config/database");
const { uploadFiles } = require('./upload.service');

const register = async (username, password) => {
    try {

        if (!username || !password) {
            return ({ message: 'Les champs username et password sont requis' });
        }

        const userExists = await User.findOne({ where: { username: username } });
        if (userExists) {
            return { message: 'Cet utilisateur existe déjà' };
        }

        if (!validator.isLength(password, { min: 6, max: 8 })) {
            return { message: 'Le password contient au moins 6 caractères.' };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const Users = await User.create({
            username: username,
            password: hashedPassword
        });

        const status = true;

        if (status === true) {

            const token = jwt.sign({ Users }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });


            return { message: 'Utilisateur créé avec succès', status, token };
        }

    } catch (error) {
        console.log(error);
    }
};

const login = async (username, password) => {
    try {
        const status = true

        if (!username || !password) {
            const status = false
            return ({ message: 'Les champs username et password sont requis', status });
        }
        const Users = await User.findOne({ where: { username: username } })

        if (!Users) {
            const status = false
            const message = `L'utilisateur demandé n'existe pas.`
            return { message, status };
        }
        const isMatch = await bcrypt.compare(password, Users.password);
        if (!isMatch) {
            const status = false
            const message = 'Invalid credential'
            return { message, status };
        }


        if (status) {
            const token = jwt.sign({ Users }, process.env.ACCESS_TOKEN_SECRET, {
                // expiresIn: '24h'

            });
            return { message: 'Connexion réussie', status, token };
        }


    } catch (error) {
        console.log(error);
    }
};

const profile = async ( id_User) => {
    try {
        const Users = await User.findOne({ where: { id_User: id_User }, include: [{ model: Service }, { model: Projet }, { model: Realisation }] });
        return Users;
    } catch (error) {
        console.log(error);
    }
};

const updateProfile = async (files, body, id_User) => {
    try {
        const upload = await uploadFiles(files, 'Profile')
        console.log("okkk::",upload)
        if(upload){
            const updatedFields = {
                image: upload[0],
                about_image: upload[1],
                desc_realisation_image: upload[2],
              };
            const [ updated ] = await User.update({...body, ...updatedFields}, {where: { id_User: id_User}});
            return updated;
        }
        else if(!files)
        {
            const [ updated ] = await User.update(body, {where: { id_User: id_User}});
            return updated;
        }
        else{
            return {message:`L'image n'a pas été importé`}
        }
        
    } catch (error) {
        console.log(error);
    }
};

module.exports = { register, login, profile, updateProfile };
