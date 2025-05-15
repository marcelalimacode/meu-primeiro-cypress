describe('Teste de Login - OrangeHRM', () => {
  
  // TC001 - Login com credenciais válidas
  it('TC001 - Login com credenciais válidas', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  // TC002 - Login com senha inválida
  it('TC002 - Login com senha inválida', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('senhaErrada')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  })

  // TC003 - Login com usuário inválido
  it('TC003 - Login com usuário inválido', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('usuarioInvalido')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  })

  // TC004 - Login com campos vazios
  it('TC004 - Login com campos vazios', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-field-error-message') // classe do erro visível nos inputs
      .should('have.length.at.least', 1) // espera ao menos 1 mensagem de erro
  })
})
