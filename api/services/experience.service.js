var {Experience} = require("../../config/database");

const create = async (params) => {
  try {
    const Experiences = await Experience.create(params)
    return Experiences;
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id_Experience) => {
  try {
    const Experiences = await Experience.destroy({where : {id_Experience:id_Experience}})
    return Experiences;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  
  try {
    const Experiences = await Experience.findAll(); 
    return Experiences; 
  
  } catch (error) {
    console.log(error)
  }
};
 
const getOne = async (id_Experience) => {
  try {
    const Experiences = await Experience.findByPk(id_Experience);
    return Experiences;
  } catch (error) {
    console.log(error);
  }
};

const update = async (body, id_Experience) => {
  try {
    const Experiences = await Experience.update(body, {where : {id_Experience:id_Experience}})
    return Experiences;
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
