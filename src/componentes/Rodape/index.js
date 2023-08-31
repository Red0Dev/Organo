//importação do CSS
import "./Rodape.css";
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

//declaração do componente Rodape
const Rodape = () => {
  //declara a constante com o tamanho
  const tamanho = 32;

  //declara a constante redesSociais contendo um array de objetos com o nome, imagem e o link pra cada rede
  const redesSociais = [
    {
      nome: "facebook",
      imagem: <BsFacebook size={tamanho} />,
      link: "#",
    },
    {
      nome: "twitter",
      imagem: <BsTwitter size={tamanho} />,
      link: "#",
    },
    {
      nome: "instagram",
      imagem: <BsInstagram size={tamanho} />,
      link: "#",
    },
    {
      nome: "linkedin",
      imagem: <BsLinkedin size={tamanho} />,
      link: "linkedin.com/in/jonathan-gabsf/",
    },
  ];

  //retorna o rodape
  return (
    <footer className="rodapePrincipal">
      <div>
        {redesSociais.map((redes, index) => (
          <a
            key={index}
            href={redes.link}
            target="_blank"
            rel="noreferrer"
            alt={redesSociais.map(() => redesSociais.nome)} //mapeia o array de redes e retorna o nome de cada um
          >
            {redes.imagem}
          </a>
        ))}{" "}
        {/* mapeia cada objeto do array de redes sociais e cria uma ancora com uma imagem diferente para cada objeto */}
      </div>
      <img
        className="logo"
        src="././././imagens/logo.png"
        alt="Logo da Organo"
      />
      <p>
        &copy; desenvolvido por{" "}
        <a href="https://github.com/red0dev" target="_blank" rel="noreferrer">
          Red0Dev
        </a>
      </p>
    </footer>
  );
};

//exportação do componente
export default Rodape;
