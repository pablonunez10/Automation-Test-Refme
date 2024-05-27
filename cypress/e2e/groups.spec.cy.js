describe('Tests Groups', () => {
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
})