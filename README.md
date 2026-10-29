# Aplicação ViaCEP

API HTTP simples, construída com Node.js e Express, que consulta o serviço
[ViaCEP](https://viacep.com.br/) para obter os dados de um endereço a partir do
CEP.

## Requisitos

- Node.js 18 ou superior, para disponibilizar `fetch` globalmente.
- npm.

## Instalação e execução

Na raiz do projeto, instale as dependências:

```bash
npm install
```

Inicie a aplicação com:

```bash
node index.js
```

O servidor escuta na porta `3000`. Ao iniciar, exibe a mensagem
`Server is running at port 3000`.

## Endpoints

### `GET /`

Retorna uma mensagem simples para indicar que a aplicação está respondendo.

```bash
curl http://localhost:3000/
```

Resposta:

```text
Hello World!
```

### `GET /cep/:cep`

Consulta o CEP informado no ViaCEP e devolve o JSON retornado pelo serviço.
Substitua `:cep` por um CEP, por exemplo:

```bash
curl http://localhost:3000/cep/01001000
```

A consulta é encaminhada a `https://viacep.com.br/ws/{cep}/json`. Os campos da
resposta são definidos pelo ViaCEP; para um CEP válido, incluem informações
como `cep`, `logradouro`, `bairro`, `localidade` e `uf`.

## Organização do código

- `index.js`: configura o Express, registra as rotas e inicia o servidor.
- `src/routes/cepRoutes.js`: declara a rota `/:cep`, montada sob `/cep`.
- `src/controllers/cepController.js`: lê o CEP dos parâmetros da rota, chama o
  serviço e envia o resultado como JSON.
- `src/services/viaCepService.js`: faz a requisição HTTP ao ViaCEP e converte a
  resposta para JSON.

O fluxo da consulta é: rota → controlador → serviço ViaCEP → resposta JSON.

## Observações

- A porta está definida diretamente como `3000` em `index.js`.
- A aplicação depende de uma conexão com a internet e da disponibilidade do
  ViaCEP.
- O projeto ainda não define scripts de inicialização ou testes no `package.json`.
