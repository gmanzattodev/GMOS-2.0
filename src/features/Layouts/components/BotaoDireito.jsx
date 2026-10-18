import "../css/BotaoDireito.css";

export default function BotaoDireito({ clickDireito, posicao }) {



  return (
    <>
      {clickDireito && (
        <article
          className="direito"
          style={{
            position: "fixed",
            left: posicao.x,
            top: posicao.y,
            zIndex: 1000,
          }}
        >
          <div className="cards-direito">
            <button type="button"><i className="ri-folder-3-line"></i>Nova pasta</button>
            <button type="button"><i className="ri-file-3-line"></i>Novo arquivo</button>
            <button type="button"><i className="ri-image-add-fill"></i>Alterar papel de parede</button>
            <button type="button"><i className="ri-terminal-box-line"></i>Abrir terminal</button>
            <hr />
            <button type="button"><i className="ri-settings-5-line"></i>Configurações</button>
            <button type="button"><i className="ri-info-card-line"></i>Sobre o GM OS</button>
          </div>
        </article>
      )}
    </>
  );
}
