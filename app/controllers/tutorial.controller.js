import { Tutorial } from "../models/tutorial.model.js";

const create = (req, res) => {
  if (!req.body || !req.body.title) {
    res.status(404).json({ message: "cannot found" });
    return;
  }
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false,
  };
  console.log(tutorial);

  Tutorial.create(tutorial, (err, data) => {
    if (err) return res.status(500).json({ message: err.message });
    res.status(200).json(data);
  });
};

const findAll = (req, res) => {
  Tutorial.findAll((err, data) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(201).json(data);
  });
};

const getAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(201).json(data);
  });
};

const findById = (req, res) => {
  let userId = req.params.id;

  Tutorial.findById(userId, (err, data) => {
    if (err) {
      return res.status(404).json({ message: err.message });
    }
    res.status(201).json(data);
  });
};

const updateById = (req, res) => {
  if (!req.body || !req.body.title) {
    return res.status(404).json({ message: "not found" });
  }
  let userId = req.body.id;
  let newTutorial = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    published: req.body.published,
  };
  Tutorial.updateById(userId, newTutorial, (err, data) => {
    if (err) {
      return res.status(500).json(err.message);
    }
    res.status(201).json(data);
  });
};

const deleteById = (req, res) => {
  console.log(req.params);
  let userID = req.params.id;
  userID = Number(userID);
  console.log(userID);

  Tutorial.removeById(userID, (err, data) => {
    if (err) {
      res.status(404).json({ message: err.message });
    }
    res.status(201).json(data);
  });
};

const removeAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err) {
      return res.status(404).json({ message: err.message });
    }
    console.log(data);

    res.status(201).json(data);
  });
};

export {
  create,
  findAll,
  getAllPublished,
  findById,
  updateById,
  deleteById,
  removeAll,
};
