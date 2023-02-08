const logicielService = require('../services/logiciel.service')
const create = async (req, res) => {
  const logiciel = await logicielService.create(req.body);
  console.log(logiciel)
  try {
    if(logiciel !== undefined)
    {
      res.json({message:`Dans la section logiciel et application du cv, le logiciel ${req.body.nom} a été ajoutée`,data:logiciel})

    }
    else{
      res.json({message:`Erreur interne lors de la creation`})

    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res) => {
  const logiciel = await logicielService.destroy(req.params.id)
  try {
    if(logiciel !== undefined)
    {
      res.json({message:`Tache ${req.body.name} supprimée`,data:logiciel})

    }
    else{
      res.json({message:`Erreur interne lors de la suppression`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
 const logiciel = await logicielService.getAll();
 console.log(logiciel);
  try {
    if(logiciel !== undefined)
    {
      res.json({message:`Liste des logiciels que je maitrise`,data:logiciel})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  const logiciel = await logicielService.getOne(req.params.id);
  console.log(logiciel);
  try {
    if(logiciel !== undefined)
    {
      res.json({message:"Tache récupérée",data:logiciel})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const logiciel = await logicielService.update(req.body, req.params.id);
  console.log(logiciel)
  try {
    if(logiciel !== undefined)
    {
      res.json({ message:`La tache ${req.body.name} a bien été modifié.`, data: req.body })

    }
    else{
      res.json({message:`Erreur interne lors de la modification`})

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
