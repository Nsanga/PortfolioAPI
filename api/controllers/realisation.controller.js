const realisationService = require('../services/realisation.service')
const create = async (req, res) => {
  const realisation = await realisationService.create(req.file,req.body);
  console.log(realisation)
  try {
    if(realisation !== undefined)
    {
      res.json({message:`Les informations de ${req.body.nom} a été ajouté dans l'en-tete du CV`,data:realisation})

    }
    else{
      res.json({message:`Erreur interne lors de la creation`})

    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res) => {
  const realisation = await realisationService.destroy(req.params.id)
  try {
    if(realisation !== undefined)
    {
      res.json({message:`Tache ${req.body.name} supprimée`,data:realisation})

    }
    else{
      res.json({message:`Erreur interne lors de la suppression`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
 const realisation = await realisationService.getAll();
 console.log(realisation);
  try {
    if(realisation !== undefined)
    {
      res.json({message:`liste des rélisations`,data:realisation})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  const realisation = await realisationService.getOne(req.params.id);
  console.log(realisation);
  try {
    if(realisation !== undefined)
    {
      res.json({message:"Tache récupérée",data:realisation})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const realisation = await realisationService.update(req.file,req.body, req.params.id);
  console.log(realisation)
  try {
    if(realisation !== undefined)
    {
      res.json({ message:`Les informations de ${req.body.nom} ont bien été modifié dans l'en-tete du CV.`, data: req.body })

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
