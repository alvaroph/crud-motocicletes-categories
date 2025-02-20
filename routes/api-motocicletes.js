import express from 'express';
import { Motocicleta, Categoria } from '../models/index.js';

const router = express.Router();

// Llista totes les motocicletes
router.get('/', async (req, res) => {
  try {
    const motos = await Motocicleta.findAll();
    res.json(motos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


export default router;
