/// <reference types ="cypress" />

import "cypress-iframe";

describe("verify checkboxes", () => {
  it("verify checkboxes", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    var element = cy.get("input[value='option-1']");
    element.check();
    cy.get("input[value='option-3']").uncheck().should("not.be.checked");
  });
  it.only("radio btn", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click();
    // cy.get('#radio-buttons').find("input[type='radio']").eq(4).check()
    cy.get("input[value='lettuce']").should("be.enabled");
    cy.get("input[value='cabbage']").should("be.disabled");
    cy.get("input[value='pumpkin']").should("be.enabled");
  });
});
