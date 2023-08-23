import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
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

  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />

      {times.map((time, posicao) => (
        <Time
          nome={time.nome}
          key={posicao}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
        />
      ))}
    </div>
  );
}

export default App;
