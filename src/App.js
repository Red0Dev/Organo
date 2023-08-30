//importação do useState e dos componente Banner, Formulario, Time e Rodape
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

//declaração do componente App
function App() {
  //array com o nome e estilo dos times em formato de objeto
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82cffa",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#a6d157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#e06b69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#db6ebf",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#ffba05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#ff8a29",
    },
  ]);

  //array vazio onde vai ser listado os colaboradores
  const [colaboradores, setColaboradores] = useState([]);

  //retorna a página completa
  return (
    <div className="App">
      <Banner />

      <Formulario
        cadastrarTime={(novoTime) => {
          setTimes([...times, { ...novoTime, id: uuidv4() }]);
        }}
        times={times.map((time) => time.nome)} //mapeia e envia um novo array apenas com os nomes dos times para o formulário
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        } //recebe o nome, cargo, imagem, time e id enviados pelo formulário e adiciona ao fim do array de colaboradores
      />

      {times.map((time, index) => (
        <Time
          nome={time.nome}
          key={index}
          id={time.id}
          cor={time.cor}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )} //filtra o array de colaboradores e análisa onde ele ficará
          aoDeletar={(id) => {
            setColaboradores(
              colaboradores.filter((colaborador) => colaborador.id !== id)
            );
          }}
          mudarCor={(cor, id) => {
            setTimes(
              times.map((time) => {
                if (time.id === id) {
                  time.cor = cor;
                }
                return time;
              })
            );
          }}
          aoFavoritar={(id) => {
            setColaboradores(colaboradores.map((colaborador) => {
              if (colaborador.id === id)
                colaborador.favorito = !colaborador.favorito;
              return colaborador
            }));
          }}
        />
      ))}

      <Rodape />
    </div>
  );
}

//exportação do componente
export default App;
