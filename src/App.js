import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  return (
    <div className="App">
      <Frase texto="teste"/>
      <HelloWorld />
      <SayMyName name="Gotho"/>
      <Pessoa nome="José" idade="26" profissao="Developer" foto="https://img.freepik.com/fotos-gratis/construtor-de-homem-carpinteiro-polimentos-placa-de-madeira-com-uma-lixadeira-de-orbita-aleatoria_23-2147944854.jpg?w=2000"/>
    </div>
  );
}

export default App;
