const serviceService = require('../services/service.service')

const create = async (req, res) => {
  const service = await serviceService.create(req.file,req.body);
  console.log(service)
  try {
    if(service !== undefined)
    {
      res.json({message:`Le service ${req.body.nom} a été ajoutée`,data:service})
    }
    else{
      res.json({message:`Erreur interne lors de la creation`})
    }
  } catch (error) {
    console.log(error);
  }
};

const destroy = async (req, res) => {
  const service = await serviceService.destroy(req.params.id)
  try {
      if(service !== undefined)
      {
        res.json({message:`Tache ${req.body.name} supprimée`,data:service})
      }
      else{
        res.json({message:`Erreur interne lors de la suppression`})
      }
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
 const service = await serviceService.getAll();
 console.log(service);
  try {
    if(service !== undefined)
      {
        res.json({message:`Mes services`,data:service})
      }
      else{
        res.json({message:`Erreur interne lors de l'affichage'`})
      }
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (req, res) => {
  const service = await serviceService.getOne(req.params.id);
  console.log(service);
  try {
    if(service !== undefined)
      {
        res.json({message:"Tache récupérée",data:service})
      }
      else{
        res.json({message:`Erreur interne lors de l'affichage'`})
      }
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  const service = await serviceService.update(req.file, req.body, req.params.id);
  console.log(service)
  try {
    if(service !== undefined)
      {
        res.json({ message:`Le service ${req.body.nom} a bien été modifié.`, data: req.body })
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
