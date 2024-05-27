import { FRONTEND_URL } from "../helpers";

const email = 'test@test.com';
const password = '180305'
describe('Tests Home/User Refme', () => {
  beforeEach(() => {
    cy.visit(`${FRONTEND_URL}/#/login`);
    cy.get('input[aria-label="Email"]').type(`${email}`);
    cy.get('input[aria-label="Contraseña"]').type(`${password}`);
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', 'OTM').click();
    cy.get('button.q-btn').contains('Continuar').click();
    cy.get('div.q-drawer__content').should('exist');
    cy.get('.q-list').find('.column');
    cy.contains('strong', 'Usuarios').click();
    cy.url().should('include', '/users');
  });
  it('Create a User', () => {
    cy.get('button.q-btn-item').find('i.q-icon.material-icons').contains('add').click();
    cy.get('input[aria-label="Nombre"]').type('Test');
    cy.get('input[aria-label="Apellidos"]').type('Entrenador');
    cy.get('input[aria-label="Mail"]').type('manutestverif+19@gmail.com');
    cy.get('input[aria-label="Rol"]').click();
    cy.contains('.q-menu .q-item', 'Entrenador').click();
    cy.contains('button', 'Crear usuario').click();
  })
  it('create a user with respect to referee type', () => {
    cy.get('button.q-btn-item').find('i.q-icon.material-icons').contains('add').click();
    cy.get('input[aria-label="Nombre"]').type('Cypress');
    cy.get('input[aria-label="Apellidos"]').type('Automation');
    cy.get('input[aria-label="Mail"]').type('manutestverif+17@gmail.com');
    cy.get('input[aria-label="Rol"]').click();
    cy.contains('.q-menu .q-item', 'Árbitro').click();
    cy.get('input[aria-label="Tipo árbitro"]').click();
    cy.contains('Árbitro principal').click();
    cy.get('input[aria-label="Categoria"]').click();
    cy.contains('fifa').click();
    cy.contains('button', 'Crear usuario').click();
  })


  // it('Delete user', () => {
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.text-secondary.q-btn--actionable.q-focusable.q-hoverable').
  //   first().click()
  //   cy.get('div.q-menu').contains('div.q-item', 'Eliminar').click();
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--unelevated.q-btn--rectangle.q-btn--rounded.bg-negative.text-white.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase')
  //   .contains('Confirmar').click();
  // })
})