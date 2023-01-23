import { useState } from "react";

export default function Form() {
  function alertUserRegistered(e) {
    e.preventDefault();
    console.log(`Usuário ${name} foi criado com senha ${password}`);
  }

  const [name, setName] = useState("Teste");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={alertUserRegistered}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome aqui"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Digite sua senha aqui"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
