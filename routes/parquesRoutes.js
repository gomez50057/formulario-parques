const express = require('express');
const router = express.Router();
const parqueController = require('../controllers/parquesController.js');

// Rutas para los parques
router.get('/parques', parqueController.getAllParques);
router.get('/parques/:id', parqueController.getParqueById);
router.post('/parques', parqueController.createParque);
router.put('/parques/:id', parqueController.updateParque);
router.delete('/parques/:id', parqueController.deleteParque);

module.exports = router;
