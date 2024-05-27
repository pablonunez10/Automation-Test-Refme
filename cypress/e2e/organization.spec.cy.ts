import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_CREATE_ORGANIZATION_NAME, TEST_GROUP_NAME } from "../helpers";

describe('Tests Home/Organization Refme', () => {
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
  });
  it('Test to Create a Organizations Refme', () => {
    cy.contains('strong', 'Organización').click();
    cy.url().should('include', '/organizations');
    cy.get('button.q-btn-item').find('i.q-icon.material-icons').contains('add').click();
    cy.get('main.q-page').within(() => {
    cy.get('input[aria-label="Nombre del cliente"]').type('Test-Cypress');
    cy.get('input[aria-label="Siglas"]').type(TEST_CREATE_ORGANIZATION_NAME).click();
    // cy.get('input[aria-label="Cantidad de miembros"]').click();
    // cy.contains('div.q-item-label', 'Opción5').click();
    // // cy.get('input[aria-label="Licencia"]').click();
    // // cy.contains('div.q-item-label', 'Licencia A').click();
    cy.get('input[aria-label="Nombre"]').type('Test');
    cy.get('input[aria-label="Apellido"]').type('cypress');
    cy.get('input[aria-label="Mail"]').type('nunezbenitezpablo+18@gmail.com');
    cy.get('button[type="submit"]').click();
    cy.visit('http://localhost:9000/#/organizations/');
    })
  })
})