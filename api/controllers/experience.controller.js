const experienceService = require('../services/experience.service')
const create = async (req, res) => {
  const experience = await experienceService.create(req.body);
  console.log(experience)
  try {
    if(experience !== undefined)
    {
      res.json({message:`Dans la section experience du cv, ${req.body.nom} a été ajoutée`,data:experience})

    }
    else{
      res.json({message:`Erreur interne lors de la creation`})

    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res) => {
  const experience = await experienceService.destroy(req.params.id)
  try {
    if(experience !== undefined)
    {
      res.json({message:`Tache ${req.body.name} supprimée`,data:experience})

    }
    else{
      res.json({message:`Erreur interne lors de la suppression`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
 const experience = await experienceService.getAll();
 console.log(experience);
  try {
    if(experience !== undefined)
    {
      res.json({message:`Toutes mes expériences professionnelles`,data:experience})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  const experience = await experienceService.getOne(req.params.id);
  console.log(experience);
  try {
    if(experience !== undefined)
    {
      res.json({message:"Tache récupérée",data:experience})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const experience = await experienceService.update(req.body, req.params.id);
  console.log(experience)
  try {
    if(experience !== undefined)
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
