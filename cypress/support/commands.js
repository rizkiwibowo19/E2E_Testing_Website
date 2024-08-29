// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.Commands.add('login', () => {
    const username = 'Admin1902@gmail.com';
    const password = 'admin123';
  
    cy.visit('/login');
    
    cy.get('input[name=Email]').should('be.visible').type(username); // Pastikan elemen Email terlihat sebelum mengetik
    cy.get('input[name=Password]').should('be.visible').type(password, { log: false }); // Pastikan elemen Password terlihat sebelum mengetik
    
    cy.get('button[type=submit]').should('be.visible').click(); // Pastikan button submit terlihat sebelum diklik
    cy.url().should('include', '/'); // Pastikan bahwa login berhasil dengan memeriksa URL
});
*/
