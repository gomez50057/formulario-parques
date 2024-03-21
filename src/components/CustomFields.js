import React from 'react';
import { Field, ErrorMessage } from 'formik';



// Componente para el campo de texto
const TextField = ({ label, id, name }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <Field type="text" id={id} name={name} />
    <ErrorMessage name={name} component="div" />
  </div>
);

// Componente para el campo de selección
const SelectField = ({ label, id, name, options }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <Field as="select" id={id} name={name}>
      <option value="">Seleccione una opción</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" />
  </div>
);

// Componente para el campo de archivo
const FileField = ({ label, id, name, accept, multiple }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <Field type="file" id={id} name={name} accept={accept} multiple={multiple} />
    <ErrorMessage name={name} component="div" />
  </div>
);

// Componente para los checkboxes
const CheckboxGroup = ({ label, id, name, options }) => (
  <div>
    <label>{label}</label>
    <div role="group" aria-labelledby={id}>
      {options.map((option, index) => (
        <label key={index}>
          <Field type="checkbox" name={`${name}[${index}]`} value={option.value} /> {option.label}
        </label>
      ))}
    </div>
    <ErrorMessage name={name} component="div" />
  </div>
);

export { TextField, SelectField, FileField, CheckboxGroup };
