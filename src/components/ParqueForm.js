
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, SelectField, FileField, CheckboxGroup } from './CustomFields';

import './components.css';
import MapComponent from './MapComponent';


const defaultCoordinates = [20.122456535910004, -98.7368359132531];


const municipios = [
  "Acatlán",
  "Acaxochitlán",
  "Actopan",
  "Agua Blanca de Iturbide",
  "Ajacuba",
  "Alfajayucan",
  "Almoloya",
  "Apan",
  "El Arenal",
  "Atitalaquia",
  "Atlapexco",
  "Atotonilco el Grande",
  "Atotonilco de Tula",
  "Calnali",
  "Cardonal",
  "Cuautepec de Hinojosa",
  "Chapantongo",
  "Chapulhuacán",
  "Chilcuautla",
  "Eloxochitlán",
  "Emiliano Zapata",
  "Epazoyucan",
  "Francisco I. Madero",
  "Huasca de Ocampo",
  "Huautla",
  "Huazalingo",
  "Huehuetla",
  "Huejutla de Reyes",
  "Huichapan",
  "Ixmiquilpan",
  "Jacala de Ledezma",
  "Jaltocán",
  "Juárez Hidalgo",
  "Lolotla",
  "Metepec",
  "San Agustín Metzquititlán",
  "Metztitlán",
  "Mineral del Chico",
  "Mineral del Monte",
  "La Misión",
  "Mixquiahuala de Juárez",
  "Molango de Escamilla",
  "Nicolás Flores",
  "Nopala de Villagrán",
  "Omitlán de Juárez",
  "San Felipe Orizatlán",
  "Pacula",
  "Pachuca de Soto",
  "Pisaflores",
  "Progreso de Obregón",
  "Mineral de la Reforma",
  "San Agustín Tlaxiaca",
  "San Bartolo Tutotepec",
  "San Salvador",
  "Santiago de Anaya",
  "Santiago Tulantepec de Lugo Guerrero",
  "Singuilucan",
  "Tasquillo",
  "Tecozautla",
  "Tenango de Doria",
  "Tepeapulco",
  "Tepehuacán de Guerrero",
  "Tepeji del Río de Ocampo",
  "Tepetitlán",
  "Tetepango",
  "Villa de Tezontepec",
  "Tezontepec de Aldama",
  "Tianguistengo",
  "Tizayuca",
  "Tlahuelilpan",
  "Tlahuiltepa",
  "Tlanalapa",
  "Tlanchinol",
  "Tlaxcoapan",
  "Tolcayuca",
  "Tula de Allende",
  "Tulancingo de Bravo",
  "Xochiatipan",
  "Xochicoatlán",
  "Yahualica",
  "Zacualtipán de Ángeles",
  "Zapotlán de Juárez",
  "Zempoala",
  "Zimapán"
];


const ParqueForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [coordinates, setCoordinates] = useState(defaultCoordinates);


  const initialValues = {
    parques: [{
      parque: '',
      coordenadas: '',
      ubicacionTexto: '',
      fotos: [],
      area: '',
      perimetro: '',
      poligonoKML: '',
      municipio: '',
      captura: '',
      equipamiento: []
    }]
  };

  const validationSchema = Yup.object().shape({
    parques: Yup.array().of(
      Yup.object().shape({
        parque: Yup.string().required('El nombre del parque es requerido'),
        coordenadas: Yup.string().required('Las coordenadas son requeridas'),
        ubicacionTexto: Yup.string().required('La ubicación en texto es requerida'),
        area: Yup.string().required('El área es requerida'),
        perimetro: Yup.string().required('El perímetro es requerido'),
        poligonoKML: Yup.string().required('El polígono del parque es requerido'),
        municipio: Yup.string().required('El municipio es requerido'),
        captura: Yup.string().required('Quién realiza la captura es requerido'),
      })
    )
  });

  const handleAddParque = (formik) => {
    formik.setFieldValue('parques', [...formik.values.parques, { ...initialValues.parques[0] }]);
  };

  const handleRemoveParque = (formik, index) => {
    const newParques = [...formik.values.parques];
    newParques.splice(index, 1);
    formik.setFieldValue('parques', newParques);
  };

  const onSubmitForm = async (values) => {
    try {
      const parquesData = values.parques.map(parque => ({
        nombre: parque.parque,
        coordenadas: parque.coordenadas,
        ubicacionTexto: parque.ubicacionTexto,
        fotos: parque.fotos,
        area: parque.area,
        perimetro: parque.perimetro,
        poligonoKML: parque.poligonoKML,
        municipio: parque.municipio,
        captura: parque.captura
      }));

      await axios.post('http://localhost:3000/parques', parquesData);
      console.log('Se envió la solicitud al servidor correctamente');
      setFormSuccess(true);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      setFormSuccess(false);
    }
  };

  return (
    <div className='container_form'>
      <h2>Formulario de Parque</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values);
          onSubmitForm(values); // Llama a la función para enviar los datos al backend          
          setSubmitting(false);
          setFormSubmitted(true); // Marcamos el formulario como enviado
        }}
      >
        {(formik) => (
          <Form className='parque-form-container'>
            {formik.values.parques.map((parque, index) => (
              <div key={index}>
                <h3>Parque {index + 1}</h3>
                <TextField label="Nombre del Parque" id={`parque-${index}`} name={`parques[${index}].parque`} />
                <SelectField label="Municipio" id={`municipio-${index}`} name={`parques[${index}].municipio`} options={municipios} />

                <TextField label="Ubicación en Coordenadas" id={`coordenadas-${index}`} name={`parques[${index}].coordenadas`} />
                <button type="button" onClick={() => {
                  const coords = formik.values.parques[index].coordenadas.split(',').map(parseFloat);
                  setCoordinates(coords);
                }}>
                  Actualizar Mapa
                </button>
                <MapComponent coordinates={coordinates} />
                <TextField label="Ubicación en Texto" id={`ubicacionTexto-${index}`} name={`parques[${index}].ubicacionTexto`} />
                <TextField label="Medidas de Área en m2" id={`area-${index}`} name={`parques[${index}].area`} />
                <TextField label="Medidas de Perímetro en m2" id={`perimetro-${index}`} name={`parques[${index}].perimetro`} />
                <TextField label="Quién Realiza la Captura" id={`captura-${index}`} name={`parques[${index}].captura`} />
                <CheckboxGroup label="Equipamiento que hay" id={`equipamiento-label-${index}`} name={`parques[${index}].equipamiento`} options={[
                  { value: 'bancas', label: 'Bancas' },
                  { value: 'mesas', label: 'Mesas' },
                  { value: 'juegos', label: 'Juegos Infantiles' }
                ]} />
                <FileField label="Polígono del Parque (KML/KMZ)" id={`poligonoKML-${index}`} name={`parques[${index}].poligonoKML`} accept=".kml,.kmz" />
                <FileField label="Fotos del Parque (solo archivos .jpg, .jpeg)" id={`fotos-${index}`} name={`parques[${index}].fotos`} accept=".jpg, .jpeg" multiple />
                <button type="button" onClick={() => handleRemoveParque(formik, index)}>Eliminar Parque</button>
              </div>
            ))}
            <button type="button" onClick={() => handleAddParque(formik)}>Agregar Parque</button>
            <button type="submit">Enviar</button>
            {formSubmitted && formSuccess && <div>¡El formulario se envió exitosamente!</div>}
            {formSubmitted && !formSuccess && <div>¡El formulario no se pudo enviar!</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ParqueForm;
