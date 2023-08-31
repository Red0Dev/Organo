//importação do CSS
import "./Campo.css";

//declaração do componente CampoTexto
const Campo = ({
  label,
  valor,
  aoAlterado,
  obrigatorio = false, //padrão de required false
  placeholder,
  type = "text", //padrão de input tipo texto
}) => {
  //retorna os inputs
  return (
    <div className={`campo campo-${type}`}> {/* muda o estilo do campo quando for cor */} 
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
