describe('Tests Login in Refme', () => {
  beforeEach(() => {
    cy.visit('https://refme.dlab.software/#/login');
  });
  it('complete the username,password and check', () => {
    cy.get('img').should('be.visible').then(() => {
      cy.log('We found the image.');
    });
    cy.get('input[aria-label="Email"]').should('exist').then(() => {
      cy.log('We found the Email.');
    });
    cy.get('input[aria-label="Contraseña"]').should('exist').then(() => {
      cy.log('We found the password.');
    });
    cy.get('input[aria-label="Email"]').type('dlab@dlab.software');
    cy.get('input[aria-label="Contraseña"]').type('5^q%W#kUq2BSsD*^8X%');
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', 'TAM').click();
    cy.get('button.q-btn').contains('Continuar').click();
    cy.get('div.q-drawer__content').should('exist');
    cy.url().should('eq', 'https://refme.dlab.software/#/').then(() => {
      cy.log('We changed the URL.');
    });
  });
});