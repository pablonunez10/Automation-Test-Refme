describe('Tests Home/Organization Refme', () => {
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
  });
  it('Test to Create a Organizations Refme', () => {
    cy.contains('strong', 'Organización').click();
    cy.url().should('include', '/organizations');
    cy.get('button.q-btn-item').find('i.q-icon.material-icons').contains('add').click();
    cy.get('main.q-page').within(() => {
      cy.get('input[aria-label="Nombre del cliente"]').type('Test-Automation');
      cy.get('input[aria-label="Siglas"]').type('TAD');
      // cy.get('input[aria-label="Cantidad de miembros"]').click();
      // cy.contains('div.q-item-label', 'Opción5').click();
      // // cy.get('input[aria-label="Licencia"]').click();
      // // cy.contains('div.q-item-label', 'Licencia A').click();
      cy.get('input[aria-label="Nombre"]').type('Test');
      cy.get('input[aria-label="Apellido"]').type('Automation');
      cy.get('input[aria-label="Mail"]').type('Automation@Automation.com');
      cy.get('button[type="submit"]').click();
      cy.visit('https://refme.dlab.software/#/organizations/8/');
    })
  })
})