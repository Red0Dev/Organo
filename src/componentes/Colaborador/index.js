//importação do CSS
import "./Colaborador.css";

//declração do componente Colaborador com as propriedades desestruturadas
const Colaborador = ({ nome, imagem, cargo, corDeFundo}) => {
  //retorna um card genérico para os colaboradores
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

//exportação do componente
export default Colaborador;
