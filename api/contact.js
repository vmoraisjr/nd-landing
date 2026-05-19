export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Metodo nao permitido.' });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({ message: 'Configuracao do formulario ausente.' });
  }

  try {
    const body =
      typeof req.body === 'string'
        ? JSON.parse(req.body || '{}')
        : req.body || {};

    const {
      name = '',
      email = '',
      company = '',
      message = '',
      from_name = 'Nortex Digital',
      replyto = '',
      subject = 'Novo contato pelo site da Nortex Digital',
      _honey = '',
    } = body;

    if (_honey) {
      return res.status(200).json({ message: 'Mensagem enviada com sucesso.' });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Preencha nome, e-mail e mensagem.' });
    }

    const payload = {
      access_key: accessKey,
      name,
      email,
      company,
      message,
      from_name,
      replyto: replyto || email,
      subject,
    };

    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await web3formsResponse.json();

    if (!web3formsResponse.ok) {
      return res.status(web3formsResponse.status).json({
        message: result.message || 'Nao foi possivel enviar agora.',
      });
    }

    return res.status(200).json({ message: 'Mensagem enviada com sucesso.' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao processar o envio do formulario.' });
  }
}
