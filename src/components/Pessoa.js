export default function Pessoa ({nome,idade,foto,profissao}) {
    return(
        <div>
            <img src={foto} alt={nome} height="150px"></img>
            <h2>Nome: {nome.toUpperCase()}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}