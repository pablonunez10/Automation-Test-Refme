import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_GROUP_NAME } from "../helpers";

describe('Multimedia ', () => {
    beforeEach(() => {
        cy.visit(`${FRONTEND_URL}/#/login`);
        cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
        cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
        cy.get('button[type="submit"]').click();
        cy.get('button[aria-label="Expandir"]').click();
        cy.contains('div.q-item__label', `${TEST_GROUP_NAME}`).click();
        cy.get('button.q-btn').contains('Continuar').click();
        cy.contains('strong', 'Multimedia').click();
        cy.url().should('include', '/multimedia')
    });
    it('Add videos to refme', () => {
        cy.get('.q-btn.q-btn-item.q-btn--standard.bg-primary').click()
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click()
        cy.get('.q-menu .q-item').contains('Oficiales').click();
        cy.get('input[aria-label="Tópico"]').click()
        cy.get('.q-menu .q-item').contains('Manos').click();
    });
  });