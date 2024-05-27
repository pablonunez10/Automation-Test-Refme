describe('Tests in Refme Home', () => {
  beforeEach(() => {
    cy.visit('https://refme.dlab.software/#/login');
    cy.get('input[aria-label="Email"]').type('dlab@dlab.software');
    cy.get('input[aria-label="Contraseña"]').type('5^q%W#kUq2BSsD*^8X%');
    cy.get('button[type="submit"]').click();
    cy.get('button[aria-label="Expandir"]').click();
    cy.contains('div.q-item__label', 'TAM').click();
    cy.get('button.q-btn').contains('Continuar').click();
  });
  it('Test Buttons of Refme Home', () => {
    cy.get('div.q-drawer__content').should('exist');
    cy.get('.q-list').find('.column');
    cy.contains('strong', 'Organización').click();
    cy.wait(3000)
    cy.contains('strong', 'Usuarios').click();
    cy.wait(3000)
    cy.contains('strong', 'Grupos').click();
    cy.wait(3000)
    cy.contains('strong', 'Multimedia').click();
    cy.wait(3000)
    cy.contains('strong', 'E-Learning').click();
    cy.wait(3000)
    cy.contains('.q-item__label', 'Entrenamientos').click();
  });
});