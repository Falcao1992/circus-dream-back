const express = require("express");
const app = express();
const cors = require('cors');

const { Artiste, Representation, Reservation } = require("./models");
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

/////////////////////////////////////////////////////////////////////////////

// GET ALL REPRESENTATIONS
app.get("/api/v1/representations", async (req, res) => {
  const allRepresentations = await Representation.findAll();
  res.status(200).send(allRepresentations);
});

// GET REPRESENTATIONS BY CITY
app.get("/api/v1/representations/:city", async (req, res) => {
  const {city} = req.params;

  const representationsByCity = await Representation.findAll(
    { where: { city } }
  );
  res.status(200).send(representationsByCity);
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
app.put("/api/v1/representations/:city", async (req, res) => {
  const { city } = req.params;
  const { ticket_price, date, hours, capacity, ticket_sold } = req.body;
  await Representation.update(
    { ticket_price, date, hours, capacity, ticket_sold },
    { where: { city} }
  );
  const updateRepresentation = await Representation.findOne({ where: { city } });
  res.status(200).send(updateRepresentation);
});

//////////////////////////////////////////////////////////////////////////////////:

// GET ALL RESERVATIONS
app.get("/api/v1/reservations", async (req, res) => {
  const allReservations = await Reservation.findAll();
  res.status(200).send(allReservations);
});

// CREATE RESERVATIONS
app.post("/api/v1/reservations", async (req, res) => {
  const { name, number_ticket, email, phone_number, city, date } = req.body;
  const reservation = await Reservation.create({
    name,
    number_ticket,
    email,
    phone_number,
    city,
    date
  });
  res.status(200).send({ reservation });
});

// DELETE RESERVATION
app.delete("/api/v1/reservations/:id", async (req, res) => {
  const { id } = req.params;
  await Reservation.destroy({ where: { id } });
  res.status(200).send(id);
});

// UPDATE RESERVATION
app.put("/api/v1/reservations/:id", async (req, res) => {
  const { id } = req.params;
  const { name, number_ticket, email, phone_number, city, date} = req.body;
  await Reservation.update(
    { name, number_ticket, email, phone_number, city, date },
    { where: { id } }
  );
  const updateReservation = await Reservation.findOne({ where: { id } });
  res.status(200).send(updateReservation);
});

// LISTEN PORT
app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.error(`Server is listening on ${port}`);
});
