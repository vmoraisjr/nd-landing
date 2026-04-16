export default function Ecosystem() {
  return (
    <>
      <style>{`
        .ecosystem {
          background: #0F1413;
          padding: 120px 32px;
          color: #E7ECEA;
        }

        .ecosystem__container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        /* TEXTO */
        .ecosystem__content h2 {
          font-size: clamp(2.2rem, 3vw, 3rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          font-weight: 600;
          color: #ffffff;
        }

        .ecosystem__content p {
          margin-top: 20px;
          font-size: 1rem;
          line-height: 1.7;
          color: #AAB4B1;
          max-width: 520px;
        }

        /* BADGE */
        .ecosystem__badge {
          display: inline-block;
          margin-bottom: 20px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(65,166,50,0.12);
          color: #7EDC6B;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* PAINEL */
        .ecosystem__panel {
          background: #151B1A;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .ecosystem__panel h3 {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 20px;
        }

        /* ITENS */
        .ecosystem__item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px;
          border-radius: 12px;
          background: #1C2321;
          margin-bottom: 12px;
          transition: all 0.2s ease;
        }

        .ecosystem__item:hover {
          background: #222A28;
        }

        .ecosystem__icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(65,166,50,0.2);
          color: #7EDC6B;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        .ecosystem__item strong {
          display: block;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .ecosystem__item span {
          font-size: 0.85rem;
          color: #8F9B98;
        }

        /* MOBILE */
        @media (max-width: 900px) {
          .ecosystem__container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .ecosystem {
            padding: 80px 20px;
          }
        }
      `}</style>

      <section className="ecosystem" id="ecosystem">
        <div className="ecosystem__container">
          {/* TEXTO */}
          <div className="ecosystem__content">
            {/* <div className="ecosystem__badge">
              Estrutura para crescer com consistência
            </div> */}

            <h2>
              Pare de depender de marketing.
              <br />
              Construa um sistema que cresce sozinho.
            </h2>

            <p>
              A Nortex conecta aquisição, relacionamento e fidelização em uma
              única estrutura — onde dados, automação e inteligência trabalham
              juntos para gerar previsibilidade.
            </p>
          </div>

          {/* PAINEL */}
          <div className="ecosystem__panel">
            <h3>Tudo que sua operação precisa, em um único sistema</h3>

            <div className="ecosystem__item">
              <div className="ecosystem__icon">✓</div>
              <div>
                <strong>CRM inteligente</strong>
                <span>
                  Organize leads e acompanhe oportunidades em tempo real
                </span>
              </div>
            </div>

            <div className="ecosystem__item">
              <div className="ecosystem__icon">✓</div>
              <div>
                <strong>Automação de marketing</strong>
                <span>Fluxos automáticos que nutrem e convertem clientes</span>
              </div>
            </div>

            <div className="ecosystem__item">
              <div className="ecosystem__icon">✓</div>
              <div>
                <strong>Inteligência artificial</strong>
                <span>Decisões baseadas em dados e otimização contínua</span>
              </div>
            </div>

            <div className="ecosystem__item">
              <div className="ecosystem__icon">✓</div>
              <div>
                <strong>Fidelização e recorrência</strong>
                <span>Mantenha clientes ativos com estratégias contínuas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
