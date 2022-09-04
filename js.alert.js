/// reference types="cypress" />

describe("handeling alerts", () => {
  it("alerts", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").contains("CLICK ME!").click();
    cy.on("window:confirm", (str) => {
      return false;
    });
  });
});
