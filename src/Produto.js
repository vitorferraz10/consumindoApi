import React from "react";

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;

  return (
    <div>
      <h1>{dados.nome ? dados.nome : 'Loading...'}</h1>
      <p>R$ {dados.preco ? dados.preco : 'Loading...'}</p>
    </div>
  );
};

export default Produto;
