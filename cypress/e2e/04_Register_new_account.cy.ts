describe('Login and logout testing', () => {

    it('Register', () => {
      cy.visit('/'),
      cy.get('.ico-register')
        .click(),

      cy.get('#gender-male')
        .click(),

      cy.get('#FirstName')
        .type('Rizki'),

      cy.get('#LastName')
        .type('Wibowo'),

      cy.get('#Email')
        .type('Ganteng12@gmail.com'),

      cy.get('#Password')
        .type('ganteng123'),

      cy.get('#ConfirmPassword')
        .type('ganteng123'),

      cy.get('#register-button')
       .click(),

      cy.get('.header-links > ul > :nth-child(1) > .account')
        .should('have.text','Ganteng12@gmail.com')

      cy.get('.page-body > .buttons > .button-1')
        .click(),

      cy.get('.ico-logout')
        .click(),

      cy.get('.ico-login')
        .click(),

      cy.get('#Email')
        .type('Ganteng12@gmail.com'),

      cy.get('#Password')
        .type('ganteng123'),

      cy.get('form > .buttons > .button-1')
        .click(),

      cy.get('.header-links > ul > :nth-child(1) > .account')
        .should('have.text','Ganteng12@gmail.com')
    });
  });
  