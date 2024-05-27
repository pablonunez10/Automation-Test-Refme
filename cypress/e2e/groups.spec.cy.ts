import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS } from "../helpers";

describe('Tests Groups', () => {
  beforeEach(() => {
    cy.visit(`${FRONTEND_URL}/#/login`);
    cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
    cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', 'OTM').click();
    cy.get('button.q-btn').contains('Continuar').click();
    cy.get('div.q-drawer__content').should('exist');
    cy.get('.q-list').find('.column');
    cy.contains('strong', 'Grupos').click();
    cy.url().should('include', '/groups');
  });
  it('Creates a Group', () => {
    cy.get('button.q-btn-item').find('i.q-icon.material-icons').contains('add').click();
    cy.get('input[aria-label="Nombre"]').type('Test of Cypress');
    cy.get('textarea[aria-label="Descripción"]').type('This is a Group for Test Cypress');
    // cy.get('button:contains("Crear grupo")').click();
  })
  it('Assigns an user to a group', () => {
    cy.url().should('include', '/groups');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.q-avatar__content > .q-icon').click();
    cy.get('.q-gutter-sm > :nth-child(1) > .q-btn__content > .q-icon').click();
    /* ==== End Cypress Studio ==== */
    cy.get('.q-dialog__inner .q-table tr input').first().click({force: true});
  })
  // it('Delete group', () => {
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.text-secondary.q-btn--actionable.q-focusable.q-hoverable.q-btn--dense').click();
  //   cy.contains('Eliminar').click();
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--unelevated.q-btn--rectangle.q-btn--rounded.bg-negative.text-white.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase').contains('Confirmar').click();
  // })
})