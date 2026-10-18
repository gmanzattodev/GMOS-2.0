import { useState } from "react";
import "./Wifi.css"

export default function Wifi({ abrirWifi, setLigado, ligado }) {
  
  const [redeSelecionada, setRedeSelecionada] = useState(null);
  const [redeConectada, setRedeConectada] = useState(null);

  const redes = ["GM Connect", "GM Cloud", "GM Studio"];

  function desligar() {
    setRedeSelecionada(null)
    setRedeConectada(null)
  }

  return (
    <>
      {abrirWifi ? <article className="card-wifi">
        <div className="titulo-info">
          <h4>Wi-Fi</h4>

          <button
            className={ligado ? "button ligado" : "button"}
            onClick={() => (
              setLigado((anterior) => !anterior),
              desligar()
            )}
          >
            <div className="bolinha"></div>
          </button>
        </div>

        <div className="redes-disponiveis">
          <p>Redes disponiveis</p>
          {ligado ? (
            <div className="cards-redes">
              {redes.map((rede) => (
                <div key={rede} className={redeSelecionada === rede ? "card-rede clicado" : "card-rede"} disabled={!redeSelecionada} onClick={() => {setRedeSelecionada((anterior) =>anterior === rede ? null : rede,);setRedeConectada(rede);}}>
                  <div>
                    <i className={redeConectada === rede ? "azul ri-wifi-fill" : "ri-wifi-fill"}></i>
                    <div className="info">
                      <h4>{rede}</h4>
                      <p>{redeConectada === rede ? "Conectado" : ""}</p>
                    </div>
                  </div>
                  <i className={redeConectada === rede ? "ri-check-line verde" : "ri-lock-fill"}></i>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </article> : ""}
    </>
  );
}
