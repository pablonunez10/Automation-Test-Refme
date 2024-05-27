const baseUrl = 'http://localhost:9000';
const email = 'nunezbenitezpablo@gmail.com';
const password = '180305'
describe('Multimedia ', () => {
    beforeEach(() => {
        cy.visit(`${baseUrl}/#/login`);
        cy.get('input[aria-label="Email"]').type(`${email}`);
        cy.get('input[aria-label="Contraseña"]').type(`${password}`);
        cy.get('button[type="submit"]').click();
        cy.get('button[aria-label="Expandir"]').click();
        cy.contains('div.q-item__label', 'OTM').click();
        cy.get('button.q-btn').contains('Continuar').click();
        cy.contains('strong', 'Multimedia').click();
        cy.url().should('include', '/multimedia')
    });
    it('Add videos to refme', () => {

    });
  });