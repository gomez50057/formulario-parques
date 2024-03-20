
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './components.css'; // Importa el archivo CSS



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
  const [parques, setParques] = useState([0]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const addParque = () => {
    const newParques = [...parques, { id: parques.length + 1 }];
    setParques(newParques);
  };

  const removeParque = (id) => {
    const updatedParques = parques.filter(parque => parque.id !== id);
    setParques(updatedParques);
  };

  const downloadJSON = (data, filename) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className='container_form'>
      <h2>Formulario de Parque</h2>
      <Formik
        initialValues={{
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
        }}
        validationSchema={Yup.object().shape({
          
        })}
        onSubmit={(values, { setSubmitting }) => {
          // Envía los datos al backend aquí
          console.log(values);
          setSubmitting(false);
          setFormSubmitted(true); // Marcamos el formulario como enviado
          // Supongamos que aquí determinas si el envío fue exitoso
          const submissionSuccess = true; // O false si falló
          setFormSuccess(submissionSuccess);

          downloadJSON(values.parque, 'parques.json');
          setSubmitting(false);
        }}

      >

        {formik => (
          <Form className='parque-form-container'>
            {parques.map((parque, index) => (
              <div key={index}>
                <h3>Parque {index + 1}</h3>

                <div>
                  <label htmlFor={`parque-${index}`}>Nombre del Parque</label>
                  <Field type="text" id={`parque-${index}`} name={`parque[${index}].parque`} />
                  <ErrorMessage name={"parque"} component="div" />
                </div>

                <div>
                  <label htmlFor={`municipio-${index}`}>Municipio:</label>
                  <Field as="select" id={`municipio-${index}`} name={`parque[${index}].municipio`}>
                    <option value="">Seleccione un municipio</option>
                    {municipios.map((municipio, idx) => (
                      <option key={idx} value={municipio}>{municipio}</option>
                    ))}
                  </Field>
                  <ErrorMessage name={`municipio`} component="div" />
                </div>

                <div>
                  <label htmlFor={`coordenadas-${index}`}>Ubicación en Coordenadas</label>
                  <Field type="text" id={`coordenadas-${index}`} name={`parque[${index}].coordenadas`} />
                  <ErrorMessage name={"coordenadas"} component="div" />
                </div>

                <div>
                  <label htmlFor={`ubicacionTexto-${index}`}>Ubicación en Texto</label>
                  <Field type="text" id={`ubicacionTexto-${index}`} name={`parque[${index}].ubicacionTexto`} />
                  <ErrorMessage name={`ubicacionTexto`} component="div" />
                </div>

                <div>
                  <label htmlFor={`area-${index}`}>Medidas de Área en m2</label>
                  <Field type="text" id={`area-${index}`} name={`parque[${index}].area`} />
                  <ErrorMessage name={`area`} component="div" />
                </div>

                <div>
                  <label htmlFor={`perimetro-${index}`}>Medidas de Perímetro en m2</label>
                  <Field type="text" id={`perimetro-${index}`} name={`parque[${index}].perimetro`} />
                  <ErrorMessage name={`perimetro`} component="div" />
                </div>

                <div>
                  <label htmlFor={`captura-${index}`}>Quién Realiza la Captura</label>
                  <Field type="text" id={`captura-${index}`} name={`parque[${index}].captura`} />
                  <ErrorMessage name={`captura`} component="div" />
                </div>

                <div>
                  <label>Equipamiento que hay</label>
                  <div role="group" aria-labelledby={`equipamiento-label-${index}`}>
                    <label>
                      <Field type="checkbox" name={`parque[${index}].equipamiento`} value="bancas" /> Bancas
                    </label>
                    <label>
                      <Field type="checkbox" name={`parque[${index}].equipamiento`} value="mesas" /> Mesas
                    </label>
                    <label>
                      <Field type="checkbox" name={`parque[${index}].equipamiento`} value="juegos" /> Juegos Infantiles
                    </label>
                  </div>
                  <ErrorMessage name={`equipamiento`} component="div" />
                </div>

                <div>
                  <label htmlFor={`poligonoKML-${index}`}>Polígono del Parque (KML/KMZ)</label>
                  <Field type="file" id={`poligonoKML-${index}`} name={`parque[${index}].poligonoKML`} accept=".kml,.kmz" />
                  <ErrorMessage name={`poligonoKML`} component="div" />
                </div>

                <div>
                  <label htmlFor={`fotos-${index}`}>Fotos del Parque (solo archivos .jpg, .jpeg)</label>
                  <Field type="file" id={`fotos-${index}`} name={`parque[${index}].fotos`} accept=".jpg, .jpeg" multiple />
                  <ErrorMessage name={`fotos`} component="div" />
                </div>



                <button type="button" onClick={() => removeParque(parque.id)}>Eliminar Parque</button>
              </div>
            ))}
            <button type="button" onClick={addParque}>Agregar Parque</button>

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
