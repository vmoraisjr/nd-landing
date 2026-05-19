# Nortex Digital Landing

Landing page institucional da Nortex Digital, com formulário de contato protegido por função serverless na Vercel e páginas auxiliares de apresentação comercial em `prospect/`.

## Resumo

O projeto é uma aplicação estática em HTML, CSS e JavaScript, com uma pequena camada backend para envio seguro do formulário.

Principais partes:

- Página principal em [index.html](/d:/drive-nortex/web/nd-landing/index.html)
- Estilos em `assets/css/`
- Scripts do front-end em `assets/js/`
- Endpoint serverless em [api/contact.js](/d:/drive-nortex/web/nd-landing/api/contact.js)
- Materiais comerciais em `prospect/sceltaacademia/`

## Estrutura

```text
.
├── api/                  # Funções serverless da Vercel
├── assets/
│   ├── css/              # Estilos globais
│   ├── img/              # Imagens e SVGs
│   └── js/               # Interações do front-end
├── prospect/             # Páginas de proposta e diagnóstico
├── public/               # Arquivos públicos auxiliares
├── scripts/              # Scripts utilitários
├── templates/            # Templates de apoio
├── index.html            # Landing principal
├── .env                  # Variáveis locais
└── .env.example          # Exemplo de variáveis
```

## Formulário

O formulário da landing não envia mais diretamente para o Web3Forms no navegador.

Fluxo atual:

`index.html` -> `assets/js/main.js` -> `/api/contact` -> Web3Forms

Vantagem:

- a `WEB3FORMS_ACCESS_KEY` fica no ambiente da Vercel, e não exposta no HTML

Arquivo responsável:

- [api/contact.js](/d:/drive-nortex/web/nd-landing/api/contact.js)

## Variáveis de ambiente

Crie a variável abaixo na Vercel:

```env
WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY_HERE
```

Exemplo local já documentado em [.env.example](/d:/drive-nortex/web/nd-landing/.env.example).

## Deploy

O projeto foi preparado para deploy na Vercel.

Passos:

1. Importar o repositório na Vercel.
2. Configurar `WEB3FORMS_ACCESS_KEY` em `Project Settings > Environment Variables`.
3. Fazer o deploy.

## Observações

- O projeto contém páginas em `prospect/` usadas para materiais comerciais e apresentações.
- Se a chave do Web3Forms já tiver sido exposta em versões anteriores, o ideal é rotacioná-la no painel do serviço.
