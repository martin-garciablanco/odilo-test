describe('HomePage', () => {
  it('should do the login', () => {
    cy.visit('/')
    cy.contains('Login')

   login()

    cy.contains("We value your creativity, surprise us!")
  })
})

function login(){
  cy.get("input[formcontrolname='username']").type("john-doe")
  cy.get("input[formcontrolname='password']").type("abc123.")
  cy.get("button").click()
}
