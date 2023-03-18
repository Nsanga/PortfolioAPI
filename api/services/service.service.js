var {Service} = require("../../config/database");
const { uploadFile } = require("./upload.service");

const create = async (file,params) => {
  try {
    const upload = await uploadFile(file, 'Service')
    if(upload){
      const Services = await Service.create({...params, image:upload})
      return Services;
    }else{
      return {message:`L'image n'a pas été importé`}
    }
    
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id_Service) => {
  try {
    const Services = await Service.destroy({where : {id_Service:id_Service}})
    return Services;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  
  try {
    const Services = await Service.findAll(); 
    return Services; 
  
  } catch (error) {
    console.log(error)
  }
};
 
const getOne = async (id_Service) => {
  try {
    const Services = await Service.findByPk(id_Service);
    return Services;
  } catch (error) {
    console.log(error);
  }
};

const update = async (file, body, id_Service) => {
  try {
    const upload = await uploadFile(file)
    console.log("ok::", upload)
    if(upload){
    const Services = await Service.update({...body, image:upload}, {where : {id_Service:id_Service}})
    return Services;
  }
  else if(!file)
  {
    const Services = await Service.update(body, {where : {id_Service:id_Service}})
    return Services;
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
