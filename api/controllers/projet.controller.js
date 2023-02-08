const projetService = require('../services/projet.service')
const create = async (req, res) => {
  const projet = await projetService.create(req.body);
  console.log(projet)
  try {
    if(projet !== undefined)
    {
      res.json({message:`Le projet ${req.body.nom} a été ajoutée`,data:projet})

    }
    else{
      res.json({message:`Erreur interne lors de la creation`})

    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res) => {
  const projet = await projetService.destroy(req.params.id)
  try {
    if(projet !== undefined)
    {
      res.json({message:`Tache ${req.body.name} supprimée`,data:projet})

    }
    else{
      res.json({message:`Erreur interne lors de la suppression`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
 const projet = await projetService.getAll();
 console.log(projet);
  try {
    if(projet !== undefined)
    {
      res.json({message:`Mes projets professionnels`,data:projet})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  const projet = await projetService.getOne(req.params.id);
  console.log(projet);
  try {
    if(projet !== undefined)
    {
      res.json({message:"Tache récupérée",data:projet})

    }
    else{
      res.json({message:`Erreur interne lors de l'affichage`})

    }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const projet = await projetService.update(req.body, req.params.id);
  console.log(projet)
  try {
    if(projet !== undefined)
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
