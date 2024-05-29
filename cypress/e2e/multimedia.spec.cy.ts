import { FRONTEND_URL, LOGIN_MAIL, LOGIN_PASS, TEST_GROUP_NAME, URL_VIDEO, tests} from "../helpers";
describe('Multimedia Oficiales-Manos', () => {
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
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click();
        cy.get('.q-menu .q-item').contains('Oficiales').click();
        cy.get('input[aria-label="Tópico"]').click();
        cy.get('.q-menu .q-item').contains('Manos').click();
    });

    tests.forEach((test) => {
        it(`Add videos ${test.tecnica}-${test.disciplinaria}`, () => {
            cy.get('input[aria-label="Decisión técnica"]').click();
            cy.get('.q-menu .q-item').contains(test.tecnica).click();
            cy.get('input[aria-label="Decisión disciplinaria"]').click();
            cy.get('.q-menu .q-item').contains(test.disciplinaria).click();
            cy.get('button[data-v-0dc4b3a4]').click();
            cy.get('.q-gutter-y-sm > .q-btn > .q-btn__content > .block').click();
            cy.get('input[type="file"]').selectFile(`${URL_VIDEO}`, { force: true });
            cy.get('button[type="submit"]').click();
        });
    });
});
describe('Multimedia Oficiales-Disputas', () => {
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
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click();
        cy.get('.q-menu .q-item').contains('Oficiales').click();
        cy.get('input[aria-label="Tópico"]').click();
        cy.get('.q-menu .q-item').contains('Disputas').click();
    });
    tests.forEach((test) => {
        it(`Add videos ${test.tecnica}-${test.disciplinaria}`, () => {
            cy.get('input[aria-label="Decisión técnica"]').click();
            cy.get('.q-menu .q-item').contains(test.tecnica).click();
            cy.get('input[aria-label="Decisión disciplinaria"]').click();
            cy.get('.q-menu .q-item').contains(test.disciplinaria).click();
            cy.get('button[data-v-0dc4b3a4]').click();
            cy.get('.q-gutter-y-sm > .q-btn > .q-btn__content > .block').click();
            cy.get('input[type="file"]').selectFile(`${URL_VIDEO}`, { force: true });
            cy.get('button[type="submit"]').click();
        });
    });
});
describe('Multimedia Oficiales-Faltas tácticas', () => {
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
        cy.get('.q-btn.q-btn-item.q-btn--standard.bg-primary').click()
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click()
        cy.get('.q-menu .q-item').contains('Oficiales').click();
        cy.get('input[aria-label="Tópico"]').click()
        cy.get('.q-menu .q-item').contains('Faltas tácticas').click();
    });
    tests.forEach((test) => {
        it(`Add videos ${test.tecnica}-${test.disciplinaria}`, () => {
            cy.get('input[aria-label="Decisión técnica"]').click();
            cy.get('.q-menu .q-item').contains(test.tecnica).click();
            cy.get('input[aria-label="Decisión disciplinaria"]').click();
            cy.get('.q-menu .q-item').contains(test.disciplinaria).click();
            cy.get('button[data-v-0dc4b3a4]').click();
            cy.get('.q-gutter-y-sm > .q-btn > .q-btn__content > .block').click();
            cy.get('input[type="file"]').selectFile(`${URL_VIDEO}`, { force: true });
            cy.get('button[type="submit"]').click();
        });
    });
});
describe('Multimedia Personales-Manos', () => {
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
        cy.get('.q-btn.q-btn-item.q-btn--standard.bg-primary').click()
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click()
        cy.get('.q-menu .q-item').contains('Personales').click();
        cy.get('input[aria-label="Tópico"]').click()
        cy.get('.q-menu .q-item').contains('Manos').click();
    });
    tests.forEach((test) => {
        it(`Add videos ${test.tecnica}-${test.disciplinaria}`, () => {
            cy.get('input[aria-label="Decisión técnica"]').click();
            cy.get('.q-menu .q-item').contains(test.tecnica).click();
            cy.get('input[aria-label="Decisión disciplinaria"]').click();
            cy.get('.q-menu .q-item').contains(test.disciplinaria).click();
            cy.get('button[data-v-0dc4b3a4]').click();
            cy.get('.q-gutter-y-sm > .q-btn > .q-btn__content > .block').click();
            cy.get('input[type="file"]').selectFile(`${URL_VIDEO}`, { force: true });
            cy.get('button[type="submit"]').click();
        });
    });
});
describe('Multimedia Personales-Disputas', () => {
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
        cy.get('.q-btn.q-btn-item.q-btn--standard.bg-primary').click()
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click()
        cy.get('.q-menu .q-item').contains('Personales').click();
        cy.get('input[aria-label="Tópico"]').click()
        cy.get('.q-menu .q-item').contains('Disputas').click();
    });
    tests.forEach((test) => {
        it(`Add videos ${test.tecnica}-${test.disciplinaria}`, () => {
            cy.get('input[aria-label="Decisión técnica"]').click();
            cy.get('.q-menu .q-item').contains(test.tecnica).click();
            cy.get('input[aria-label="Decisión disciplinaria"]').click();
            cy.get('.q-menu .q-item').contains(test.disciplinaria).click();
            cy.get('button[data-v-0dc4b3a4]').click();
            cy.get('.q-gutter-y-sm > .q-btn > .q-btn__content > .block').click();
            cy.get('input[type="file"]').selectFile(`${URL_VIDEO}`, { force: true });
            cy.get('button[type="submit"]').click();
        });
    });
});
describe('Multimedia Personales-Faltas tácticas', () => {
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
        cy.get('.q-btn.q-btn-item.q-btn--standard.bg-primary').click()
        cy.get('input[aria-label="Cargar en entrenamientos *"]').click()
        cy.get('.q-menu .q-item').contains('Personales').click();
        cy.get('input[aria-label="Tópico"]').click()
        cy.get('.q-menu .q-item').contains('Faltas tácticas').click();
    });
    tests.forEach((test) => {
        it(`Add videos ${test.tecnica}-${test.disciplinaria}`, () => {
            cy.get('input[aria-label="Decisión técnica"]').click();
            cy.get('.q-menu .q-item').contains(test.tecnica).click();
            cy.get('input[aria-label="Decisión disciplinaria"]').click();
            cy.get('.q-menu .q-item').contains(test.disciplinaria).click();
            cy.get('button[data-v-0dc4b3a4]').click();
            cy.get('.q-gutter-y-sm > .q-btn > .q-btn__content > .block').click();
            cy.get('input[type="file"]').selectFile(`${URL_VIDEO}`, { force: true });
            cy.get('button[type="submit"]').click();
        });
    });
});