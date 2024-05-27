describe('Tests Home/User Refme', () => {
  beforeEach(() => {
    cy.visit('https://refme.dlab.software/#/login');
    cy.get('input[aria-label="Email"]').type('dlab@dlab.software');
    cy.get('input[aria-label="Contraseña"]').type('5^q%W#kUq2BSsD*^8X%');
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', 'TAM').click();
    cy.get('button.q-btn').contains('Continuar').click();
    cy.get('div.q-drawer__content').should('exist');
    cy.get('.q-list').find('.column');
    cy.contains('strong', 'Usuarios').click();
    cy.url().should('include', '/users');
  });
  it('Test to Create a User Refme', () => {
    cy.get('button.q-btn-item').find('i.q-icon.material-icons').contains('add').click();
    cy.get('input[aria-label="Nombre"]').type('Gerardo');
    cy.get('input[aria-label="Apellidos"]').type('Entrenador');
    cy.get('input[aria-label="Mail"]').type('gerardo+27@dlab.software');
    cy.get('input[aria-label="Rol"]').click();
    cy.contains('.q-menu .q-item', 'Entrenador').click();
    // cy.contains('.q-menu .q-item', 'Árbitro').click();
    // cy.get('input[aria-label="Tipo árbitro"]').click();
    // cy.contains('Árbitro principal').click();
    // cy.get('input[aria-label="Categoria"]').click();
    // cy.contains('fifa ').click();
    cy.contains('button', 'Crear usuario').click();
    cy.visit('https://refme.dlab.software/#/users/');
    cy.wait(5000);
  })
  it('Delete user', () => {
    cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.text-secondary.q-btn--actionable.q-focusable.q-hoverable').
    first().click()
    cy.get('div.q-menu').contains('div.q-item', 'Eliminar').click();
    cy.get('button.q-btn.q-btn-item.non-selectable.no-outline.q-btn--unelevated.q-btn--rectangle.q-btn--rounded.bg-negative.text-white.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase')
    .contains('Confirmar').click();
  })
})