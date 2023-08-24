import "./Rodape.css";

const Rodape = () => {
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

  return (
    <footer className="rodapePrincipal">
      <div>
        {redesSociais.map((redes, index) => (
          <a key={index} href={redes.link} target="_blank">
            <img src={redes.imagem} alt={redes.nome} />{" "}
          </a>
        ))}
      </div>
      <img src="././././imagens/logo.png" alt="Logo da Organo" />
      <p>&copy; desenvolvido por <a href="https://github.com/red0dev" target="_blank" >Red0Dev</a></p>
    </footer>
  );
};

export default Rodape;
