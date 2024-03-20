const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const parquesRoutes = require('./routes/parquesRoutes');

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware para analizar el cuerpo de la solicitud en formato JSON
app.use(bodyParser.json());

// Rutas de los parques
app.use(parquesRoutes);

// Escuchar en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
