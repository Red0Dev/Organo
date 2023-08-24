//importação do CSS
import "./Banner.css";

//declaração do componente Banner
function Banner() {
  //retorna o banner
  return (
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="O banner principal da página do Organo"
      />
    </header>
  );
}

//exportação do componente
export default Banner;
