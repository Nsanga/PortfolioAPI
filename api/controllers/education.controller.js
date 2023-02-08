const educationService = require('../services/education.service')
const create = async (req, res) => {
  const education = await educationService.create(req.body);
  console.log(education)
  try {
    if(education !== undefined)
    {
      res.json({message:`Dans la section Education du cv, ${req.body.nom} a été ajoutée`,data:education})

    }
    else{
      res.json({message:`Erreur interne lors de la creation`})

    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res) => {
  const education = await educationService.destroy(req.params.id)
  try {
    if(education !== undefined)
    {
      res.json({message:`Tache ${req.body.name} supprimée`,data:education})

    }
    else{
      res.json({message:`Erreur interne lors de la suppression`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
 const education = await educationService.getAll();
 console.log(education);
  try {
    if(education !== undefined)
    {
      res.json({message:`Toute mes formations professionnelle`,data:education})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  const education = await educationService.getOne(req.params.id);
  console.log(education);
  try {
    if(education !== undefined)
    {
      res.json({message:"Tache récupérée",data:education})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const education = await educationService.update(req.body, req.params.id);
  console.log(education)
  try {
    if(education !== undefined)
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
