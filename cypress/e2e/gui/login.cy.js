describe('Login', () => {
  it('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})

// rodar o teste

// npx cypress run --spec cypress/e2e/gui/login.cy.js

// npx cypress run --spec cypress/e2e/gui/logout.cy.js