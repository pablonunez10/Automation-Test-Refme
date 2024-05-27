const baseUrl = 'http://localhost:9000';
const email = 'nunezbenitezpablo@gmail.com';
const password = '180305'
describe('Home/E-Learning Refme', () => {
    beforeEach(() => {
        cy.visit(`${baseUrl}/#/login`);
        cy.get('input[aria-label="Email"]').type(`${email}`);
        cy.get('input[aria-label="Contraseña"]').type(`${password}`);
        cy.get('button[type="submit"]').click();
        cy.get('button[aria-label="Expandir"]').click();
        cy.contains('div.q-item__label', 'OTM').click();
        cy.get('button.q-btn').contains('Continuar').click();
        cy.contains('strong', 'E-Learning').click();
        cy.url().should('include', '/elearning');
    });
    it('Add videos to refme', () => {
        
    });
  });