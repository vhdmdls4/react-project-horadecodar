import { useState } from "react";

export default function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function enviarEmail(e) {
    setUserEmail(email);
    e.preventDefault();
    console.log("Teste");
  }

  return (
    <div>
      <h2>Cadastre seu E-mail</h2>
      <form>
        <input
          type="email"
          placeholder="Digite o email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>
      </form>
    </div>
  );
}
