# 🧪 Meu Primeiro Projeto com Cypress

Este é um projeto de automação de testes com Cypress que simula o processo de login no sistema [OrangeHRM](https://opensource-demo.orangehrmlive.com). O objetivo é validar diferentes cenários de autenticação utilizando testes end-to-end.

---

## 📁 Estrutura do Projeto

```
meu-primeiro-cypress/
├── cypress/
│   ├── e2e/
│   │   └── login/
│   │       └── login-test.cy.js
│   ├── fixtures/
│   │   └── example.json
│   ├── support/
│       ├── commands.js
│       └── e2e.js
├── docs/
│   └── plano-de-teste.md
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ✅ Casos de Teste Automatizados

| ID     | Caso de Teste                            |
|--------|------------------------------------------|
| TC001  | Login com credenciais válidas            |
| TC002  | Login com senha inválida                 |
| TC003  | Login com usuário inválido              |
| TC004  | Login com campos vazios                  |

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd meu-primeiro-cypress
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o Cypress:
   ```bash
   npx cypress open
   ```

4. No menu do Cypress, clique no arquivo `login-test.cy.js` para rodar os testes.

---

## 🔧 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript (Node.js)
- VS Code

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

Feito com 💚 para fins de aprendizado e prática.