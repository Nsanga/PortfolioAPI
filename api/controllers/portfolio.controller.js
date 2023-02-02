const todoService = require('../services/todo.service')
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

const getAll = async (req, res) => {
  todoService.getAll()
  try {
    res.json(todo)
    console.log(todo)
  } catch (error) {
    console.log(error);
  }
};

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
