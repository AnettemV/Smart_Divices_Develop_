import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/cards.js";

const app = express();

connectDB();

app.use(express.json());

app.post("/createCard", async (req, res) => {
  try {
    const card = await Card.create(req.body);
    console.log("Card creada:", card);
    res.status(201).json({ message: "Card created successfully", card });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating card" });
  }
});

app.get("/getAllCards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cards" });
  }
});

app.get("/getCard/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.status(200).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching card" });
  }
});


//esta es parcial
app.patch("/updateCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCard) {
      return res.status(404).send("Card not found");
    }
    res.status(200).json(updatedCard);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating card");
  }
});

//esta es total
app.put("/updateCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true, overwrite: true });
    if (!updatedCard) {
      return res.status(404).send("Card not found");
    }
    res.status(200).json(updatedCard);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating card");
  }
});


//borra
app.delete("/deleteCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) {
      return res.status(404).send("Card not found");
    }
    res.status(200).send("Card deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting card");
  }
});

app.get("/hola", (req, res) => {
  res.status(200).send("Hola Mundo desde Node.js");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World from Node.js");
});

app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});
