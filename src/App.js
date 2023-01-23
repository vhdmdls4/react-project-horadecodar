import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";
import Form from "./components/Form";
import Condicional from "./components/Condicional";

function App() {
  return (
    <div className="App">
      <Frase texto="teste" />
      <HelloWorld />
      <SayMyName name="Gotho" />
      <Pessoa
        nome="José"
        idade="26"
        profissao="Developer"
        foto="https://img.freepik.com/fotos-gratis/construtor-de-homem-carpinteiro-polimentos-placa-de-madeira-com-uma-lixadeira-de-orbita-aleatoria_23-2147944854.jpg?w=2000"
      />
      <List />
      <Evento />
      <Form />
      <h1>Renderiza condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
