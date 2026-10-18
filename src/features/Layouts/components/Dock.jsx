import config from "../../../assets/icons/configuracao.png";
import menu from "../../../assets/icons/menu.png";
import arquivos from "../../../assets/icons/arquivos.png";
import calculadora from "../../../assets/icons/calculadora.png";
import lixeira from "../../../assets/icons/lixeira.png";
import navegador from "../../../assets/icons/navegador.png";
import notas from "../../../assets/icons/notas.png";
import terminal from "../../../assets/icons/terminal.png";
import "../css/Dock.css";

export default function Dock({ abrirJanelas, setAbrirJanelas }) {
  const dockApps = [
    { id: "menu", nome: "Menu", img: menu },
    { id: "config", nome: "Configurações", img: config },
    { id: "terminal", nome: "Terminal", img: terminal },
    { id: "arquivos", nome: "Arquivos", img: arquivos },
    { id: "navegador", nome: "Navegador", img: navegador },
    { id: "notas", nome: "Notas", img: notas },
    { id: "calculadora", nome: "Calculadora", img: calculadora },
    { id: "lixeira", nome: "Lixeira", img: lixeira },
  ];

  function abrirApp(id) {
    setAbrirJanelas((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((appId) => appId !== id)
        : [...anteriores, id],
    );
  }

  return (
    <nav className="dock" aria-label="Aplicativos">
      {dockApps.map((app) => (
        <button
          key={app.id}
          type="button"
          className={
            abrirJanelas.includes(app.id) ? "dock-app aberto" : "dock-app"
          }
          onClick={() => abrirApp(app.id)}
          aria-label={app.nome}
          title={app.nome}
        >
          <img src={app.img} alt="" />
        </button>
      ))}
    </nav>
  );
}
