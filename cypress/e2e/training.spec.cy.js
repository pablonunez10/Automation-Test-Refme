describe('Home/Entrenamientos Refme', () => {
    beforeEach(() => {
      cy.visit('https://refme.dlab.software/#/login');
      cy.get('input[aria-label="Email"]').type('dlab@dlab.software');
      cy.get('input[aria-label="Contraseña"]').type('5^q%W#kUq2BSsD*^8X%');
      cy.get('button[type="submit"]').click();
      cy.get('button[aria-label="Expandir"]').click();
      cy.contains('div.q-item__label', 'TAM').click();
      cy.get('button.q-btn').contains('Continuar').click();
      cy.contains('.q-item__label', 'Entrenamientos').click();
    });
    it('Add training oficial test ', () => {
        cy.url().should('include', '/official-test');
        cy.contains('.q-item__label', 'Test Oficiales').click();
    });
    it('Add exercise to training ', () => {
        cy.url().should('include', '/exercises');
        cy.contains('.q-item__label', 'Ejercicios').click();
        
    });
  });