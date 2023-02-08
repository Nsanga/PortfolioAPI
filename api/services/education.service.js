var {Education} = require("../../config/database");

const create = async (params) => {
  try {
    const Educations = await Education.create(params)
    return Educations;
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id_Education) => {
  try {
    const Educations = await Education.destroy({where : {id_Education:id_Education}})
    return Educations;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  
  try {
    const Educations = await Education.findAll(); 
    return Educations; 
  
  } catch (error) {
    console.log(error)
  }
};
 
const getOne = async (id_Education) => {
  try {
    const Educations = await Education.findByPk(id_Education);
    return Educations;
  } catch (error) {
    console.log(error);
  }
};

const update = async (body, id_Education) => {
  try {
    const Educations = await Education.update(body, {where : {id_Education:id_Education}})
    return Educations;
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
