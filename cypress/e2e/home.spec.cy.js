const baseUrl = 'http://localhost:9000';
const email = 'nunezbenitezpablo@gmail.com';
const password = '180305' 
describe('Refme Home', () => {
  beforeEach(() => {
    cy.visit(`${baseUrl}/#/login`);
    cy.get('input[aria-label="Email"]').type(`${email}`);
    cy.get('input[aria-label="Contraseña"]').type(`${password}`);
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', 'OTM').click();
    cy.get('button.q-btn').contains('Continuar').click();
  });
  it('Buttons of Refme Home', () => {
    cy.get('div.q-drawer__content').should('exist');
    cy.get('.q-list').find('.column');
    cy.contains('strong', 'Organización').click();
    cy.wait(3000)
    cy.contains('strong', 'Usuarios').click();
    cy.wait(3000)
    cy.contains('strong', 'Grupos').click();
    cy.wait(3000)
    cy.contains('strong', 'Multimedia').click();
    // cy.wait(3000)
    // cy.contains('strong', 'E-Learning').click();
    cy.wait(3000)
    cy.contains('.q-item__label', 'Entrenamientos').click();
  });
  // it('Exit for the home and go to the login', () => {
  //   cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--standard.q-btn--round.bg-secondary.text-white.q-btn--actionable.q-focusable.q-hoverable').click();
  //   cy.url().should('include', '/login');
  // })
});