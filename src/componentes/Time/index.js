//importação do componente Colaborador e do CSS
import Colaborador from "../Colaborador";
import "./Time.css";

//declaração do componente Time
const Time = (props) => {
  //retorna a section com a estilização e as especificações caso o array de colaboradores for maior que 0
  return props.colaboradores.length > 0 && (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3> {/* nome do colaborador */}
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, posicao) => (
          <Colaborador
            nome={colaborador.nome}
            key={posicao}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={props.corPrimaria}
          /> //mapeia o array de colaboradores, cria o card e nele põe o nome, cargo, adiciona a imagem e muda a cor de fundo do card
        ))}
      </div>
    </section>
  )
};

//exportação do componente
export default Time;
