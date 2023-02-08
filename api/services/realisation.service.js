var {Realisation} = require("../../config/database");

const create = async (params) => {
  try {
    const Realisations = await Realisation.create(params)
    return Realisations;
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

const update = async (body, id_Realisation) => {
  try {
    const Realisations = await Realisation.update(body, {where : {id_Realisation:id_Realisation}})
    return Realisations;
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
