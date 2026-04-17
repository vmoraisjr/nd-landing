import { useState } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#features", label: "Solucao" },
  { href: "#ecosystem", label: "Ecossistema" },
  { href: "#social-proof", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .navbar__container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px 32px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 24px;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar__logo img {
          height: 40px;
        }

        .navbar__brand {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2a28;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .navbar__links a {
          color: #5f6b69;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .navbar__client,
        .navbar__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .navbar__client {
          border: 1px solid #d1d5d4;
          background: #f3f4f3;
          color: #7a8785;
        }

        .navbar__cta {
          border: 1px solid #41a632;
          background: #41a632;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(65, 166, 50, 0.18);
        }

        .navbar__menu {
          width: 26px;
          height: 18px;
          display: none;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          padding: 0;
          border: none;
          background: transparent;
        }

        .navbar__menu span {
          height: 3px;
          width: 100%;
          background: #41a632;
          border-radius: 2px;
          display: block;
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 28px;
          z-index: 999;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .mobile-menu a {
          font-size: 1.2rem;
          text-decoration: none;
          color: #1f2a28;
          font-weight: 500;
        }

        .mobile-menu__close {
          position: absolute;
          top: 20px;
          right: 24px;
          font-size: 1.6rem;
          cursor: pointer;
          padding: 0;
          border: none;
          background: transparent;
          color: #1f2a28;
        }

        @media (max-width: 900px) {
          .navbar__container {
            grid-template-columns: auto auto;
            justify-content: space-between;
            padding: 12px 20px;
          }

          .navbar__brand {
            font-size: 0.9rem;
          }

          .navbar__logo img {
            height: 36px;
          }

          .navbar__links,
          .navbar__actions {
            display: none;
          }

          .navbar__menu {
            display: flex;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="navbar__container">
          <a className="navbar__logo" href="#inicio" onClick={() => setOpen(false)}>
            <img src="/logo_nortex_sem_fundo.png" alt="Nortex Digital" />
            <span className="navbar__brand">Nortex Digital</span>
          </a>

          <nav className="navbar__links" aria-label="Navegacao principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <div className="navbar__client">Area do cliente</div>
            <a className="navbar__cta" href="#contato">
              Comecar agora
            </a>
          </div>

          <button
            type="button"
            className="navbar__menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((currentOpen) => !currentOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button
          type="button"
          className="mobile-menu__close"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        >
          x
        </button>

        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}

        <div className="navbar__client">Area do cliente</div>
      </div>
    </>
  );
}
