import { useState } from "react";

export default function Evento() {
  const [txt, setTxt] = useState("teste");

  if (txt) {
    return (
      <div>
        <p>Clique para gerar o evento:</p>
        <button
          onClick={() => {
            console.log("deu");
            setTxt(parseInt(txt) + 1);
          }}
        >
          {txt}
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() => {
          setTxt("0");
        }}
      >
        Clique
      </button>
    );
  }
}
