import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_GROUP_NAME, URL_VIDEO, tests } from "../helpers";

describe('Cargar video y confirmar iniciando desde login', () => {
    beforeEach(() => {
        cy.visit(`${FRONTEND_URL}/#/login`);
        cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
        cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
        cy.get('button[type="submit"]').click();
        cy.get('button[aria-label="Expandir"]').click();
        cy.contains('div.q-item__label', `${TEST_GROUP_NAME}`).click();
        cy.get('button.q-btn').contains('Continuar').click();
        cy.contains('strong', 'Multimedia').click();
        cy.url().should('include', '/multimedia');
        cy.get('.q-btn.q-btn-item.q-btn--standard.bg-primary').click();
      });
    it('Cargar video y confirmar video', () => {
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click();
        cy.get('.q-menu .q-item').contains('Oficiales').click();
        cy.get('input[aria-label="Tópico"]').click();
        cy.get('.q-menu .q-item').contains('Manos').click();
        cy.get('input[aria-label="Decisión técnica"]').click();
        cy.get('.q-menu .q-item').contains('No falta').click();
        cy.get('input[aria-label="Decisión disciplinaria"]').click();
        cy.get('.q-menu .q-item').contains('Tarjeta roja').click();
        cy.get('button[data-v-0dc4b3a4]').click();
        cy.get('.q-gutter-y-sm > .q-btn > .q-btn__content > .block').click();
        cy.get('input[type="file"]').selectFile(`${URL_VIDEO}`, { force: true });
        cy.get('button[type="submit"]').click();
        cy.get('div.q-notification__message.col').contains('El video se creo correctamente');
        cy.get('.q-tabs.bg-white > .q-tabs__content > .q-tab--inactive > .q-tab__content > .text-wrap').click();
        cy.get('div[aria-label="Tiro penal"]').first().click().children().first().children().first().click({force: true});
        cy.get('div[aria-label="Tarjeta roja"]').first().click().children().first().children().first().click({force: true});
        cy.get(':nth-child(1) > .bg-grey-1 > :nth-child(2) > .column > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
        cy.contains('div.q-item__label', 'Manos').click();
        cy.get(':nth-child(1) > .bg-grey-1 > :nth-child(2) > .column > .q-btn > .q-btn__content > .q-icon').click();
        cy.get('.video-footer > .q-btn--standard > .q-btn__content').click();
        cy.get('.q-card__actions > .q-btn--unelevated > .q-btn__content > .block').click();
        cy.get('.q-tabs.bg-white > .q-tabs__content > .q-tab--inactive > .q-tab__content > .text-wrap').click();
    })
})