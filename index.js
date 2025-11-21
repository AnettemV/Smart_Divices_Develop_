import express from "express";
import { connectDB } from "./db.js";
import { Card } from "./models/cards.js";
import cors from "cors"
import fs from "fs";
import csv from "csv-parser";
import { Student } from "./models/students.js";
const app = express();

connectDB();

app.use(express.json());
app.use(cors())

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


app.patch("/updateCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCard) return res.status(404).send("Card not found");
    res.status(200).json(updatedCard);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating card");
  }
});


app.put("/updateCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true, overwrite: true });
    if (!updatedCard) return res.status(404).send("Card not found");
    res.status(200).json(updatedCard);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating card");
  }
});

app.delete("/deleteCard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) return res.status(404).json("Card not found");
    res.status(200).json({ message: "Card deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting card");
  }
});

//DB Endpoints

// POST - Agregar estudiante a MongoDB
app.post("/students5", async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({ message: "Estudiante agregado a MongoDB", newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al guardar en MongoDB" });
  }
});

// GET - Obtener todos los estudiantes de MongoDB
app.get("/students5", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los estudiantes de MongoDB" });
  }
});



// Obtener un estudiante por su ID
app.get("/students5/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).json(student);
    a;
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching student");
  }
});

app.get("/hola", (req, res) => {
  res.status(200).send("Hola Mundo desde Node.js");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World from Node.js");
});


app.get("/endpoints", (req, res) => {
  const template = [
    { path: "https://smart-divices-develop.onrender.com/createCard", method: "POST", description: "Creates a new card in the database" },
    { path: "https://smart-divices-develop.onrender.com/getAllCards", method: "GET", description: "Retrieves all cards" },
    { path: "https://smart-divices-develop.onrender.com/getCard/:id", method: "GET", description: "Retrieves a card by ID" },
    { path: "https://smart-divices-develop.onrender.com/updateCard/:id", method: "PATCH", description: "Partially updates a card by ID" },
    { path: "https://smart-divices-develop.onrender.com/updateCard/:id", method: "PUT", description: "Fully updates a card by ID" },
    { path: "https://smart-divices-develop.onrender.com/deleteCard/:id", method: "DELETE", description: "Deletes a card by ID" },
    { path: "https://smart-divices-develop.onrender.com/students5", method: "GET", description: "Muestra la lista de estudiantes desde el archivo CSV" },
    { path: "https://smart-divices-develop.onrender.com/students5", method: "POST", description: "Agrega un nuevo estudiante al archivo CSV" },

  ]
  res.json(template);
});

// ==========================
// 📘 Endpoints CSV local
// ==========================



app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});

