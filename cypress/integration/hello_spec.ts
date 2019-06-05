describe('cypress', () => {

  it('test visible correctly', () => {
    cy.visit('index.html');
    cy.get('#hello').should('be.visible');
  });

})
