export default function Footer() {
  function handleWhatsappClick(event) {
    event.preventDefault();

    const floatingWhatsappButton = document.querySelector(".whatsapp-button");

    if (floatingWhatsappButton instanceof HTMLAnchorElement) {
      floatingWhatsappButton.click();
      return;
    }

    window.open(
      "https://wa.me/5513997144043?text=Ol%C3%A1,%20vim%20pela%20landing%20e%20quero%20entender%20como%20aumentar%20meu%20faturamento",
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <>
      <style>{`
        .footer {
          background: #0f1413;
          color: #c7d1ce;
          padding: 80px 32px 40px;
        }

        .footer__container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer__brand {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: #ffffff;
          text-decoration: none;
        }

        .footer__logo img {
          width: 28px;
        }

        .footer__desc {
          font-size: 0.9rem;
          color: #8f9b98;
          line-height: 1.6;
          max-width: 260px;
        }

        .footer__title {
          font-size: 0.9rem;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .footer__links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer__links a {
          font-size: 0.85rem;
          color: #8f9b98;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer__links a:hover,
        .footer__logo:hover {
          color: #41a632;
        }

        .footer__social {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
          width: 100%;
        }

        .footer__social a {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 56px;
          padding: 12px 14px;
          border-radius: 12px;
          background: #161d1b;
          border: 1px solid #25302d;
          color: #d9e3e0;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer__social a:hover {
          transform: translateY(-2px);
          border-color: #3d524c;
          background: #1b2421;
          color: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
        }

        .footer__social-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(65, 166, 50, 0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #67c45a;
          flex-shrink: 0;
        }

        .footer__social-icon svg {
          width: 18px;
          height: 18px;
        }

        .footer__social-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer__social-label {
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
        }

        .footer__social-handle {
          font-size: 0.82rem;
          color: #8f9b98;
        }

        .footer__bottom {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 1px solid #1f2725;
          font-size: 0.8rem;
          color: #6f7a77;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        @media (max-width: 900px) {
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer {
            padding: 60px 20px 30px;
          }

          .footer__bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="footer__brand">
              <a className="footer__logo" href="#inicio">
                <img src="/logo_nortex_sem_fundo.png" alt="Nortex" />
                Nortex Digital
              </a>

              <p className="footer__desc">
                Estrutura, tecnologia e execucao para transformar sua operacao
                em um sistema de crescimento previsivel.
              </p>

              <div className="footer__social">
                <a
                  href="https://www.instagram.com/agencianortex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Nortex Digital"
                >
                  <span className="footer__social-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="17" cy="7" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="footer__social-text">
                    <span className="footer__social-label">Instagram</span>
                    <span className="footer__social-handle">
                      @agencianortex
                    </span>
                  </span>
                </a>
                <a
                  href="https://wa.me/5513997144043?text=Ol%C3%A1,%20vim%20pela%20landing%20e%20quero%20entender%20como%20aumentar%20meu%20faturamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Nortex Digital"
                  onClick={handleWhatsappClick}
                >
                  <span className="footer__social-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 12c0 4.4-3.6 8-8 8a7.9 7.9 0 01-3.4-.8L4 20l.9-4.5A7.9 7.9 0 014 12c0-4.4 3.6-8 8-8s8 3.6 8 8z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9 10c.3 1 1.7 2.5 3 3 .5.2 1 .2 1.3-.2l.7-.9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                  <span className="footer__social-text">
                    <span className="footer__social-label">WhatsApp</span>
                    <span className="footer__social-handle">
                      (13) 99714-4043
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <div className="footer__title">Navegacao</div>
              <div className="footer__links">
                <a href="#inicio">Inicio</a>
                <a href="#features">Solucao</a>
                <a href="#ecosystem">Ecossistema</a>
                <a href="#social-proof">Resultados</a>
                <a href="#contato">Contato</a>
              </div>
            </div>

            <div>
              <div className="footer__title">Solucoes</div>
              <div className="footer__links">
                <a href="#features">Aquisicao de clientes</a>
                <a href="#features">CRM e automacao</a>
                <a href="#features">Fidelizacao</a>
              </div>
            </div>

            <div>
              <div className="footer__title">Contato</div>
              <div className="footer__links">
                <a href="tel:+5513982081909">(13) 98208-1909</a>
                <a href="mailto:contato@nortexdigital.com.br">
                  contato@nortexdigital.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div>© 2026 Nortex Digital</div>
            <div>Politica de privacidade • Termos de uso</div>
          </div>
        </div>
      </footer>
    </>
  );
}
