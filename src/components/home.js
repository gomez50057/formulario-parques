import React from 'react';
import './components.css'; // Asegúrate de tener un archivo CSS donde puedas definir estilos personalizados
const imgBasePath = "img/";

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(img/home.png)`, }}>
      <img src={`${imgBasePath}LogotipoBlanco.webp`} alt="Logo" className="logo" />
    </div>
  );
};

export default Home;

