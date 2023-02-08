var {Projet} = require("../../config/database");

const create = async (params) => {
  try {
    const Projets = await Projet.create(params)
    return Projets;
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

const update = async (body, id_Projet) => {
  try {
    const Projets = await Projet.update(body, {where : {id_Projet:id_Projet}})
    return Projets;
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
