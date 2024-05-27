import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_GROUP_NAME } from "../helpers";

describe('Home/Entrenamientos Refme', () => {
    beforeEach(() => {
      cy.visit(`${FRONTEND_URL}/#/login`);
      cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
      cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
      cy.get('button[type="submit"]').click();
      cy.get('button[aria-label="Expandir"]').click();
      cy.contains('div.q-item__label', `${TEST_GROUP_NAME}`).click();
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