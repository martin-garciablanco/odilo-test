describe('HomePage', () => {
  it('should do the login', () => {
    cy.visit('/')
    cy.contains('Login')

   login()

    cy.contains("We value your creativity, surprise us!")
  })

  it("should see book clubs", () => {
    cy.visit('/')
    cy.contains('Login')

    login()

    cy.get("[class=clubs-wrapper]")
    cy.get("[class=club]")
  })

  it('set and unset a club from favourite', () => {
    const favouriteButtonQuery = "[class=favourite-img]"
    cy.visit('/')
    cy.contains('Login')

   login()

   cy.get(favouriteButtonQuery)
    .then($el => $el[0])
    .should("have.attr", "src")
    .should("include", "heart-empty.svg")

    cy.get(favouriteButtonQuery).first().click()

    cy.get(favouriteButtonQuery)
    .then($el => $el[0])
    .should("have.attr", "src")
    .should("include", "heart-filled.svg")

    cy.get(favouriteButtonQuery).first().click()


  })
})

function login(){
  cy.get("input[formcontrolname='username']").type("john-doe")
  cy.get("input[formcontrolname='password']").type("abc123.")
  cy.get("button").click()
}
