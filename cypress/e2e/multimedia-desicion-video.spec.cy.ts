import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_GROUP_NAME, URL_VIDEO} from "../helpers";
describe('Test de subida un video personales - Topico: manos', () => {
    beforeEach(() => {
        cy.visit(`${FRONTEND_URL}/#/login`);
        cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
        cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
        cy.get('button[type="submit"]').click();
        cy.get('button[aria-label="Expandir"]').click();
        cy.contains('div.q-item__label', `${TEST_GROUP_NAME}`).click();
        cy.get('button.q-btn').contains('Continuar').click();
        cy.contains('strong', 'Multimedia').click();
        cy.url().should('include', '/multimedia')
        cy.get('.q-tabs.bg-white > .q-tabs__content > .q-tab--inactive > .q-tab__content > .text-wrap').click();
    });
    it('Asignar el topico de cada video', () => {
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

describe('Test de subida dos videos personales - Topico: manos', () => {
    beforeEach(() => {
        cy.visit(`${FRONTEND_URL}/#/login`);
        cy.get('input[aria-label="Email"]').type(`${LOGIN_MAIL}`);
        cy.get('input[aria-label="Contraseña"]').type(`${LOGIN_PASS}`);
        cy.get('button[type="submit"]').click();
        cy.get('button[aria-label="Expandir"]').click();
        cy.contains('div.q-item__label', `${TEST_GROUP_NAME}`).click();
        cy.get('button.q-btn').contains('Continuar').click();
        cy.contains('strong', 'Multimedia').click();
        cy.url().should('include', '/multimedia')
        cy.get('.q-tabs.bg-white > .q-tabs__content > .q-tab--inactive > .q-tab__content > .text-wrap').click();
    });
    it('Asignar el topico de cada video', () => {
        cy.get('div[aria-label="Tiro penal"]').first().click().children().first().children().first().click({force: true});
        cy.get('div[aria-label="Tarjeta roja"]').first().click().children().first().children().first().click({force: true});
        cy.get('div[aria-label="Tiro penal"]').eq(1).click().children().first().children().first().click({force: true});
        cy.get('div[aria-label="Tarjeta roja"]').eq(1).click().first().children().first().children().first().click({force: true});
        cy.get(':nth-child(1) > .bg-grey-1 > :nth-child(2) > .column > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click()
        cy.contains('div.q-item__label', 'Manos').click();
        cy.get(':nth-child(1) > .bg-grey-1 > :nth-child(2) > .column > .q-btn > .q-btn__content > .q-icon').click();
        cy.get(':nth-child(2) > .bg-grey-1 > :nth-child(2) > .column').click();
        cy.get(':nth-child(2) > .bg-grey-1 > :nth-child(2) > .column > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click();
        cy.contains('div.q-item__label', 'Manos').click();
        cy.get(':nth-child(2) > .bg-grey-1 > :nth-child(2) > .column > .q-btn > .q-btn__content').click();
        cy.get('footer').find('button').eq(1).click()
        cy.get('.q-card__actions > .q-btn--unelevated > .q-btn__content > .block').click();
        cy.get('div.q-notification__message.col').contains('Videos aprobados corractamente');
        cy.get('.q-tabs.bg-white > .q-tabs__content > .q-tab--inactive > .q-tab__content > .text-wrap').click();
    });
});