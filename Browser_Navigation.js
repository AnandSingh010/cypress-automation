/// reference types="cypress" />

describe("Validate webdriveruni home links", () => {
  it("confirm link direct to correct page", () => {
    cy.visit("/");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    //cy.title().should('include','Webdriver | contactus')
    cy.go("back");
    cy.reload();
    cy.go("forward");
  });
});
