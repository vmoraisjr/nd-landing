import "dotenv/config";
import { createTransporter } from "../smtp.js";

function normalizeValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload) {
  const nome = normalizeValue(payload?.nome);
  const email = normalizeValue(payload?.email);
  const telefone = normalizeValue(payload?.telefone);

  if (nome.split(/\s+/).length < 2) {
    return { ok: false, message: "Digite nome e sobrenome." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { ok: false, message: "Digite um email valido." };
  }

  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!telefoneRegex.test(telefone)) {
    return { ok: false, message: "Digite um telefone valido com DDD." };
  }

  return {
    ok: true,
    data: { nome, email, telefone },
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Metodo nao permitido." });
  }

  const validation = validatePayload(req.body);
  if (!validation.ok) {
    return res.status(400).json({ message: validation.message });
  }

  try {
    const transporter = createTransporter();
    const { nome, email, telefone } = validation.data;
    const contactTo = process.env.CONTACT_TO || "contato@nortexdigital.com.br";
    const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
    const fromName = process.env.SMTP_FROM_NAME || "Nortex Digital";
    const formattedFrom = `${fromName} <${fromAddress}>`;

    await transporter.sendMail({
      from: formattedFrom,
      to: contactTo,
      replyTo: email,
      subject: `Novo contato da landing - ${nome}`,
      text: [
        "Novo lead recebido pela landing page.",
        "",
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Telefone: ${telefone}`,
      ].join("\n"),
      html: `
        <h2>Novo lead recebido pela landing page</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
      `,
    });

    await transporter.sendMail({
      from: formattedFrom,
      to: email,
      subject: "Recebemos sua mensagem - Nortex Digital",
      text: [
        `Ola, ${nome}.`,
        "",
        "Recebemos sua mensagem e entraremos em contato em breve.",
        "Se preferir, voce tambem pode falar com a gente no whatsapp 13 98208-1909.",
        "",
        "Resumo enviado:",
        `Nome: ${nome}`,
        `Telefone: ${telefone}`,
        `Email: ${email}`,
      ].join("\n"),
      html: `
        <p>Ola, ${nome}.</p>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
        <p>
          Se preferir, voce tambem pode falar com a gente no 
          <strong> whatsapp 13 98208-1909</strong>.
        </p>
        <p><strong>Resumo enviado:</strong></p>
        <p>Nome: ${nome}<br />Telefone: ${telefone}<br />Email: ${email}</p>
      `,
    });

    return res.status(200).json({ message: "Mensagem enviada com sucesso." });
  } catch (error) {
    console.error("Erro ao enviar formulario:", error);
    return res
      .status(500)
      .json({ message: "Nao foi possivel enviar o formulario agora." });
  }
}
