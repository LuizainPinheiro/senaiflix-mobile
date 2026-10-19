# Senaiflix 🎬

Aplicação *mobile* desenvolvida em **React Native** com **Expo Router** e **TanStack Query** para navegação e exibição de um catálogo completo de filmes.

---

## 🚀 Funcionalidades

* **Tela Inicial (Home):** Apresentação do aplicativo com atalho para o catálogo.
* **Catálogo de Filmes:** Lista interativa com capas, títulos, ano, duração e gêneros.
* **Detalhes do Filme:** Visualização completa contendo banner, classificação indicativa, sinopse detalhada e botões de ação.
* **Consumo de API Mock:** Integração com backend simulado usando `json-server`.

---

## 🛠️ Tecnologias Utilizadas

* **[React Native](https://reactnative.dev/):** Framework para desenvolvimento mobile.
* **[Expo Router](https://docs.expo.dev/router/introduction/):** Roteamento baseado em arquivos para React Native.
* **[TanStack Query (React Query)](https://tanstack.com/query/latest):** Gerenciamento de estado assíncrono e requisições HTTP.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para maior segurança no código.
* **[JSON Server](https://github.com/typicode/json-server):** API REST simulada a partir de um arquivo `db.json`.

---

## 📁 Estrutura do Projeto

```text
src/
├── api/
│   ├── get-filme.ts      # Requisição dos detalhes por ID
│   └── get-filmes.ts     # Requisição da lista de filmes
└── app/
    ├── _layout.tsx       # Layout global e Providers (React Query / Header)
    ├── index.tsx         # Tela Inicial
    └── catalogo/
        ├── index.tsx     # Tela do Catálogo (Lista)
        └── [id].tsx      # Tela de Detalhes do Filme
db.json                   # Banco de dados local simulado

```

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

* **Node.js** instalado na máquina.
* Aplicativo **Expo Go** instalado no telemóvel/celular (caso queira testar num dispositivo real).

### Passo a Passo

1. **Instalar as dependências:**
```bash
npm install

```


2. **Iniciar o Backend Simulado (JSON Server):**
Em um terminal separado na raiz do projeto, execute:
```bash
npx json-server --watch db.json --port 3000

```


3. **Iniciar a Aplicação Mobile (Expo):**
Em outro terminal, inicie o servidor do Metro:
```bash
npx expo start -c

```


4. **Acessar o App:**
* Pressione **`w`** no terminal para abrir no navegador Web.
* Ou leia o **QR Code** com a câmara do telemóvel através do aplicativo **Expo Go**.