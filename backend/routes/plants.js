const express = require("express");
const router = express.Router();

// our mock data
let plants = [
  { id: 1, commonName: "Monstera Deliciosa", price: 45 },
  { id: 2, commonName: "Snake Plant", price: 25 },
  { id: 3, commonName: "Basil", price: 5 },
  { id: 4, commonName: "Fiddle Leaf Fig", price: 120 },
  { id: 5, commonName: "Spider Plant", price: 15 },
];

//routes

// GET all plants
router.get("/", (req, res) => {
  res.json(plants);
});

// add a new plant - POST verb
router.post("/", (req, res) => {
  const newPlant = {
    // in a real database, IDs are generated automatically.
    // here we just grab a random number or increment length.
    id: plants.length + Math.floor(Math.random() * 1000),
    commonName: req.body.commonName,
    price: req.body.price,
  };
  // we create a completely NEW array.
  // [...plants] copies all existing items.
  // newPlant is added at the end.
  plants = [...plants, newPlant];

  res.status(201).json(newPlant); //status success and data was sent
});

// delete a plant - DELETE verb
router.delete("/:id", (req, res) => {
  const plantId = parseInt(req.params.id);

  // .filter() naturally returns a NEW array, so it already fits the immutable pattern
  plants = plants.filter((p) => p.id !== plantId);

  res.json({ message: `Plant with ID ${plantId} deleted.` });
});

// when another file tries to require() this file, the router object is given to that file
module.exports = router;
