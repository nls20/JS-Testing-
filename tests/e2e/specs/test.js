// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
  })

  it('should have working number buttons', () => {
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '57')
  })

  it('should do the arithmetical operations to update the display with the result of the operation', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should allow multiple operations to be chained together', () => {
    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '16')
  })

  it('should be able to display positive numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')

  })

  it('should be able to display negative numbers', () => {
    cy.get('#number8').click();
    cy.get('#operator_subtract').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-1')

  })

  it('should be able to display decimal numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5')

  })


  it('should be able to display very large numbers', () => {
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '888888')

  })

  it('in exceptional circumstances multiply by 0', () => {
    cy.get('#number4').click();
    cy.get('#operator_multiply').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0')
  
  })

  it('in exceptional circumstances divide by 0', () => {
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error')
  
  })

})
