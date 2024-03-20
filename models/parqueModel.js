const mongoose = require('mongoose');

const parqueSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  coordenadas: { type: String, required: true },
  ubicacionTexto: { type: String, required: true },
  fotos: { type: [String], required: true },
  area: { type: String, required: true },
  perimetro: { type: String, required: true },
  poligonoKML: { type: String, required: true },
  municipio: { type: String, required: true },
  captura: { type: String, required: true },
  equipamiento: { type: [String], default: [] } // Por ejemplo, un arreglo de equipamientos
});

const Parque = mongoose.model('Parque', parqueSchema);

module.exports = Parque;
