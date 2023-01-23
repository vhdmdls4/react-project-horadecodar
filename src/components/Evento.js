import { useState } from "react";
import Button from "./Button";

export default function Evento() {
  function meuEvento(){
    console.log("Primér event")
  }

  return (
      <div>
        <p>Clique para gerar o evento:</p>
        <Button event={meuEvento} text="Clique aqui" />
      </div>
    );
}