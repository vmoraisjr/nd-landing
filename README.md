# Landing Nortex

## Desenvolvimento

1. Crie um arquivo `.env` com base em `.env.example`.
2. Preencha as credenciais SMTP do email que vai enviar as mensagens.
3. Rode `npm run dev:all`.

O ambiente vai subir:

- frontend Vite em `http://localhost:5173`
- API/backend de email em `http://localhost:8787`

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
