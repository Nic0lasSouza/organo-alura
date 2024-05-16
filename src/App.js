import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/form';
function App() {
    const [colaboradores, setColaboradores] = useState([])

    const aoColaboradorAdicionado = (colaborador) =>{
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])
    }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador =>aoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
