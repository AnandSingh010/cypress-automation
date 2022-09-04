describe("login", () => {
  it.only("login the complaince", () => {
    cy.visit("https://fr-login.pleaserecruit.me/Intermediate");
    cy.get("#txtUserName").type("FRLegacyCompAdmin");
    cy.get("#txtPassword").type("Frontrush_12345");
    cy.intercept("/some-3rd-party-script.js*").as("externalScript");
    cy.get(".btn-login-submit").click();
    // cy.get('.blue-color').click()//.should('eq','https://fr-login.pleaserecruit.me/Intermediate')
    cy.get(".orange-color").click();
    cy.get(".arrow-down").click();
    cy.get("#navigationSettings > :nth-child(7) > a").click();
    cy.get("#ctl00_ContentPlaceHolderMain_lnkAlphabetpnlAlphabetsA").click();
    cy.log("clicked on A");
    cy.get("#ctl00_ContentPlaceHolderMain_lnkAlphabetpnlAlphabetsC").click();
    cy.log("clicked on C");
  });
});
