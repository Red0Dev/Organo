//importação do CSS
import "./Rodape.css";

//declaração do componente Rodape
const Rodape = () => {
  //declara a constante redesSociais contendo um array de objetos com o nome, imagem e o link pra cada rede
  const redesSociais = [
    {
      nome: "facebook",
      imagem: "././././imagens/fb.png",
      link: "#",
    },
    {
      nome: "twitter",
      imagem: "././././imagens/tw.png",
      link: "#",
    },
    {
      nome: "instagram",
      imagem: "././././imagens/ig.png",
      link: "#",
    },
  ];

  //retorna o rodape
  return (
    <footer className="rodapePrincipal">
      <div>
        {redesSociais.map((redes, index) => (
          <a key={index} href={redes.link} target="_blank">
            <img src={redes.imagem} alt={redes.nome} />{" "}
          </a>
        ))} {/* mapeia cada objeto do array de redes sociais e cria uma ancora com uma imagem diferente para cada objeto */}
      </div>
      <img src="././././imagens/logo.png" alt="Logo da Organo" />
      <p>&copy; desenvolvido por <a href="https://github.com/red0dev" target="_blank" >Red0Dev</a></p>
    </footer>
  );
};

//exportação do componente
export default Rodape;
