describe('Test Plan: E2E Tests', () => {
    it('should perform login successfully', () => {
      cy.visit('/login');
      cy.get('input[name="username"]').type('user123');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
    });
  
    it('should add items to the shopping cart', () => {
      cy.visit('/dashboard');
      cy.get('.product').first().click();
      cy.get('.add-to-cart').click();
      cy.get('.product').eq(1).click();
      cy.get('.add-to-cart').click();
      cy.get('.cart-items-count').should('contain', '2');
    });
  
    it('should checkout and complete the order', () => {
      cy.visit('/cart');
      cy.get('.checkout-button').click();
      cy.url().should('include', '/checkout');
      cy.get('input[name="shippingAddress"]').type('123 Main St');
      cy.get('input[name="creditCardNumber"]').type('1234567890123456');
      cy.get('.place-order-button').click();
      cy.get('.order-confirmation').should('contain', 'Order placed successfully');
    });
  });
  