import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import "./Teladebloqueio.css"
gsap.registerPlugin(useGSAP);

export default function TelaBloqueio({ setBorrao, borrao, data, setData }) {
  const telaRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: telaRef });

  const subirTela = contextSafe(() => {
    gsap.to(telaRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power3.inOut",
        opacity: 0,
        onComplete: () => {
            setBorrao(true)
        }
    });
    
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, [])

  useEffect(() => {
    function detectarTeclado(event) {
      if (event.code === "Space" && !event.repeat) {
        event.preventDefault();
        subirTela()
      }
    }
    window.addEventListener("keydown", detectarTeclado);
    window.addEventListener("click", subirTela);

    return () => {
      window.removeEventListener("click", subirTela)
      window.removeEventListener("keydown", detectarTeclado);
    };
  }, [subirTela]);

  return (
    <>
      <section className={`bloqueio ${borrao ? "com-borrao" : ""}`}>
        <div className="hora-data" ref={telaRef}>
          <h1>
            {data.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
              
            })}
          </h1>

          <p>
            {data.toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>
        </div>
      </section>
    </>
  );
}
