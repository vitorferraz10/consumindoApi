import React from "react";
import "./App.css";

function App() {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(ev) {
    setLoading(true);
    const response = await (
      await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${ev.target.innerText}`
      )
    ).json();

    setDados(response);
    setLoading(false);
  }

  return (
    <>
      <button style={{ margin: "20px" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: "20px" }} onClick={handleClick}>
        Smartphone
      </button>
      <button onClick={handleClick}>Tablet</button>
      <div>
        <h1>{dados.nome ? dados.nome : { loading }}</h1>
        <p>R$ {dados.preco ? dados.preco : { loading }}</p>
        <img src={dados?.fotos[0].src} alt={dados.descricao}/>
      </div>
    </>
  );
}

export default App;
