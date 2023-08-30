//importação do CSS
import "./Campo.css";

//declaração do componente CampoTexto
const Campo = ({
  label,
  valor,
  aoAlterado,
  obrigatorio = false,
  placeholder,
  type = "text",
}) => {
  //retorna os inputs
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        value={valor}
        onChange={(evento) => {
          aoAlterado(evento.target.value);
        }} //pega o valor do input e envia para o formulário
        required={obrigatorio}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

//exportação do componente
export default Campo;
