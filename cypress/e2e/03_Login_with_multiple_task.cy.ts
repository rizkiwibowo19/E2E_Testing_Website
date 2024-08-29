describe('Login with multiple task', () => {
  
    const baseUrl = 'https://demowebshop.tricentis.com';
    
    const correctUsername = 'Admin1902@gmail.com';
    const correctPassword = 'admin123';
    const incorrectUsername = 'Admin123@gmail.com';
    const incorrectPassword = 'admin';
    const sensitiveUsername = 'ADMIN1902@gmail.com';
    const sensitivePassword = 'ADMIN123';
  
    function login(username: string, password: string) {
      cy.visit(baseUrl + '/login');
      cy.get('#Email').type(username);
      cy.get('#Password').type(password);
      cy.get('form > .buttons > .button-1').click();
    }
  
    it('Successful Login', () => {
      login(correctUsername, correctPassword);
      cy.get('.account').should('contain', correctUsername);
    });
  
    it('Login with Incorrect Username', () => {
      login(incorrectUsername, correctPassword);
      cy.get('.validation-summary-errors')
        .should('contain', 'Login was unsuccessful. Please correct the errors and try again.')
        .and('contain', 'The credentials provided are incorrect');
    });
  
    it('Login with Incorrect Password', () => {
      login(correctUsername, incorrectPassword);
      cy.get('.validation-summary-errors')
        .should('contain', 'Login was unsuccessful. Please correct the errors and try again.')
        .and('contain', 'The credentials provided are incorrect');
    });

    it('Login with Incorrect Password', () => {
        login(correctUsername, incorrectPassword);
        cy.get('.validation-summary-errors')
          .should('contain', 'Login was unsuccessful. Please correct the errors and try again.')
          .and('contain', 'The credentials provided are incorrect');
      });

    it('Login with Sensitive Username', () => {
        login(sensitiveUsername, correctPassword);
        cy.get('.header-links > ul > :nth-child(1) > .account')
        .should('have.text', 'Admin1902@gmail.com')
    });

    it('Login with Sensitive password', () => {
        login(correctUsername, sensitivePassword);
        cy.get('.validation-summary-errors')
        .should('contain', 'Login was unsuccessful. Please correct the errors and try again.')
        .and('contain', 'The credentials provided are incorrect');
      });
  
  });
  