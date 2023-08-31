//importação do componente Colaborador e do CSS
import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

//declaração do componente Time
const Time = (props) => {
  //retorna a section com a estilização e as especificações caso o array de colaboradores for maior que 0
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor, "0.4") }} //com a função hexToRgba a seção pega a cor do card e adiciona ao background com 0.4 de opacidade
      >
        <input
          value={props.cor}
          type="color"
          className="inputDeCor"
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)} //ao mudar a cor chama uma função anônima que chama a propriedade de mudarCor, nele da target no value do cor do time e seleciona o id do time especifico
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>{" "}
        {/* nome do colaborador */}
        <div className="colaboradores">
          {props.colaboradores.map((colaborador, index) => {
            return (
              <Colaborador
                key={index}
                colaborador={colaborador}
                corDeFundo={props.cor}
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
              />
            ); //mapeia o array de colaboradores, cria o card e nele põe o nome, cargo, adiciona a imagem e muda a cor de fundo do card, além disso envia do app.js as props deletar e favoritar para colaborador
          })}
        </div>
      </section>
    )
  );
};

//exportação do componente
export default Time;
