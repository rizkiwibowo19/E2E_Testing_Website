describe('Add product to cart and checkout product', () => {
  
    beforeEach(() => {
      // Visit the login page
      cy.visit('/login');
  
      // Perform login with the provided credentials
      cy.get('#Email')
        .type('Admin1902@gmail.com');

      cy.get('#Password')
        .type('admin123');

      cy.get('form > .buttons > .button-1')
        .click();

      // Verify login was successful
      cy.get('.header-links > ul > :nth-child(1) > .account')
        .should('have.text', 'Admin1902@gmail.com')
      
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

      cy.get('.header-links > ul > :nth-child(1) > .account')
      .click(),

      cy.get(':nth-child(2) > .inactive')
      .click(),
  
      cy.get('.ico-cart > .cart-label')
        .click(),

      cy.get('#termsofservice')
        .check(), // Pastikan checkbox "Terms of Service" dicentang

      cy.get('#checkout')
        .click(),

      cy.get('#billing-buttons-container > .button-1')
        .click(), 

      cy.wait(3000),
      cy.get('#shipping-buttons-container > .button-1')
        .click(), 

      cy.wait(3000),
      cy.get('#shipping-method-buttons-container > .button-1')
        .click(), 

      cy.wait(3000),
      cy.get('#payment-method-buttons-container > .button-1')
        .click(), 

      cy.wait(3000),
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
  });
  