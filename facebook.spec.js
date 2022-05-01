describe('Test Facebook Login Page', () => {
  beforeEach(() => {
    //Go to Facebook site and go though Clookie Banner
    cy.visit('https://facebook.com')
    cy.contains('button', "Nur erforderliche Cookies erlauben").click();
  });

  it('test FB Logo', () => {
    cy.get('.fb_logo')
      .should('have.class', 'fb_logo _8ilh img');
  });

  it('test type email', () => {
    cy.get('[data-testid="royal_email"]')
      .type('test_email')
      .should('have.value','test_email')
  })
  it('test type password', () => {
    cy.get('[data-testid="royal_pass"]')
      .type('test_password')
      .should('have.value','test_password')
  })
/* 
  it('test button without data-testid', () => {
    cy.get('[data-testid="royal_login_button"]').click();
  })
 */
  it('test button with wrong data', () => {
    cy.get('[data-testid="royal_email"]')
      .type('wrong_email')
    cy.get('[data-testid="royal_pass"]')
     .type('wrong_password')
    cy.get('[data-testid="royal_login_button"]').click()
    cy.url().should('have.contains', '/login')
  })
})