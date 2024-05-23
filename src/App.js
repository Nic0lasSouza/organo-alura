import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/form';
import Time from './components/Time';
import Footer from './components/footer/index.js';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome:'Ux e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]
    const [colaboradores, setColaboradores] = useState([])

    const aoColaboradorAdicionado = (colaborador) =>{
      setColaboradores([...colaboradores, colaborador])
    }
    
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador =>aoColaboradorAdicionado(colaborador)}/>
      <div>
        {times.map(time => (
          <div>
              <Time
              key={time.nome}
              nome={time.nome}
              corPrimaria={time.corPrimaria}
              corSecundaria={time.corSecundaria}
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
              />
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
  
}

export default App;
