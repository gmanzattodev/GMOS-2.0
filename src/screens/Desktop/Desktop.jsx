import { useState } from "react";
import TopBar from "../../features/Layouts/components/topbar.jsx";
import Wifi from "../../features/wifi/Wifi.jsx";
import "./Desktop.css";
import Dock from "../../features/Layouts/components/Dock.jsx";
import BotaoDireito from "../../features/Layouts/components/BotaoDireito.jsx";

export default function Desktop({ data, setData }) {
  const [abrirWifi, setAbrirWifi] = useState(false);
  const [ligado, setLigado] = useState(false);
  const [abrirJanelas, setAbrirJanelas] = useState([]);
  const [clickDireito, setClickDireito] = useState(false);
  const [posicao, setPosicao] = useState({ x: 0, y: 0 });

  return (
    <>
      <main
        className="Desktop"
        onContextMenu={(event) => {
          event.preventDefault();
          const larguraMenu = 220;
          const alturaMenu = 340;
          const margem = 10;

          setPosicao({
            x: Math.max(
              margem,
              Math.min(event.clientX, window.innerWidth - larguraMenu - margem),
            ),
            y: Math.max(
              margem,
              Math.min(event.clientY, window.innerHeight - alturaMenu - margem),
            ),
          });

          setClickDireito(true);
        }}
        onClick={() => setClickDireito(false)}
      >
        <TopBar
          data={data}
          setData={setData}
          setAbrirWifi={setAbrirWifi}
          ligado={ligado}
        />
        <Wifi abrirWifi={abrirWifi} setLigado={setLigado} ligado={ligado} />
        <Dock abrirJanelas={abrirJanelas} setAbrirJanelas={setAbrirJanelas} />
        <BotaoDireito clickDireito={clickDireito} posicao={posicao} />
      </main>
    </>
  );
}
