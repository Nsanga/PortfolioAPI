var {Projet} = require("../../config/database");
const { uploadFile } = require("./upload.service");

const create = async (file,params) => {
  try {
    const upload = await uploadFile(file, 'Projet')
    if(upload){
    const Projets = await Projet.create({...params, image:upload})
    return Projets;
  }else{
    return {message:`L'image n'a pas été importé`}
  }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id_Projet) => {
  try {
    const Projets = await Projet.destroy({where : {id_Projet:id_Projet}})
    return Projets;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  
  try {
    const Projets = await Projet.findAll(); 
    return Projets; 
  
  } catch (error) {
    console.log(error)
  }
};
 
const getOne = async (id_Projet) => {
  try {
    const Projets = await Projet.findByPk(id_Projet);
    return Projets;
  } catch (error) {
    console.log(error);
  }
};

const update = async (file, body, id_Projet) => {
  try {
    const upload = await uploadFile(file)
    console.log("ok::", upload)
    if(upload){
      const Projets = await Projet.update({...body, image:upload}, {where : {id_Projet:id_Projet}})
      return Projets;
    }
    else if(!file)
    {
      const Projets = await Projet.update(body, {where : {id_Projet:id_Projet}})
      return Projets;
    }
    else{
      return {message:`L'image n'a pas été importé`}
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  create,
  destroy,
  getAll,
  getOne,
  update,
};
