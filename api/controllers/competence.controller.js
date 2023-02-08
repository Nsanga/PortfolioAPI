const competenceService = require('../services/competence.service')
const create = async (req, res) => {
  const competence = await competenceService.create(req.body);
  console.log(competence)
  try {
    if(competence !== undefined)
    {
      res.json({message:`competence ${req.body.nom} ajoutée`,data:competence})

    }
    else{
      res.json({message:`Erreur interne lors de la creation`})

    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res) => {
  const competence = await competenceService.destroy(req.params.id)
  try {
    if(competence !== undefined)
    {
      res.json({message:`Tache ${req.body.name} supprimée`,data:competence})

    }
    else{
      res.json({message:`Erreur interne lors de la suppression`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
 const competence = await competenceService.getAll();
 console.log(competence);
  try {
    if(competence !== undefined)
    {
      res.json({message:`Toute les compétences`,data:competence})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  const competence = await competenceService.getOne(req.params.id);
  console.log(competence);
  try {
    if(competence !== undefined)
    {
      res.json({message:"Tache récupérée",data:competence})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const competence = await competenceService.update(req.body, req.params.id);
  console.log(competence)
  try {
    if(competence !== undefined)
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
