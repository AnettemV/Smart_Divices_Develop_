import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    calificacion: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    puntosExtras: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true, 
    collection: "students5", // nombre exacto de la colección
  }
);

export const Student = mongoose.model("Student", studentSchema);
