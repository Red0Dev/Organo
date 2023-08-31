//importação do useState, do componente Botao, Campo e ListaSuspensa e do CSS
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

//declaração do componente Formulario
const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState(uuidv4());
  const [favorito, setFavorito] = useState(false);
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const [visivelCard, setVisivelCard] = useState("block"); //constante que contem o estilo do display do formulário de criar cards
  const [visivelTime, setVisivelTime] = useState("none"); //constante que contem o estilo do formulário de criar times

  //retorna o formulário
  return (
    <section className="formulario">
      <form
        style={{ display: visivelCard }}
        onSubmit={(evento) => {
          evento.preventDefault(); //previni o comportamento padrão de um formulário
          props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id,
            favorito,
          }); //envia o nome, cargo, imagem, time, id e favorito para o app.js
          setId(uuidv4()); //cria um novo id para o card
          setNome("");
          setCargo("");
          setImagem("");
          setTime("");
          setFavorito(false);
          //limpa os campos do formulário de nome, cargo, imagem e time
        }}
      >
        <h2>Preencha os dados e crie o card do colaborador</h2>
        <Campo
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <Campo
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <Campo
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite a URL"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)} //recebe o valor do input
          obrigatorio={true}
          label="Time"
          itens={props.times} //recebe um array com os nomes dos times pelo App.js e envia para a lista
        />
        <p
          className="criarTime"
          onClick={() => {
            setVisivelTime("block");
            setVisivelCard("none");
          }} //ao clicar no parágrafo ele modifica o display do formulário de card pra none e o de time pra block
        >
          Adicione seu time <AiOutlineDoubleRight size={25} />
        </p>
        <Botao>Criar Card</Botao>
      </form>
      <form
        style={{ display: visivelTime }}
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({
            nome: nomeTime,
            cor: corTime,
          }); //envia um objeto com o nome e a cor do time para o app.js
          setNomeTime("");
          setCorTime("");
          //limpa a const com o nome e a cor do time
        }}
      >
        <h2>
          {" "}
          <AiOutlineDoubleLeft
            size={35}
            color="6278f7"
            cursor="pointer"
            onClick={() => {
              setVisivelTime("none");
              setVisivelCard("block");
            }} //ao clicar no parágrafo ele modifica o display do formulário de card pra none e o de time pra block
          />{" "}
          Criar um novo time
        </h2>
        <Campo
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
          obrigatorio
          label="Nome"
          placeholder="Digite o Nome"
        />
        <Campo
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
          obrigatorio
          label="Cor"
          type="color"
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

//exportação do componente
export default Formulario;
