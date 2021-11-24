import { useState, useEffect } from 'react'
import Form from './componentes/form'
import Paises from './componentes/paises'
import './assets/estilo/estilo.css'
function App() {

  const [datos, setDatos] = useState([]);
  const [filter, setFilter] = useState([]);
  const [nigthMode, setNigthMode] = useState([]);

  useEffect(() => {
    json();
  }, []);

  const json = async () => {
    let peticion = await fetch('https://restcountries.com/v2/all');
    let resultado = await peticion.json();
    setDatos(resultado);
    setFilter(resultado)
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const resultado = datos.filter(i => i.region === value);
    setFilter(resultado)
  }

  const handleNigthMode = () => {
    nigthMode.length === 0 ? setNigthMode(["noche", "noche2"]) : setNigthMode([]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.children[0].children[1].value;
    const mayuscula = value.charAt(0).toUpperCase()+value.slice(1);
    const resultado = datos.filter(i=>i.name === mayuscula)
    setFilter(resultado)
  }

  const handleBackClick = () =>{
    setFilter(datos)
  }

  const handleCountry = (elemento) =>{
    const resultado = datos.filter(i=>i.name === elemento);
    setFilter(resultado)
  }
  return (
    <div className="App">
      <header className={`${nigthMode && nigthMode[1]} ${nigthMode.length === 0 ? "boxShadow" : ""}`}>
        <h1>Where in the world</h1>
        <button onClick={handleNigthMode} className={nigthMode && nigthMode[1]}>
          {
            nigthMode.length===0?<><i className="far fa-moon"></i>Dark Mode</>:<><i className="far fa-sun"></i>Day Mode</>
          }
        </button>
      </header>
      <main className={nigthMode && nigthMode[0]}>
        {
          filter.length!==1 && <Form handleChange={handleChange} nigthMode={nigthMode} handleSubmit={handleSubmit}/>
        }
        <Paises datos={filter} nigthMode={nigthMode} handleBackClick={handleBackClick} handleCountry={handleCountry}/>
      </main>
    </div>
  );
}

export default App;
