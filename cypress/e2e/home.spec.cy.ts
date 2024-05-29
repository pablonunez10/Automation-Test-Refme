import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_GROUP_NAME } from "../helpers";

describe('Refme Home', () => {
  beforeEach(() => {
    cy.visit(`${FRONTEND_URL}/#/login`);
    cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
    cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', `${TEST_GROUP_NAME}`).click();
    cy.get('button.q-btn').contains('Continuar').click();
  });
  it('Buttons of Refme Home', () => {
    cy.get('div.q-drawer__content').should('exist');
    cy.get('.q-list').find('.column');
    cy.contains('strong', 'Organización').click();
    cy.contains('strong', 'Usuarios').click();
    cy.contains('strong', 'Grupos').click();
    cy.contains('strong', 'Multimedia').click();
    cy.contains('.q-item__label', 'Entrenamientos').click();
  });
  // it('Exit for the home and go to the login', () => {
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--standard.q-btn--round.bg-secondary.text-white.q-btn--actionable.q-focusable.q-hoverable').click();
  //   cy.url().should('include', '/login');
  // })
});