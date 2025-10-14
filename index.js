import express from "express";
import { connectDB } from "./db.js";
import {Card} from "./models/cards.js";
const app = express();
connectDB();

app.use(express.json());

app.post("/createCard", async (req, res) => {
    try{
        const card = await Card.create(req.body);
        console.log(card);
        res.status(201).send("Card created successfully");
    } catch(error ) {
        console.error(error);
    }
});

app.get("/getAllCards", async (req, res) => {
    try{
        const card = await Card.find();
        res.status(200).json(card).send("Card created successfully");
    } catch(error ) {
        console.error(error);
    }
});

app.get("/getCard/:id", async (req, res) => {
    try{
        const card = await Card.find();
        res.status(200).json(card).send("Card created successfully");
    } catch(error ) {
        console.error(error);
    }
});

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
//App representa al servidor

app.post("/send", (req, res) => {
  const { user, email, password } = req.body;
  //por default esta es una destructuracion JSON
  //{"user": "unUsuario"}
  //"email" "un email"
  console.log("Datos recibidos: " + user + "" + email);
  res.status(200).send("Data recived succesfuly");
});

app.post("/send", (req, res) => {
    const { user, email } = req.body;
    console.log("Datos recibidos:" + user)
})








app.get("/hola", (req, res) => {
    res.status(200).send("Hola Mundo desde Node.js");
});

app.get("/hello", (req, res) => {
    res.status(200).send("Hello World from Node.js");
});

app.listen(3000, () => {
    console.log("Servidor Ejecutandose en http://localhost:3000");
});

