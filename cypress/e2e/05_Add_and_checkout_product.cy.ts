describe('Add and Checkout Product', () => {
  
    beforeEach(() => {
      // Visit the login page
      cy.visit('/login');
  
      // Perform login with the provided credentials
      cy.get('#Email')
        .type('Ganteng@gmail.com');

      cy.get('#Password')
        .type('ganteng123');

      cy.get('form > .buttons > .button-1')
        .click();

      // Verify login was successful
      cy.get('.header-links > ul > :nth-child(1) > .account')
        .should('have.text', 'Ganteng@gmail.com');
    });

    it('Add product to cart', () => {
      cy.visit('/');
      cy.get('.top-menu > :nth-child(4) > a')
        .click(),

      cy.get(':nth-child(1) > .product-item > .details > .product-title > a')
        .click(),

      cy.get('#product_attribute_5_7_1')
        .select('2X'),

      cy.get('#product_attribute_5_7_1')
        .should('have.value','3'),

      cy.get('#add-to-cart-button-5')
        .click(), //Add product to cart

      cy.get('#bar-notification')
        .should('have.class','bar-notification success'),

      cy.get('#add-to-wishlist-button-5')
        .click(), //Add product to wishlist

      cy.get('.content')
        .should('have.text','The product has been added to your wishlist')
    });
 
    // Another test case that requires the user to be logged in
    it('Checkout product', () => {
      cy.visit('/');

      cy.get('.ico-cart > .cart-label')
        .click(),

      cy.get('#termsofservice')
        .check(), // Pastikan checkbox "Terms of Service" dicentang

      cy.get('#checkout')
        .click(),

      cy.get('#BillingNewAddress_CountryId')
        .scrollIntoView()
        .select('Indonesia'),

      cy.get('#BillingNewAddress_City')
        .type('Yogyakarta'),

      cy.get('#BillingNewAddress_Address1')
        .type('Jl. Ganteng'),

      cy.get('#BillingNewAddress_Address2')
        .type('Jl. Ganteng banget'),

      cy.get('#BillingNewAddress_ZipPostalCode')
        .type('55283'),

      cy.get('#BillingNewAddress_PhoneNumber')
        .type('082182973055'),

      cy.get('#BillingNewAddress_FaxNumber')
        .type('12345'),

      cy.get('#billing-buttons-container > .button-1')
        .click(), 

      cy.wait(5000),
      cy.get('#shipping-buttons-container > .button-1')
        .click(), 

      cy.wait(5000),
      cy.get('#shipping-method-buttons-container > .button-1')
        .click(), 

      cy.wait(5000),
      cy.get('#payment-method-buttons-container > .button-1')
        .click(), 

      cy.wait(5000),
      cy.get('#payment-info-buttons-container > .button-1')
        .click(), 

      cy.get('#confirm-order-buttons-container > .button-1')
        .scrollIntoView()
        .click(),

      cy.get('h1')
        .should('have.text','Checkout'),
      
      cy.get('strong')
        .should('have.text','Your order has been successfully processed!'),

      cy.get('.cart-qty')
        .should('have.text', '(0)')
    });

     // Logout after each test if necessary
      // cy.wait(5000),
      // afterEach(() => {
      // cy.get('.ico-logout')
      //   .click()

    //   cy.get('.ico-login')
    //     .should('have.class', 'ico-login')
    // });
    
  });
  