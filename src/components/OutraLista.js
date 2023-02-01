export default function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista aleatória</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não temos itens na lista</p>
      )}
    </>
  );
}
