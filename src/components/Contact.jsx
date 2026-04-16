import { useState } from "react";

const initialForm = {
  nome: "",
  email: "",
  telefone: "",
};

function validateForm({ nome, email, telefone }) {
  if (nome.trim().split(/\s+/).length < 2) {
    return "Digite seu nome e sobrenome.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return "Digite um email valido.";
  }

  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!telefoneRegex.test(telefone.trim())) {
    return "Digite um telefone valido com DDD.";
  }

  return "";
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const errorMessage = validateForm(form);
    if (errorMessage) {
      setStatus({ type: "error", message: errorMessage });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: form.nome.trim(),
          email: form.email.trim(),
          telefone: form.telefone.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Nao foi possivel enviar sua mensagem.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          "Mensagem enviada. Vamos entrar em contato em breve e voce recebera um email de confirmacao.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Nao foi possivel enviar sua mensagem.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <style>{`
        .cta {
          background: linear-gradient(to bottom, #f7f9f8, #eef2f0);
          padding: 120px 32px;
        }

        .cta__container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .cta__top {
          text-align: center;
          margin-bottom: 50px;
        }

        .cta__title {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 600;
          color: #1f2a28;
        }

        .cta__subtitle {
          margin-top: 12px;
          color: #5f6b69;
        }

        .cta__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: stretch;
        }

        .cta__card {
          background: #fff;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.06);
          height: 100%;
        }

        .cta__form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .cta__input {
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #e3e8e6;
          background: #f9fbfa;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .cta__input:focus {
          border-color: #41a632;
          background: #fff;
          outline: none;
        }

        .cta__button {
          margin-top: 10px;
          padding: 16px;
          border-radius: 12px;
          background: linear-gradient(135deg, #41a632, #2f7d24);
          color: #fff;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .cta__button:disabled {
          cursor: wait;
          opacity: 0.7;
        }

        .cta__status {
          min-height: 24px;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .cta__status--success {
          color: #2f7d24;
        }

        .cta__status--error {
          color: #c0392b;
        }

        .cta__note {
          text-align: center;
          font-size: 0.8rem;
          color: #8a9491;
        }

        .cta__contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 10px;
        }

        .cta__contact h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .cta__contact p {
          color: #5f6b69;
          margin-bottom: 20px;
        }

        .cta__contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid #eef1ef;
          margin-bottom: 12px;
          transition: all 0.2s ease;
        }

        .cta__contact-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .cta__icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(65, 166, 50, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #41a632;
          font-size: 14px;
        }

        .cta__icon svg {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 900px) {
          .cta__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="cta" id="contato">
        <div className="cta__container">
          <div className="cta__top">
            <h2 className="cta__title">
              Vamos estruturar seu crescimento com previsibilidade
            </h2>

            <p className="cta__subtitle">
              Escolha como prefere falar com a gente.
            </p>
          </div>

          <div className="cta__grid">
            <div className="cta__card">
              <form className="cta__form" onSubmit={handleSubmit}>
                <input
                  name="nome"
                  className="cta__input"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={handleChange}
                />
                <input
                  name="telefone"
                  className="cta__input"
                  placeholder="(11) 99999-9999"
                  value={form.telefone}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  className="cta__input"
                  placeholder="voce@empresa.com"
                  value={form.email}
                  onChange={handleChange}
                />

                <button className="cta__button" disabled={isSubmitting} type="submit">
                  {isSubmitting
                    ? "Enviando..."
                    : "Quero falar com um especialista"}
                </button>

                <div
                  className={`cta__status ${
                    status.type ? `cta__status--${status.type}` : ""
                  }`}
                  role="status"
                >
                  {status.message}
                </div>

                <p className="cta__note">
                  Ao enviar, voce recebe uma confirmacao por email e nosso time
                  responde para contato@nortexdigital.com.br.
                </p>
              </form>
            </div>

            <div className="cta__contact">
              <h3>Prefere falar direto?</h3>
              <p>Estamos disponiveis nos canais abaixo.</p>

              <div className="cta__contact-item">
                <div className="cta__icon">
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
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <br />
                  (13) 99999-9999
                </div>
              </div>

              <div className="cta__contact-item">
                <div className="cta__icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3 7l9 6 9-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <br />
                  contato@nortexdigital.com.br
                </div>
              </div>

              <div className="cta__contact-item">
                <div className="cta__icon">
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
                </div>
                <div>
                  <strong>Instagram</strong>
                  <br />
                  @nortexdigital
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
