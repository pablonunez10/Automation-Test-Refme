const baseUrl = 'http://localhost:9000';
const email = 'nunezbenitezpablo@gmail.com';
const password = '180305'
describe('Tests Login in Refme', () => {
  beforeEach(() => {
    cy.visit(`${baseUrl}/#/login`);
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
    cy.get('input[aria-label="Email"]').type(`${email}`);
    cy.get('input[aria-label="Contraseña"]').type(`${password}`);
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', 'OTM').click();
    cy.get('button.q-btn').contains('Continuar').click();
    cy.get('div.q-drawer__content').should('exist');
  });
});