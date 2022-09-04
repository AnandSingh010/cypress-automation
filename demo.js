describe("login", () => {
  it.only("login the complaince", () => {
    cy.visit("https://fr-login.pleaserecruit.me/Intermediate");
    cy.get("#txtUserName").type("FRLegacyCompAdmin");
    cy.get("#txtPassword").type("Frontrush_12345");
    cy.intercept("/some-3rd-party-script.js*").as("externalScript");
    cy.get(".btn-login-submit", { timeout: 80000 }).click();
    cy.get(".blue-color").click(); //.should('eq','https://fr-login.pleaserecruit.me/Intermediate')
  });
});

it("login the complaince", () => {
  // cy.clearCookie('react').clearCookie('angular');
  //cy.clearLocalAndSessionStorage();
  cy.visit(
    "https://frontrushrails.pleaserecruit.me/FrontrushCompliance/form/studentAthletesForm.aspx"
  );
  // cy.get('#txtUserName').type('FRLegacyCompAdmin')
  // cy.get('#txtPassword').type('Frontrush_12345')
  // cy.get('.btn-login-submit').click()
  // cy.intercept('/some-3rd-party-script.js*').as('externalScript');
  // cy.get('.blue-color').click()
  Cypress.Cookies.defaults({
    preserve: "AuthUser",
  });
});
