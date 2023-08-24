//importação do CSS
import "./ListaSuspensa.css";

//declaração do componente ListaSuspensa
const ListaSuspensa = (props) => {
  //retorna a lista suspensa
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={(evento) => {
          props.aoAlterado(evento.target.value);
        }} //pega o valor do select e envia para o formulário
      >
        <option value="" ></option> {/* valor inicial */}
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))} {/* mapeia os itens enviados pelo formulário e escreve na tela */}
      </select>
    </div>
  );
};

//exportação do componente
export default ListaSuspensa;
