//importação do CSS
import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//importação dos componentes visuais da biblioteca react-icons

//declração do componente Colaborador com as propriedades desestruturadas
const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

  const propsFavorito = {
    size: 30,
    onClick: () => aoFavoritar(colaborador.id), //ao clicar chama uma função que passa o id do colaborador para o aoFavoritar em app.js
  }

  //retorna um card genérico para os colaboradores
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={30}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)} //ao clicar chama uma função que passa o id do colaborador para o aoDeletar em app.js
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito /* passa todos os objetos de propsFavorito */} color="#ff0000" /> 
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

//exportação do componente
export default Colaborador;
