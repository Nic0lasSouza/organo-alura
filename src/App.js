import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/form';
import Time from './components/Time';
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
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="UX e Desing"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;
