import { useState, useEffect } from "react";
import TelaBloqueio from "../TelaBloqueio/Teladebloqueio.jsx";
import perfil from "../../assets/image/perfil.jpeg";
import Desktop from "../Desktop/Desktop.jsx";
import "./TelaLogin.css";

export default function TelaLogin() {
  const [borrao, setBorrao] = useState(false);
  const [data, setData] = useState(new Date());
  const [input, setInput] = useState(null);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [capslock, setCapslock] = useState(false);
  const [logado, setLogado] = useState(false);
  const [erroLogin, setErroLogin] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [segundos, setSegundos] = useState(10);
  const [limiteTentativas, setLimiteTentativas] = useState(false);

  function mostrarSenha() {
    setSenhaVisivel((anterior) => !anterior);
  }
  function verificarCaps(event) {
    setCapslock(event.getModifierState("CapsLock"));
  }

  function desktop() {
    if (limiteTentativas) return;

    if (input === "GiovaniDev") {
      setLogado(true);
      setErroLogin(false);
      return;
    }

    const novasTentativas = tentativas + 1;

    setTentativas(novasTentativas);
    setErroLogin(true);

    if (novasTentativas >= 5) {
      setSegundos(10);
      setLimiteTentativas(true);
    }
  }
  useEffect(() => {
    if (!limiteTentativas) return;

    const timer = setTimeout(() => {
      if (segundos > 1) {
        setSegundos((anterior) => anterior - 1);
      } else {
        setLimiteTentativas(false);
        setTentativas(0);
        setErroLogin(false);
        setInput("");
        setSegundos(10);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [limiteTentativas, segundos]);
  if (logado) {
    return <Desktop data={data} setData={setData} />;
  }

  return (
    <>
      <TelaBloqueio
        borrao={borrao}
        setBorrao={setBorrao}
        data={data}
        setData={setData}
      />
      {limiteTentativas && (
        <section className="login">
          <div className="card-login">
            <img src={perfil} alt="foto de perfil" />
            <h4>Giovani | Front End</h4>
            <h5>PIN incorreto. Tente novamente daqui {segundos}</h5>
            <h5>
              Tentativas <span>{tentativas}</span>/5
            </h5>
          </div>
        </section>
      )}
      {borrao && !limiteTentativas &&
        (erroLogin ? (
          <section className="login">
            <div className="card-login">
              <img src={perfil} alt="foto de perfil" />
              <h4>Giovani | Front End</h4>
              <h5>PIN incorreto. Tente novamente.</h5>
              <h5>
                Tentativas <span>{tentativas}</span>/5
              </h5>
              <button onClick={() => setErroLogin(false)} className="button">
                OK
              </button>
            </div>
          </section>
        ) : (
          <section className="login">
            <div className="card-login">
              <img src={perfil} alt="foto de perfil" />
              <h4>Giovani | Front End</h4>
              {capslock && <p>CapsLock ativado</p>}
              <div
                className="input-box"
                style={{
                  border: input === "GiovaniDev" ? "2px solid green" : "",
                }}
              >
                <i className={input ? "ri-lock-fill" : "ri-lock-line"}></i>
                <input
                  type={senhaVisivel ? "text" : "password"}
                  placeholder="Digite a senha"
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={verificarCaps}
                  value={input}
                  onKeyUp={verificarCaps}
                  onFocus={verificarCaps}
                />
                <i
                  className={senhaVisivel ? "ri-eye-line" : "ri-eye-close-line"}
                  onClick={mostrarSenha}
                ></i>
              </div>
              <button
                className="btn-login"
                onClick={desktop}
              >
                Entrar
              </button>
            </div>
          </section>
        ))}
    </>
  );
}
