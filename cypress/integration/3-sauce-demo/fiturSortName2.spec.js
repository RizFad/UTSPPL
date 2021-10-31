describe('Fitur Sort Name 2', () => {
    it('Sort Name Sauce Demo', () => {
      cy.visit('https://www.saucedemo.com')
      
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('[id="user-name"]').type('problem_user')
      cy.get('input[type="password"]').type('secret_sauce')
      cy.get('[id="login-button"]').click()
      cy.get('.header_secondary_container').click() 
      cy.get('[ class="product_sort_container"]')
        .select('za')
    })
})