//importação do CSS
import "./CampoTexto.css";

//declaração do componente CampoTexto
const CampoTexto = (props) => {
  //retorna os inputs
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={(evento) => {
          props.aoAlterado(evento.target.value);
        }} //pega o valor do input e envia para o formulário
        required={props.obrigatorio}
        placeholder={`${props.placeholder}...`}
      />
    </div>
  );
};

//exportação do componente
export default CampoTexto;
