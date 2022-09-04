/// <reference types ="cypress" />

describe("auto complete", () => {
  it("auto complete", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
    cy.get("#myInput").type("g");
    cy.get("#myInputautocomplete-list >*").each(($ele, index, $list) => {
      const prod = $ele.text();
      const item = "Ginger";
      if (prod === item) {
        $ele.trigger("click");
        cy.get("#submit-button").click();
        cy.url().should("include", prod);
      }
    });
  });
});
