describe('Login and logout testing', () => {

    it('Successful Login', () => {
      cy.visit('/');
      cy.get('.ico-login')
        .click(), //Login success
      cy.get('#Email')
       .type('Admin1902@gmail.com'),
  
      cy.get('#Password')
        .type('admin123'),
  
      cy.get('form > .buttons > .button-1')
        .click(),
  
      cy.get('.header-links > ul > :nth-child(1) > .account')
        .should('have.text','Admin1902@gmail.com'),
  
      cy.get('.ico-logout')
        .click(), //Logout 
  
      cy.get('.ico-login')
       .should('have.class','ico-login')
    });
  
    it('Login with Incorrect Username', () => {
      cy.visit('/');
      cy.get('.ico-login')
      .click(), 
  
      cy.get('#Email')
      .type('Admin19@gmail.com'), //Login with invalid username
  
      cy.get('#Password')
      .type('admin123'),
  
      cy.get('form > .buttons > .button-1')
      .click(),
  
      cy.get('.validation-summary-errors > span')
      .should('have.text','Login was unsuccessful. Please correct the errors and try again.'),
  
      cy.get('.validation-summary-errors > ul > li')
      .should('have.text', 'The credentials provided are incorrect')
    });
  
    it('Login with Incorrect Password', () => {
      cy.visit('/');
      cy.get('.ico-login')
      .click(), 
  
      cy.get('#Email')
      .type('Admin1902@gmail.com'), //Login with invalid password
  
      cy.get('#Password')
      .type('admin'),
  
      cy.get('form > .buttons > .button-1')
      .click(),
  
      cy.get('.validation-summary-errors > span')
      .should('have.text','Login was unsuccessful. Please correct the errors and try again.'),
  
      cy.get('.validation-summary-errors > ul > li')
      .should('have.text', 'The credentials provided are incorrect')   
    });
  
    it('Login with sensitive case (Username)', () => {
      cy.visit('/');
      cy.get('.ico-login')
      .click(), 
  
      cy.get('#Email')
      .type('ADMIN1902@gmail.com'), //Login with sensitive username
  
      cy.get('#Password')
      .type('admin123'),
  
      cy.get('form > .buttons > .button-1')
      .click(),
  
      cy.get('.header-links > ul > :nth-child(1) > .account')
      .should('have.text','Admin1902@gmail.com'),
  
      cy.get('.ico-logout')
      .click(), //Logout 
  
      cy.get('.ico-login')
      .should('have.class','ico-login')
    });
  
    it('Login with sensitive case (Password)', () => {
      cy.visit('/');
      cy.get('.ico-login').click(), 
      cy.get('#Email').type('Admin1902@gmail.com'), //Login with sensitive password
      cy.get('#Password').type('ADMIN123'),
      cy.get('form > .buttons > .button-1').click(),
      cy.get('.validation-summary-errors > span').should('have.text','Login was unsuccessful. Please correct the errors and try again.'),
      cy.get('.validation-summary-errors > ul > li').should('have.text', 'The credentials provided are incorrect')
    });
  });
  