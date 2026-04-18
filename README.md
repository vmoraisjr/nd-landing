# Landing Nortex

## Desenvolvimento

1. Crie um arquivo `.env` com base em `.env.example`.
2. Preencha as credenciais SMTP do email que vai enviar as mensagens.
3. Rode `npm run dev:all`.

O ambiente vai subir:

- frontend Vite em `http://localhost:5173`
- API/backend de email em `http://localhost:8787`

## Exemplo com SMTP Nortex Digital

Para esta instalação específica, a configuração que funcionou foi:

```env
PORT=8787
CONTACT_TO=contato@nortexdigital.com.br
SMTP_HOST=smtp.email-ssl.com.br
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REQUIRE_TLS=true
SMTP_USER=contato@nortexdigital.com.br
SMTP_PASS=sua-senha
SMTP_FROM=contato@nortexdigital.com.br
SMTP_FROM_NAME=Nortex Digital
```

## Exemplo com Locaweb

Se voce usa uma caixa postal da Locaweb, normalmente funciona assim:

```env
PORT=8787
CONTACT_TO=contato@nortexdigital.com.br
SMTP_HOST=smtp.seudominio.com.br
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REQUIRE_TLS=true
SMTP_USER=seu-email@seudominio.com.br
SMTP_PASS=sua-senha
SMTP_FROM=seu-email@seudominio.com.br
SMTP_FROM_NAME=Nortex Digital
```

Observacoes:

- se `smtp.seudominio.com.br` nao responder, teste `smtp.locaweb.com.br`
- para a Locaweb via porta `587`, o padrao costuma ser `STARTTLS`, por isso `SMTP_REQUIRE_TLS=true`
- se voce usa o produto separado `SMTP Locaweb` para disparos, o host e a autenticacao podem ser diferentes do email comum

## Fluxo do formulario

Quando o visitante envia o formulario:

- os dados chegam no endpoint `POST /api/contact`
- a Nortex recebe o lead em `contato@nortexdigital.com.br`
- o visitante recebe um email avisando que o contato sera retornado em breve

## Scripts

- `npm run dev`: sobe o frontend
- `npm run dev:server`: sobe o servidor Node do formulario
- `npm run dev:all`: sobe frontend e backend juntos
- `npm run lint`: valida o projeto
- `npm run build`: gera o build do frontend
- `npm start`: sobe o servidor Node
