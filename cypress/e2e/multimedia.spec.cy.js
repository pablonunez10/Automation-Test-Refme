describe('Multimedia ', () => {
    beforeEach(() => {
      cy.visit('https://refme.dlab.software/#/login');
      cy.get('input[aria-label="Email"]').type('dlab@dlab.software');
      cy.get('input[aria-label="Contraseña"]').type('5^q%W#kUq2BSsD*^8X%');
      cy.get('button[type="submit"]').click();
      cy.get('button[aria-label="Expandir"]').click();
      cy.contains('div.q-item__label', 'TAM').click();
      cy.get('button.q-btn').contains('Continuar').click();
      cy.contains('strong', 'Multimedia').click();
      cy.url().should('include', '/multimedia')
    });
    it('Add videos to refme', () => {

    });
  });