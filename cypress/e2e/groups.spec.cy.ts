import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_GROUP_NAME } from "../helpers";

describe('Tests Groups', () => {
  beforeEach(() => {
    cy.visit(`${FRONTEND_URL}/#/login`);
    cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
    cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', `${TEST_GROUP_NAME}`).click();
    cy.get('button.q-btn').contains('Continuar').click();
    cy.get('div.q-drawer__content').should('exist');
    cy.get('.q-list').find('.column');
    cy.contains('strong', 'Grupos').click();
    cy.url().should('include', '/groups');
  });
  it('Creates a Group', () => {
    cy.get('button.q-btn-item').find('i.q-icon.material-icons').contains('add').click();
    cy.get('input[aria-label="Nombre"]').type('Test');
    cy.get('textarea[aria-label="Descripción"]').type('This is a Group for Test Cypress');
    cy.get('button:contains("Crear grupo")').click();
    cy.visit('http://localhost:9000/#/groups/')
  })
  it('Assigns an user to a group', () => {
    cy.url().should('include', '/groups');
    cy.get(':nth-child(1) > .cursor-pointer > .q-pa-sm > div.col > .q-gutter-sm').click();
    cy.get('.q-gutter-sm > :nth-child(1) > .q-btn__content > .q-icon').click();
    cy.get(':nth-child(1) > :nth-child(3) > .q-checkbox > .q-checkbox__inner > .q-checkbox__icon-container > .q-icon').click();
    cy.get('.q-card__actions > .q-btn').click();
    // cy.visit('http://localhost:9000/#/groups/')
  })
  // it('Delete group', () => {
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.text-secondary.q-btn--actionable.q-focusable.q-hoverable.q-btn--dense').click();
  //   cy.contains('Eliminar').click();
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--unelevated.q-btn--rectangle.q-btn--rounded.bg-negative.text-white.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase').contains('Confirmar').click();
  // })
})