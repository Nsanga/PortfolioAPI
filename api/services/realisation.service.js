var {Realisation} = require("../../config/database");
const { uploadFile } = require("./upload.service");

const create = async (file, params) => {
  try {
    const upload = await uploadFile(file, 'Realisation')
    if(upload){
    const Realisations = await Realisation.create({...params, image:upload})
    return Realisations;
  }else{
      return {message:`L'image n'a pas été importé`}
    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id_Realisation) => {
  try {
    const Realisations = await Realisation.destroy({where : {id_Realisation:id_Realisation}})
    return Realisations;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  
  try {
    const Realisations = await Realisation.findAll(); 
    return Realisations; 
  
  } catch (error) {
    console.log(error)
  }
};
 
const getOne = async (id_Realisation) => {
  try {
    const Realisations = await Realisation.findByPk(id_Realisation);
    return Realisations;
  } catch (error) {
    console.log(error);
  }
};

const update = async (file, body, id_Realisation) => {
  try {
    const upload = await uploadFile(file)
    console.log("ok::", upload)
    if(upload){
      const Realisations = await Realisation.update({...body, image:upload}, {where : {id_Realisation:id_Realisation}})
      return Realisations;
    }
    else if(!file)
    {
      const Realisations = await Realisation.update(body, {where : {id_Realisation:id_Realisation}},)
      return Realisations;
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
