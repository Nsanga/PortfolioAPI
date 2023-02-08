var {Competence} = require("../../config/database");

const create = async (params) => {
  try {
    const Competences = await Competence.create(params)
    return Competences;
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id_comptence) => {
  try {
    const Competences = await Competence.destroy({where : {id_comptence:id_comptence}})
    return Competences;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  
  try {
    const Competences = await Competence.findAll(); 
    return Competences; 
  
  } catch (error) {
    console.log(error)
  }
};
 
const getOne = async (id_comptence) => {
  try {
    const Competences = await Competence.findByPk(id_comptence);
    return Competences;
  } catch (error) {
    console.log(error);
  }
};

const update = async (body, id_comptence) => {
  try {
    const Competences = await Competence.update(body, {where : {id_comptence:id_comptence}})
    return Competences;
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
