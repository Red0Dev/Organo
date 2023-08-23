import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={(evento) => {
          props.aoAlterado(evento.target.value);
        }}
      >
        <option value="" ></option>
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
