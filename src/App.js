//importação do useState e dos componente Banner, Formulario, Time e Rodape
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

//declaração do componente App
function App() {
  //array com o nome e estilo dos times em formato de objeto
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      nome: "Devops",
      corPrimaria: "#e06b69",
      corSecundaria: "#f7de78",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  //array vazio onde vai ser listado os colaboradores
  const [colaboradores, setColaboradores] = useState([]);

  //retorna a página completa
  return (
    <div className="App">
      <Banner />

      <Formulario
        times={times.map((time) => time.nome)} //mapeia e envia um novo array apenas com os nomes dos times para o formulário
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        } //recebe o nome, cargo, imagem e time enviados pelo formulário e adiciona ao fim do array de colaboradores
      />

      {times.map((time, index) => (
        <Time
          nome={time.nome}
          key={index}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time == time.nome
          )} //filtra o array de colaboradores e análisa onde ele ficará
        />
      ))}

      <Rodape />
    </div>
  );
}

//exportação do componente
export default App;
