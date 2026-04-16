export default function Features() {
  return (
    <>
      <style>{`
        .features {
          background: #ffffff;
          padding: 100px 32px;
          text-align: center;
          border-top: 1px solid #eef1ef;

          background: linear-gradient(
            to right,
            #f1f3f2 0%,     /* lado esquerdo (texto) */
            #f7f8f7 20%,
            #ffffff 40%,
            #ffffff 100%   /* lado da imagem */
          );
        }

        .features__container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* TITULO */
        .features__title {
          font-size: clamp(2rem, 3vw, 2.8rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-weight: 600;
          color: #1F2A28;
        }

        .features__subtitle {
          font-size: 1rem;
          color: #5F6B69;
          margin-top: 16px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* IMAGEM */
        .features__image {
          margin: 60px auto 40px;
          max-width: 600px;
        }

        .features__image img {
          width: 100%;
          height: auto;
        }

        /* GRID */
        .features__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        /* CARD */
        .features__card {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px;
          // border: 0.5px solid #E6EAE8;
          // border: 2px solid #E6EAE8;
          // text-align: left;
          transition: all 0.25s ease;
        }

        .features__card:hover {
          transform: translateY(-6px);
           box-shadow: 0 20px 50px rgba(0,0,0,0.06);
        }

        /* ICON */
        // .features__icon {
        //   width: 40px;
        //   height: 40px;
        //   // border-radius: 12px;
        //   // background: #F3F5F4;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   // margin-bottom: 16px;
        // }

        features__icon {
          width: 60px;
          height: 60px;
          // border-radius: 12px;

          // background: #F6F8F7;

          display: flex;
          align-items: center;
          justify-content: center;

          // margin-bottom: 18px;
        }

        .features__icon img {
          width: 100%;
          height: 100%;
        }

        /* TEXT */
        .features__card h3 {
          font-size: 1.05rem;
          font-weight: 600;
          // color: #1F2A28;
          margin-bottom: 10px;
        }

        .features__card p {
          font-size: 0.92rem;
          color: #5F6B69;
          line-height: 1.6;
        }

        /* MOBILE */
        @media (max-width: 900px) {

        .features{
        background: linear-gradient(
      to bottom,
      #f1f3f2 0%,
      #f7f8f7 10%,
      #ffffff 40%,
      #ffffff 100%
    );
    }

        .features__grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .features__card {
          display: flex;
          align-items: flex-start;
          gap: 14px;

          text-align: left;
          padding: 18px;
          border-radius: 14px;
        }

        .features__icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          margin-bottom: 0;
        }

        .features__icon img {
          width: 18px;
          height: 18px;
        }

        .features__card h3 {
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .features__card p {
          font-size: 0.85rem;
          line-height: 1.5;
        }

      }
      `}</style>

      <section className="features" id="features">
        <div className="features__container">
          <h2 className="features__title">
            Um sistema pensado para atrair, nutrir e reter clientes com
            consistência.
          </h2>

          <p className="features__subtitle">
            Cada etapa da jornada conectada em um fluxo contínuo, sem perda de
            oportunidades.
          </p>

          {/* IMAGEM DO FLUXO */}
          <div className="features__image">
            <img src="/feature2.png" alt="Fluxo de crescimento contínuo" />
          </div>

          {/* CARDS */}
          <div className="features__grid">
            <div className="features__card">
              <div className="features__icon">
                <img src="/icon_atracao2.png" alt="" />
              </div>
              <h3>Atração</h3>
              <p>
                Gere demanda qualificada com estratégia orientada por dados
                reais, evitando desperdício de investimento.
              </p>
            </div>

            <div className="features__card">
              <div className="features__icon">
                <img src="/icon_relacionamento2.png" alt="" />
              </div>
              <h3>Relacionamento</h3>
              <p>
                Automatize follow-ups e organize seu funil com um CRM
                inteligente, sem perder oportunidades.
              </p>
            </div>

            <div className="features__card">
              <div className="features__icon">
                <img src="/icon_fidelizacao2.png" alt="" />
              </div>
              <h3>Fidelização</h3>
              <p>
                Crie recorrência com um sistema de fidelização e recompensas que
                mantém seus clientes ativos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
