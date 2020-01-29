const express = require("express");
const app = express();

const { Artiste } = require("./models");
const port = 5000;

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

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

// LISTEN PORT
app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.error(`Server is listening on ${port}`);
});
