var {Logiciel} = require("../../config/database");

const create = async (params) => {
  try {
    const Logiciels = await Logiciel.create(params)
    return Logiciels;
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (id_Logiciel) => {
  try {
    const Logiciels = await Logiciel.destroy({where : {id_Logiciel:id_Logiciel}})
    return Logiciels;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  
  try {
    const Logiciels = await Logiciel.findAll(); 
    return Logiciels; 
  
  } catch (error) {
    console.log(error)
  }
};
 
const getOne = async (id_Logiciel) => {
  try {
    const Logiciels = await Logiciel.findByPk(id_Logiciel);
    return Logiciels; 
  } catch (error) {
    console.log(error);
  }
};

const update = async (body, id_Logiciel) => {
  try {
    const Logiciels = await Logiciel.update(body, {where : {id_Logiciel:id_Logiciel}})
    return Logiciels;
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
