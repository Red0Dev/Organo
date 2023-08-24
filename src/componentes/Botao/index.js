//importação do CSS
import "./botao.css";

//declaração do componente Botao
const Botao = (props) => {
  //retorna um botão genérico
  return <button className="botao">{props.children}</button>;
};

//exportação do componente
export default Botao;
