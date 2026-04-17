export default function Results() {
  return (
    <>
      <style>{`
        .results {
          background: #ffffff;
          padding: 120px 32px;
          text-align: center;
        }

        .results__container {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* TITULO */
        .results__title {
          font-size: clamp(2rem, 3vw, 2.8rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-weight: 600;
          color: #1F2A28;
        }

        /* GRID */
        .results__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 60px;
        }

        /* CARD */
        .results__card {
          background: #ffffff;
          border-radius: 18px;
          padding: 32px;
          border: 1px solid #EEF1EF;
          text-align: left;
          transition: all 0.25s ease;
        }

        .results__card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
        }

        .results__card::before {
          content: "";
          display: block;
          width: 40px;
          height: 2px;
          background: #41A632;
          opacity: 0.3;
          margin-bottom: 16px;
        }

        /* NUMBER */
        .results__number {
          font-size: 2.8rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #1F2A28;
        }

        .results__highlight {
          color: #41A632;
          font-weight: 500;
          font-size: 1rem;
          margin-left: 6px;
        }

        /* TEXT */
        .results__card p {
          margin-top: 12px;
          font-size: 0.95rem;
          color: #5F6B69;
          line-height: 1.6;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .results {
            padding: 80px 20px;
          }

          .results__grid {
            grid-template-columns: 1fr;
          }

          .results__card {
            text-align: center;
          }
        }
      `}</style>

      <section className="results" id="social-proof">
        <div className="results__container">
          <h2 className="results__title">
            Empresas já estão crescendo com previsibilidade.
          </h2>

          <div className="results__grid">
            <div className="results__card">
              <div>
                <span className="results__number">+50</span>
                <span className="results__highlight">parcerias positivas</span>
              </div>
              <p>
                Empresas estruturando crescimento com processo e tecnologia.
              </p>
            </div>

            <div className="results__card">
              <div>
                <span className="results__number">3x</span>
                <span className="results__highlight">mais organização</span>
              </div>
              <p>Times deixam o improviso e passam a operar com clareza.</p>
            </div>

            <div className="results__card">
              <div>
                <span className="results__number">24h</span>
                <span className="results__highlight">
                  de relacionamento ativo
                </span>
              </div>
              <p>Clientes sendo nutridos continuamente, sem esforço manual.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
