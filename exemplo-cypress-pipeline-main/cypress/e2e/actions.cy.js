describe('Teste do formulário Actions', () => {

  it('deve preencher o e-mail e marcar o checkbox', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('teste@exemplo.com')
      .should('have.value', 'teste@exemplo.com')

    cy.get('.action-checkboxes input[type="checkbox"]')
      .first()
      .check()
      .should('be.checked')

  })

})