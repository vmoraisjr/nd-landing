export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          padding: 100px 32px;
          min-height: 75vh;
          display: flex;
          align-items: center;

          background: linear-gradient(
            to right,
            #f1f3f2 0%,     /* lado esquerdo (texto) */
            #f7f8f7 20%,
            #ffffff 40%,
            #ffffff 100%   /* lado da imagem */
          );

        }

        .hero__container {
         position: relative;
         z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
        }


        .hero__content {
          position: relative;
          z-index: 2;
          // max-width: 650px;
        }

        .hero__title {
          font-size: clamp(2.4rem, 3.5vw, 2.8rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-weight: 550;
          color: #1F2A28;
          margin: 0;
        }

        .hero__title strong {
          color: #41A632;
          font-weight: 600;
        }

        .hero__subtitle {
          margin-top: 20px;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #5F6B69;
          max-width: 500px;
        }

        .hero__actions {
          margin-top: 28px;
        }

        .hero__button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border-radius: 12px;
          background: #FF8C42;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(255, 140, 66, 0.18);
          transition: all 0.25s ease;
        }

        .hero__button:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 26px rgba(255, 140, 66, 0.22);
        }

        .hero__mobile-image {
          display: none;
          width: 100%;
          height: auto;
          margin-top: 28px;
        }

        .hero__note {
          margin-top: 10px;
          font-size: 0.85rem;
          color: #6b7875;
        }

        /* IMAGEM COMO FUNDO */
        .hero__bg {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 50%;
          height: 100%;
          background: url('/hero.png') no-repeat center/contain;
          opacity: 1;
          pointer-events: none;
          animation: float 8s ease-in-out infinite;
          // filter: drop-shadow(0 0 20px rgba(65, 166, 50, 0.15));
        }

        /* FADE ENTRE TEXTO E IMAGEM */
        // .hero::after {
        //   content: "";
        //   position: absolute;
        //   right: 0;
        //   top: 0;
        //   width: 98%;
        //   height: 100%;
        //   background: linear-gradient(to left, transparent, #ffffff 70%);
        // }

        /* ANIMAÇÃO SUTIL */
        @keyframes float {
          0% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-51%) translateX(6px); }
          100% { transform: translateY(-50%) translateX(0); }
        }

        /* RESPONSIVO */
       @media (max-width: 900px) {
  .hero {
    padding: 40px 20px;
    min-height: auto;
    text-align: center;
    background: linear-gradient(
      to bottom,
      #f1f3f2 0%,
      #f7f8f7 10%,
      #ffffff 50%,
      #ffffff 100%
    );
  }

  .hero__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero__content {
    max-width: 100%;
    margin-top: 0;
  }

  .hero__title {
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: -0.01em;
     max-width: 320px;
  margin: 0 auto;
  }

  .hero__subtitle {
    font-size: 0.95rem;
    margin-top: 16px;
  }

  .hero__actions {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .hero__button {
    width: 100%;
    max-width: 150px;
  }

  .hero__mobile-image {
    display: block;
  }

  .hero__note {
    text-align: center;
  }

  /* REMOVE IMAGEM COMPLETAMENTE */
  .hero__bg {
    display: none;
  }

  .hero::after {
    display: none;
  }
}
      `}</style>

      <section id="inicio" className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Não dependa de marketing solto.
              <br />
              Tenha um sistema que gera e<br />
              <strong>fideliza clientes.</strong>
            </h1>

            <p className="hero__subtitle">
              Centralize leads, automatize follow-ups e transforme clientes em
              recorrência com previsibilidade.
            </p>

            <div className="hero__actions">
              <a href="#contato" className="hero__button">
                Começar agora
              </a>
            </div>

            <img
              className="hero__mobile-image"
              src="/hero.png"
              alt="Painel do sistema Nortex Digital"
            />
          </div>
        </div>

        <div className="hero__bg"></div>
      </section>
    </>
  );
}
