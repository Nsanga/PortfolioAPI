var {Service} = require("../../config/database");

const create = async (params) => {
  try {
    const Services = await Service.create(params)
    return Services;
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

const update = async (body, id_Service) => {
  try {
    const Services = await Service.update(body, {where : {id_Service:id_Service}})
    return Services;
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
