import { useState, useEffect } from "react";
import "../css/topbar.css";
export default function TopBar({ data, setData, setAbrirWifi, ligado}) { 
  const [volume, setVolume] = useState(0);
  const [modarTitulo, setMudarTitulo] = useState(false)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setData(new Date());
    }, 1000);

    const mudar = setTimeout(() => {
        setMudarTitulo(true)
    }, 2000);

    return () => {
        clearInterval(intervalo)
        clearTimeout(mudar)
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <h3>{modarTitulo ? "GM OS | Developer" : "GM OS"}</h3>

        <div className="sinal-redes">
          <div className="sinal wifi">
            <i
              className={
                ligado
                  ? "ri-wifi-line"
                  : "ri-wifi-off-line"
              } onClick={() => setAbrirWifi(anterior => !anterior)}
            ></i>
          </div>
          <div className="sinal volume">
            <i
              className={
                volume >= 1 && volume <= 20
                  ? "ri-volume-down-line"
                  : volume >= 21 && volume <= 80
                    ? "ri-volume-up-line"
                    : volume >= 81 && volume <= 100
                      ? "ri-volume-up-fill"
                      : "ri-volume-mute-line"
              }
            ></i>
            <div className="volume-box">
              <input className="controle-volume"
                type="range"
                min={0}
                max={100}
                step={1}
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                style={{ "--progresso": `${volume}%` }}
              />
              <span className="volume-valor">{volume}</span>
            </div>
            
          </div>
          <div className="sinal data">
            <h1>
              {data.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
