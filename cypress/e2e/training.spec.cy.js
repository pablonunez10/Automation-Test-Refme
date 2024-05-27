const baseUrl = 'http://localhost:9000';
const email = 'nunezbenitezpablo@gmail.com';
const password = '180305'
describe('Home/Entrenamientos Refme', () => {
    beforeEach(() => {
      cy.visit(`${baseUrl}/#/login`);
      cy.get('input[aria-label="Email"]').type(`${email}`);
      cy.get('input[aria-label="Contraseña"]').type(`${password}`);
      cy.get('button[type="submit"]').click();
      cy.get('button[aria-label="Expandir"]').click();
      cy.contains('div.q-item__label', 'OTM').click();
      cy.get('button.q-btn').contains('Continuar').click();
      cy.contains('.q-item__label', 'Entrenamientos').click();
    });
    it('Add training oficial test ', () => {
        cy.url().should('include', '/official-test');
        cy.contains('.q-item__label', 'Test Oficiales').click();
    });
    it('Add exercise to training ', () => {
        cy.url().should('include', '/exercises');
        cy.contains('.q-item__label', 'Ejercicios').click();
        
    });
  });