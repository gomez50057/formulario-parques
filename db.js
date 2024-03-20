const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/data_parques');
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Salir del proceso con un código de error
  }
};

module.exports = connectDB;
