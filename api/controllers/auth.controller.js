const {register, login, profile, updateProfile} = require('../services/auth.service')

const Register = async (req, res) => {
  const user = await register(req.body.username, req.body.password)
    console.log(user)
    try {
        if(user !== undefined)
        {
          res.json({data:user})
    
        }
        else{
          res.json({message:`Erreur interne lors de la l'inscription`})
    
        }
      } catch (error) {
        console.log(error);
      }
};

const Login = async (req, res) => {
    const user = await login(req.body.username, req.body.password)
    console.log(user)
    try {
        if(user !== undefined)
        {
          res.json({message:user.message, status:user.status ,token:user.token})
    
        }
        else{
          res.json({message:`Erreur interne lors de la connexion`})
    
        }
      } catch (error) {
        console.log(error);
      }
    };

    const Profile = async (req, res) => {
        console.log("utilisateur tel : ",req.user)
        const profiles = await profile(req.user.Users.id_User);
        console.log(profiles);
        try {
          if(profiles !== undefined)
          {
            res.json({message:`Liste des propriétés associée au profile de ${req.user.Users.username}`,data:profiles})
      
          }
          else{
            res.json({message:`Erreur interne lors de l'affichage`})
      
          }
        } catch (error) {
          console.log(error);
        }
      };

    const updateProfiles = async (req, res) => {
        const profiles = await updateProfile(req.body, req.params.id_User); 
        console.log(profiles)
        try {
          if(profiles !== undefined)
          {
            res.json({ message:`Modification effectuée.`, data: req.body })
      
          }
          else{
            res.json({message:`Erreur interne lors de la modification`})
      
          }
        } catch (error) {
          console.log(error);
        }
      };

module.exports = {Register, Login, Profile, updateProfiles};