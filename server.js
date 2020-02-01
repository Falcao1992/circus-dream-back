const express = require("express");
const app = express();
const cors = require('cors');

const { Artiste, Representation } = require("./models");
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
);

// GET ALL ARTISTES
app.get("/api/v1/artistes", async (req, res) => {
  const allArtistes = await Artiste.findAll();
  res.status(200).send(allArtistes);
});

// CREATE ARTISTES
app.post("/api/v1/artistes", async (req, res) => {
  const { name, author, country, description, picture } = req.body;
  const artiste = await Artiste.create({
    name,
    author,
    country,
    description,
    picture
  });
  res.status(200).send({ artiste });
});

// DELETE ARTISTE
app.delete("/api/v1/artistes/:id", async (req, res) => {
  const { id } = req.params;
  await Artiste.destroy({ where: { id } });
  res.status(200).send(id);
});

// UPDATE ARTISTE
app.put("/api/v1/artistes/:id", async (req, res) => {
  const { id } = req.params;
  const { name, author, country, description, picture } = req.body;
  await Artiste.update(
    { name, author, country, description, picture },
    { where: { id } }
  );
  const updateArtiste = await Artiste.findOne({ where: { id } });
  res.status(200).send(updateArtiste);
});

//////////////////////////

// GET ALL REPRESENTATIONS
app.get("/api/v1/representations", async (req, res) => {
  const allRepresentations = await Representation.findAll();
  res.status(200).send(allRepresentations);
});

// CREATE REPRESENATIONS
app.post("/api/v1/representations", async (req, res) => {
  const { city, ticket_price, date, hours, capacity, ticket_sold } = req.body;
  const representation = await Representation.create({
    city,
    ticket_price,
    date,
    hours,
    capacity,
    ticket_sold
  });
  res.status(200).send({ representation });
});

// DELETE REPRESENATIONS
app.delete("/api/v1/representations/:id", async (req, res) => {
  const { id } = req.params;
  await Representation.destroy({ where: { id } });
  res.status(200).send(id);
});

// UPDATE REPRESENATIONS
app.put("/api/v1/representations/:id", async (req, res) => {
  const { id } = req.params;
  const { city, ticket_price, date, hours, capacity, ticket_sold } = req.body;
  await Representation.update(
    { city, ticket_price, date, hours, capacity, ticket_sold },
    { where: { id } }
  );
  const updateRepresentation = await Representation.findOne({ where: { id } });
  res.status(200).send(updateRepresentation);
});

// LISTEN PORT
app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.error(`Server is listening on ${port}`);
});
