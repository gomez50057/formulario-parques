// const Parque = require('../models/parqueModel.js');

// exports.getAllParques = async (req, res) => {
//   try {
//     const parques = await Parque.find();
//     res.json(parques);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ mensaje: 'Hubo un error al obtener los parques' });
//   }
// };

// exports.getParqueById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const parque = await Parque.findById(id);
//     if (!parque) {
//       return res.status(404).json({ mensaje: 'Parque no encontrado' });
//     }
//     res.json(parque);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ mensaje: 'Hubo un error al obtener el parque' });
//   }
// };

// exports.createParque = async (req, res) => {
//   try {
//     const { nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura } = req.body;
//     const nuevoParque = new Parque({ nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura });
//     await nuevoParque.save();
//     console.log('Parque creado satisfactoriamente:', nuevoParque);
//     res.status(201).end(); // Envía una respuesta 201 (Created) al cliente
//   } catch (error) {
//     console.error('Hubo un error al crear el parque:', error);
//     res.status(500).end(); // Envía una respuesta 500 (Internal Server Error) al cliente
//   }
// };


// exports.updateParque = async (req, res) => {
//   const { id } = req.params;
//   const { nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura } = req.body;
//   try {
//     const parqueActualizado = await Parque.findByIdAndUpdate(id, { nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura }, { new: true });
//     if (!parqueActualizado) {
//       return res.status(404).json({ mensaje: 'Parque no encontrado' });
//     }
//     res.json({ mensaje: 'Parque actualizado satisfactoriamente', parque: parqueActualizado });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ mensaje: 'Hubo un error al actualizar el parque' });
//   }
// };

// exports.deleteParque = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const parqueEliminado = await Parque.findByIdAndDelete(id);
//     if (!parqueEliminado) {
//       return res.status(404).json({ mensaje: 'Parque no encontrado' });
//     }
//     res.json({ mensaje: 'Parque eliminado satisfactoriamente', parque: parqueEliminado });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ mensaje: 'Hubo un error al eliminar el parque' });
//   }
// };


const Parque = require('../models/parqueModel.js');

exports.getAllParques = async (req, res) => {
  try {
    const parques = await Parque.find();
    res.json(parques);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener los parques' });
  }
};

exports.getParqueById = async (req, res) => {
  const { id } = req.params;
  try {
    const parque = await Parque.findById(id);
    if (!parque) {
      return res.status(404).json({ mensaje: 'Parque no encontrado' });
    }
    res.json(parque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al obtener el parque' });
  }
};

exports.createParque = async (req, res) => {
  const { nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura } = req.body;
  try {
    const nuevoParque = new Parque({ nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura });
    await nuevoParque.save();
    res.json({ mensaje: 'Parque creado satisfactoriamente', parque: nuevoParque });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al crear el parque' });
  }
};

exports.updateParque = async (req, res) => {
  const { id } = req.params;
  const { nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura } = req.body;
  try {
    const parqueActualizado = await Parque.findByIdAndUpdate(id, { nombre, coordenadas, ubicacionTexto, fotos, area, perimetro, poligonoKML, municipio, captura }, { new: true });
    if (!parqueActualizado) {
      return res.status(404).json({ mensaje: 'Parque no encontrado' });
    }
    res.json({ mensaje: 'Parque actualizado satisfactoriamente', parque: parqueActualizado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al actualizar el parque' });
  }
};

exports.deleteParque = async (req, res) => {
  const { id } = req.params;
  try {
    const parqueEliminado = await Parque.findByIdAndDelete(id);
    if (!parqueEliminado) {
      return res.status(404).json({ mensaje: 'Parque no encontrado' });
    }
    res.json({ mensaje: 'Parque eliminado satisfactoriamente', parque: parqueEliminado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error al eliminar el parque' });
  }
};

