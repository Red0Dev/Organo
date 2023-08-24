//importação do useState, do componente Botao, CampoTexto e ListaSuspensa e do CSS
import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

//declaração do componente Formulario
const Formulario = (props) => {
  //declaração das constantes em strings vazias
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  //retorna o formulário
  return (
    <section className="formulario">
      <form
        onSubmit={(evento) => {
          evento.preventDefault(); //previni o comportamento padrão de um formulário
          props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
          }); //envia o nome, cargo, imagem e time para o app.js 
          setNome('') 
          setCargo('') 
          setImagem('') 
          setTime('')
          //limpa os campos do formulário de nome, cargo, imagem e time
        }}
      >
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)} //recebe o valor do input 
          obrigatorio={true}
          label="Time"
          itens={props.times} //recebe um array com os nomes dos times pelo App.js e envia para a lista
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

//exportação do componente
export default Formulario;
