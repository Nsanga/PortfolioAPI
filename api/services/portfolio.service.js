var {Todo} = require("../../config/database");

const create = async (req, res) => {
  try {
  
  } catch (error) {
    console.log(error.message);
  }
};

const destroy = async (req, res) => {
  try {
  
  } catch (error) {
    console.log(error.message);
  }
};

const getAll = async () => {
  
  try {
    const Todoss = await Todo.findAll(); 
    console.log(Todoss)
  
  } catch (error) {
    console.log(error)
    console.log(`La liste des taches n'a pas pu etre recupérée. Réessayer dans un instant.`);
  }
};
getAll();
 
const getOne = async (req, res) => {
  try {
  
  } catch (error) {
    console.log(error.message);
  }
};

const update = async (req, res) => {
  try {
  
  } catch (error) {
    console.log(error.message);
  }
};


module.exports = {
  create,
  destroy,
  getAll,
  getOne,
  update,
};
